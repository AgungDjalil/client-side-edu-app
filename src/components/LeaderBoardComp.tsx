import { NavLink } from "react-router-dom";

export function LeaderBoardComp() {
    return (
        <div className="flex flex-col bg-white rounded-lg">
            <div className="flex my-3 ms-2 justify-center">
                <p className="text-lg font-bold text-slate-600 self-center me-2">Pengguna Teratas</p>
                <svg width="40px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#F4900C" d="M14.174 17.075L6.75 7.594l-3.722 9.481z"></path><path fill="#F4900C" d="M17.938 5.534l-6.563 12.389H24.5z"></path><path fill="#F4900C" d="M21.826 17.075l7.424-9.481l3.722 9.481z"></path><path fill="#FFCC4D" d="M28.669 15.19L23.887 3.523l-5.88 11.668l-.007.003l-.007-.004l-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z"></path><circle fill="#5C913B" cx="17.957" cy="22" r="3.688"></circle><circle fill="#981CEB" cx="26.463" cy="22" r="2.412"></circle><circle fill="#DD2E44" cx="32.852" cy="22" r="1.986"></circle><circle fill="#981CEB" cx="9.45" cy="22" r="2.412"></circle><circle fill="#DD2E44" cx="3.061" cy="22" r="1.986"></circle><path fill="#FFAC33" d="M33 34H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2zm0-3.486H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2z"></path><circle fill="#FFCC4D" cx="1.447" cy="8.042" r="1.407"></circle><circle fill="#F4900C" cx="6.75" cy="7.594" r="1.192"></circle><circle fill="#FFCC4D" cx="12.113" cy="3.523" r="1.784"></circle><circle fill="#FFCC4D" cx="34.553" cy="8.042" r="1.407"></circle><circle fill="#F4900C" cx="29.25" cy="7.594" r="1.192"></circle><circle fill="#FFCC4D" cx="23.887" cy="3.523" r="1.784"></circle><circle fill="#F4900C" cx="17.938" cy="5.534" r="1.784"></circle></svg>
            </div>
            <div className="flex justify-between mx-2 mb-4">
                <div className="flex">
                    <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <NavLink to={"/"} className="self-center ms-1">
                        Tono Sutono
                    </NavLink>
                </div>
                <p>1000 poin</p>
            </div>
            <div className="flex justify-between mx-2 mb-4">
                <div className="flex">
                    <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <NavLink to={"/"} className="self-center ms-1">
                        Tono Sutono
                    </NavLink>
                </div>
                <p>1000 poin</p>
            </div>
            <div className="flex justify-between mx-2 mb-4">
                <div className="flex">
                    <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <NavLink to={"/"} className="self-center ms-1">
                        Tono Sutono
                    </NavLink>
                </div>
                <p>1000 poin</p>
            </div>
        </div>
    )
}