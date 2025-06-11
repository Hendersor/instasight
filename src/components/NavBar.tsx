import { BsInstagram, BsPerson, BsSearch, BsFillPlusCircleFill, BsBookmarkFill } from "react-icons/bs";
import { NavIcon } from "./NavIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

const NavBar = (): JSX.Element => {

    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext)!;

    const handleAuthAction = () => {
        if (isAuthenticated) {
            logout();
            navigate("/login");
        } else {
            navigate("/login");
        }
    };



    return (
        <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
            <div className="h-16 px-4 flex items-center justify-between max-w-screen-xl mx-auto">
                
                <div className="flex items-center gap-3 min-w-0">
                    <NavIcon 
                        icon={BsInstagram} 
                        to="/" 
                        className="text-2xl text-gray-700 hover:text-blue-600 transition-colors flex-shrink-0" 
                    />
                    <h1 className="text-xl font-semibold text-gray-900 truncate">
                        Instasight
                    </h1>
                </div>

                {isAuthenticated && (
                    <div className="hidden md:flex items-center gap-6">
                        <NavIcon 
                            icon={BsSearch} 
                            to="/search" 
                            className="text-xl text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100" 
                        />
                        <button className="text-xl text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100">
                            <BsFillPlusCircleFill />
                        </button>
                        <NavIcon 
                            icon={BsBookmarkFill} 
                            to="/bookmarks" 
                            className="text-xl text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100" 
                        />
                        <NavIcon 
                            icon={BsPerson} 
                            to="/profile" 
                            className="text-xl text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100" 
                        />
                    </div>
                )}

                <div className="flex-shrink-0">
                    <button
                        onClick={handleAuthAction}
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 min-w-[80px]"
                    >
                        {isAuthenticated ? "Log out" : "Log in"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export { NavBar };