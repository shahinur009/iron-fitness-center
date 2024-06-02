import { Link, } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";



const Navbar = () => {
    const { user, logOut } = useAuth() || {};
    console.log(user)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
        // console.log(Theme)

    }


    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)

    }, [theme])

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-trainer'>All Trainer</Link></li>
        <li><Link to='/all-classes'>All Classes</Link></li>
        <li><Link to='/all-classes'>Community</Link></li>
        {user ? <><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></>
            : <><li><Link to='/login'>Login</Link></li></>}

        {/* {
        user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
    }
    {
        user && !isAdmin && <li><Link to='/dashboard/userHome'>Dashboard</Link></li>
    } */}

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
        <>
            <div className="navbar  bg-black text-[#FFFFFF] h-20 container mx-auto py-8 px-8 sticky top-0 left-0 right-0 z-50">
                <Link to='/' className="flex-1">
                    <img className="w-24 h-20" src="/src/assets/logo.jpg" alt="" />
                    <span className="text-[12px] md:text-2xl font-bold">IRON FITNESS</span>
                </Link>
                <div className="flex-none gap-2 text-black">
                    <div className="hidden md:block justify-center">
                        <ul className="flex gap-5 text-white">
                            {navOptions}
                            {/* dark and light theme use here */}
                            <label className="swap swap-rotate">
                                <input type="checkbox" onChange={handleToggle}
                                    checked={theme === 'light' ? false : true} />
                            </label>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                            <div title={user?.displayName} className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" referrerPolicy='no-referrer'
                                    src={user?.photoURL} />
                            </div>

                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] md:hidden p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            {navOptions}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;