import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import useAuth from '../../../hook/useAuth'
import useRole from '../../../hook/useRole'
import MenuItems from './Menu/MenuItems'
import TrainerMenu from './Menu/TrainerMenu'
import MemberMenu from './Menu/MemberMenu'
import AdminMenu from './Menu/AdminMenu'


const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role] = useRole();
    // console.log(role, isLoading)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/m0cbnrF/logo.jpg'
                                alt='logo'
                                width='100'
                                height='100'
                            />
                            <p className='text-black'>IRON FITNESS</p>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col overflow-x-hidden bg-orange-400 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                <img
                                    // className='hidden md:block'
                                    src='https://i.ibb.co/m0cbnrF/logo.jpg'
                                    alt='logo'
                                    width='100'
                                    height='100'
                                />
                                <p className='text-black'>IRON FITNESS</p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                        {/*  Menu Items */}
                        <nav>
                            {/* Statistics */}
                            <MenuItems label='Statistics' address='/dashboard' icon={BsGraphUp}></MenuItems>
                            {/* Trainer Menu */}
                            {console.log(role)}
                            {role === 'member' && <MemberMenu />}
                            {role === 'trainer' && <TrainerMenu />}
                            {role === 'admin' && <AdminMenu />}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    <MenuItems label='Profile' address='profile' icon={FcSettings} />
                    <Link to='/'
                        onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar