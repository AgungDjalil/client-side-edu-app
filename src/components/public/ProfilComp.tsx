import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import logoUser from "../../assets/user-profile.svg"

export function ProfilComp() {
    const { userID, signOut } = useAuthContext()
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleViewProfile = () => {
        console.log(`View Profile: ${userID}`);
        setMenuOpen(false);
    };

    const handleLogout = () => {
        console.log('Logout');
        setMenuOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
                <img src={logoUser} alt="" />
            </button>

            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
                    <NavLink to={`/profile/${userID}`} className="block px-4 py-2 text-gray-800" onClick={handleViewProfile}>
                        Lihat Profil
                    </NavLink>
                    <button className="block px-4 py-2 text-gray-800" onClick={() => signOut()}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}