import { NavLink } from "react-router-dom"
import logo from "../../assets/Logo.png"
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export function LandingPage() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollContent = (direction: string) => {
        const container = document.getElementById('scrollContainer');

        if (container) {
            if (direction === 'left')
                setScrollPosition(scrollPosition - 500);

            if (direction === 'right')
                setScrollPosition(scrollPosition + 500);

            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bg-primaryBg h-screen">
            <div className="flex justify-between mx-4 mb-8">
                <NavLink to={'/'} className="mt-4">
                    <img src={logo} className="w-20" alt="" />
                </NavLink>
                <div className="flex font-bold mt-4 text-sm gap-4">
                    <NavLink to={'/login'} className="bg-white py-3 px-2 rounded-xl">Masuk</NavLink>
                    <NavLink to={'/register'} className="py-3 px-2">Daftar</NavLink>
                </div>
            </div>

            <div className="flex justify-center mt-36 text-center">
                <div className="w-3/4 lg:w-3/6">
                    <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari pertanyaan..." />
                        </div>
                    </form>
                    <div className="mb-40">
                        <h1 className="font-bold text-3xl my-4">Malu Bertanya Sesat Dijalan</h1>
                        <p className="font-light text-sm">Ayo bertanya di discitheta, tempat jutaan siswa dan guru berbagi ilmu, belajar bersama untuk menyelesaikan soal.</p>
                    </div>

                    <div className="flex">
                        <button onClick={() => scrollContent('left')}
                            className="rounded-full bg-white px-4">
                            <svg width="16" height="16" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM4 10.5H2V13.5H4V10.5Z" fill="black" />
                            </svg>
                        </button>
                        <div id="scrollContainer" className="flex overflow-x-auto hide-scrollbar-crhome hide-scrollbar-ms">
                            <div className="p-4 mx-6 whitespace-nowrap">B. Indonesia</div>
                            <div className="p-4 mx-6 whitespace-nowrap">Fisika</div>
                            <div className="p-4 mx-6 whitespace-nowrap">Matematika</div>
                            <div className="p-4 mx-6 whitespace-nowrap">B Inggris</div>
                            <div className="p-4 mx-6 whitespace-nowrap">Agama</div>
                            <div className="p-4 mx-6 whitespace-nowrap">Astronomi</div>
                            <div className="p-4 mx-6 whitespace-nowrap">PPKN</div>
                        </div>
                        <button onClick={() => scrollContent('right')}
                            className="rounded-full bg-white px-4">
                            <svg width="16" height="16" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3212 12.2251C12.9 11.6324 12.8887 10.6827 12.296 10.1039L2.63707 0.67229C2.04435 0.0935187 1.09467 0.104826 0.515898 0.697546C-0.0628734 1.29027 -0.051566 2.23995 0.541154 2.81872L9.12686 11.2024L0.743201 19.7881C0.16443 20.3808 0.175737 21.3305 0.768457 21.9092C1.36118 22.488 2.31086 22.4767 2.88963 21.884L12.3212 12.2251ZM9.26603 12.7008L11.2659 12.677L11.2302 9.67722L9.23031 9.70103L9.26603 12.7008Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}