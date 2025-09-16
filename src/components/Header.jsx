import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <nav className="w-full z-20 top-0 start-0 mb-10  max-w-screen bg-[#0a0e1a] text-white py-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Harshal. <span className="text-violet-500">dev</span></span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white focus:outline-none focus:ring-blue-300 font-medium  text-xl text-center "><i className="ri-sun-line"></i></button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            </svg>
                        </button>
                    </div>
                    <ul className="flex align-middle flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                to="/"
                                className={`block rounded-sm md:p-0 ${pathname === "/"
                                        ? "text-white border-b-2 border-violet-600"
                                        : "hover:border-b-2 hover:border-violet-600 border-transparent  transition-all"
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`block rounded-sm md:p-0 ${pathname === "/about"
                                        ? "text-white border-b-2 border-violet-600"
                                        : "hover:border-b-2 hover:border-violet-600 border-transparent transition-all "
                                    }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/skills"
                                className={`block rounded-sm md:p-0 ${pathname === "/skills"
                                        ? "text-white border-b-2 border-violet-600"
                                        : "hover:border-b-2 hover:border-violet-600 border-transparent transition-all "
                                    }`}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/achievement" className={`block rounded-sm md:p-0 ${pathname === "/achievement"
                                        ? "text-white border-b-2 border-violet-600"
                                        : "hover:border-b-2 hover:border-violet-600 border-transparent transition-all "
                                    }`}>
                                Achievement
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`block rounded-sm md:p-0 ${pathname === "/contact"
                                        ? "text-white border-b-2 border-violet-600"
                                        : "hover:border-b-2 hover:border-violet-600 border-transparent transition-all"
                                    }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    )
}

export default Header