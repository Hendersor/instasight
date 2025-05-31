import { BsInstagram } from "react-icons/bs"
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { NavIcon } from "./NavIcon";

const NavBar = () => {
    return (
        <nav className="border-y h-16 flex justify-between px-5 sticky top-0 bg-white">
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
        </nav>
    )
}


export {NavBar};