import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { useAuthContext } from "../../context/AuthContext";
import { ProfilComp } from "./ProfilComp";

export function NavbarComp() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { userID, isReady } = useAuthContext()

    return (
        <div className="border-b border-gray-400">
            <div className="flex items-center mx-2 py-4 gap-2">
                <a href="/home">
                    <img src={logo} className="w-20 md:w-32" alt="logo" />
                </a>

                {/* form mencari pertanyaan */}
                <form className="w-full mx-2">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full md:rounded-lg md:text-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari pertanyaan..." />
                    </div>
                </form>
                {
                    userID && isReady ?
                        <ProfilComp /> :
                        <nav className="flex">
                            <section className="MOBILE-MENU flex lg:hidden">
                                <div
                                    className="HAMBURGER-ICON space-y-2"
                                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                                >
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                </div>

                                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> // toggle className based on isNavOpen state
                                    <div
                                        className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                                    >
                                        <svg
                                            className="h-8 w-8 text-gray-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                        <li className="border-b border-gray-400 my-8 uppercase">
                                            <a href="/about">About</a>
                                        </li>
                                        <li className="border-b border-gray-400 my-8 uppercase">
                                            <a href="/portfolio">Portfolio</a>
                                        </li>
                                        <li className="border-b border-gray-400 my-8 uppercase">
                                            <a href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* tampilan desktop */}
                            <ul className="hidden space-x-2 lg:flex">
                                <li>
                                    <NavLink to={'/login'} className="bg-white py-3 px-2 rounded-xl">Masuk</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/register'} className="py-3 px-2">Daftar</NavLink>
                                </li>
                            </ul>
                        </nav>
                }
                <style>
                    {`
                        .hideMenuNav {
                            display: none;
                        }
                        .showMenuNav {
                            display: fixed;
                            position: absolute;
                            width: 100%;
                            height: 100vh;
                            top: 0;
                            left: 0;
                            background: white;
                            z-index: 10;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;
                        }
                    `}
                </style>
            </div>
        </div>
    )
}