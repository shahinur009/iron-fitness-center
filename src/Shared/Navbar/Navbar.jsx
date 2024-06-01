// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { FaShoppingCart } from 'react-icons/fa';
// import useCart from "../../hooks/useCart";
// import useAdmin from "../../hooks/useAdmin";



const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    // const [cart] = useCart();

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .then(error => console.log(error))

    // }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-trainer'>All Trainer</Link></li>
        <li><Link to='/all-classes'>All Classes</Link></li>
        {/* {
            user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to='/dashboard/userHome'>Dashboard</Link></li>
        } */}
        <li><Link to='/all-classes'>Community</Link></li>
        {/* <li>
            <Link to='/dashboard'>
                <button className="flex">
                    <FaShoppingCart />
                    <div className="badge badge-secondary -mt-3 -ml-2">+{cart.length}</div>
                </button>
            </Link>
        </li> */}


        {/* <li><Link to='/signup'>SignUp</Link></li> */}

        {/* {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
            </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        } */}



    </>
    return (
        <div>
            <div className="navbar z-20 max-w-screen-xl  bg-black text-[#FFFFFF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="flex justify-center items-center" to='/'>
                        <img className="w-24 h-20" src="/src/assets/logo.jpg" alt="" />
                        <span className="text-[12px] md:text-2xl font-bold">IRON FITNESS</span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/login' className="navbar-end">
                    <a className="btn">Login</a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;