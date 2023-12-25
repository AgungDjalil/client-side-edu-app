import { NavLink } from "react-router-dom";
import contohIcon from "../assets/category-svgrepo-com.svg"

export function CategoryComp() {

    return (
        <>
            <div className="flex flex-wrap gap-1 lg:hidden">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Semua Mapel</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Semua Tingkat Pendidikan</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Semua</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>

            <div className="hidden lg:flex flex-col w-64 bg-white rounded-lg mt-4 me-2 p-2 text-center h-max">
                <p className="mb-2 mx-3 font-bold text-slate-600 border-b-2 h-max border-slate-600">Mapel</p>
                <NavLink to={"/"} className="my-2 p-2 rounded-xl hover:underline hover:bg-primaryBg">Semua Mapel</NavLink>
                <NavLink to={"/"} className="my-2 p-2 rounded-xl hover:underline hover:bg-primaryBg">Matematika</NavLink>
                <NavLink to={"/"} className="my-2 p-2 rounded-xl hover:underline hover:bg-primaryBg">IPA</NavLink>
                <NavLink to={"/"} className="my-2 p-2 rounded-xl hover:underline hover:bg-primaryBg">Agama</NavLink>
                <NavLink to={"/"} className="my-2 p-2 rounded-xl hover:underline hover:bg-primaryBg">B. Indonesia</NavLink>
            </div>
        </>
    )
}