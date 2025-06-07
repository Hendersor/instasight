import { BsInstagram } from "react-icons/bs"
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { NavIcon } from "./NavIcon";
import { useNavigate } from "react-router-dom";

const NavBar = ():JSX.Element => {
    const navigate = useNavigate();
    return (
        <nav className="border-y h-16 flex justify-between items-center px-5 sticky top-0 bg-white">
            <div className="flex justify-between items-center w-40 px-2.5 md:w-[200px]">
                <NavIcon icon={BsInstagram} to="/" className=" self-center" />
                <h1 className="self-center text-xl">Instasight</h1>
                <NavIcon icon={BsSearch} to="/" className="hidden md:flex " />
            </div>

            <div className="hidden md:flex justify-between self-center w-40 px-2.5">
                <BsFillPlusCircleFill className=" self-center" />
                <NavIcon icon= {BsBookmarkFill} to="/bookmarks" className=" self-center" />
                <NavIcon icon={BsPerson} to="/profile" className=" self-center" />
            </div>

            <button onClick={() => navigate("/login")} className="h-[50%] max-w-[120px] py-1.5 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 text-sm">
                Log in
            </button>
        </nav>
    )
}


export {NavBar};