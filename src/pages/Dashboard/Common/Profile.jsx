import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hook/useAuth'
import useRole from '../../../hook/useRole'
import UpdateProfile from './UpdateProfile'

const Profile = () => {
    const { user, loading } = useAuth() || {}
    const [role, isLoading] = useRole()




    if (isLoading || loading) return <div className="w-16 h-16 mx-auto bg-orange-400 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/m0cbnrF/logo.jpg'
                    className='w-full mb-4 rounded-md h-64 p-2'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-2 uppercase px-4 text-xs text-white font-bold  rounded-full bg-orange-400'>
                        {role}
                    </p>
                    <p className='mt-2 text-xl bg-orange-400 font-medium text-white '>
                        User Id: {user?.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>
                            <p className='flex flex-col'>
                                Login Time
                                <span className='font-bold text-black '>{user?.metadata?.lastSignInTime ? new Date(user?.metadata.lastSignInTime).toLocaleString() : 'N/A'}</span>
                            </p>

                            <div>
                                <UpdateProfile />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile