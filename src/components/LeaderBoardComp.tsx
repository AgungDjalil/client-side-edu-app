import { NavLink } from "react-router-dom";

export function LeaderBoardComp() {
    const nama = "Tono Sutonojhkjh;jh;j"
    
    return (
        <div className="flex flex-col bg-white rounded-lg lg:mt-4 lg:mx-2 lg:w-2/5 h-max">
            <div className="flex my-3 ms-2 justify-center">
                <p className="text-lg font-bold text-slate-600 self-center me-2">Pengguna Teratas</p>
                <svg width="40px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#F4900C" d="M14.174 17.075L6.75 7.594l-3.722 9.481z"></path><path fill="#F4900C" d="M17.938 5.534l-6.563 12.389H24.5z"></path><path fill="#F4900C" d="M21.826 17.075l7.424-9.481l3.722 9.481z"></path><path fill="#FFCC4D" d="M28.669 15.19L23.887 3.523l-5.88 11.668l-.007.003l-.007-.004l-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z"></path><circle fill="#5C913B" cx="17.957" cy="22" r="3.688"></circle><circle fill="#981CEB" cx="26.463" cy="22" r="2.412"></circle><circle fill="#DD2E44" cx="32.852" cy="22" r="1.986"></circle><circle fill="#981CEB" cx="9.45" cy="22" r="2.412"></circle><circle fill="#DD2E44" cx="3.061" cy="22" r="1.986"></circle><path fill="#FFAC33" d="M33 34H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2zm0-3.486H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2z"></path><circle fill="#FFCC4D" cx="1.447" cy="8.042" r="1.407"></circle><circle fill="#F4900C" cx="6.75" cy="7.594" r="1.192"></circle><circle fill="#FFCC4D" cx="12.113" cy="3.523" r="1.784"></circle><circle fill="#FFCC4D" cx="34.553" cy="8.042" r="1.407"></circle><circle fill="#F4900C" cx="29.25" cy="7.594" r="1.192"></circle><circle fill="#FFCC4D" cx="23.887" cy="3.523" r="1.784"></circle><circle fill="#F4900C" cx="17.938" cy="5.534" r="1.784"></circle></svg>
            </div>
            <div className="flex justify-between mx-2 mb-4">
                <div className="flex">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5" />
                        <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <NavLink to={"/"} className="self-center ms-1">
                        {
                            nama.length > 11 ? nama.slice(0, 11) + '...': nama
                        }                    
                    </NavLink>
                </div>
                <p>poin 1000</p>
            </div>
        </div>
    )
}