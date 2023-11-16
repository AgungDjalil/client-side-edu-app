import { Outlet } from "react-router-dom";

export function NavLay() {
    return (
        <div className="bg-primaryBg h-screen">
            <div className="flex justify-between mx-4">
                <div className="mt-10">
                    logo
                </div>
                <div className="flex font-bold mt-10">
                    <button className="bg-white px-8 py-2 rounded-xl">Masuk</button>
                    <button className="mx-16">Daftar</button>
                </div>
            </div>

            <Outlet />
        </div>
    )
}