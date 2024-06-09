import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hook/axiosPublic/useAxiosPublic";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    // const getToken = async (email) => {
    //     try {
    //         const { data } = await axios.post(
    //             `${import.meta.env.VITE_API_URL}/jwt`,
    //             { email },
    //             { withCredentials: true }
    //         );
    //         return data;
    //     } catch (error) {
    //         console.error("Error fetching token:", error);
    //         throw error;
    //     }
    // };

    const saveUser = async (user) => {
        const currentUser = {
            email: user?.email,
            name: user?.displayName,
            role: 'member',
            status: 'Verified',
        };
        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/user`,
                currentUser
            );
            return data;
        } catch (error) {
            console.error("Error saving user:", error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(true); // Start loading

            if (currentUser) {
                try {
                    // const tokenData = await getToken(currentUser.email);
                    // const userData = await saveUser(currentUser);

                    const userInfo = { email: currentUser?.email };
                    const res = await axiosPublic.post('/jwt', userInfo);

                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }

                } catch (error) {
                    console.error("Error during auth state change:", error);
                } finally {
                    setLoading(false); // End loading
                }
            } else {
                localStorage.removeItem('access-token');
                setLoading(false); // End loading
            }
        });

        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        setLoading,
        // getToken,
        saveUser,
        updateUserProfile,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
