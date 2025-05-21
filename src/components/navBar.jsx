import { BsInstagram } from "react-icons/bs"
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <nav className="border-y h-16 flex justify-between px-5 sticky top-0 bg-white">
            <div className="flex justify-between items-center w-40 px-2.5 md:w-[200px]">
                <BsInstagram className="w-6 h-6 self-center" />
                <h1 className="self-center text-xl">Instasight</h1>
                <BsSearch className="hidden md:flex w-6 h-6" />
            </div>

            <div className="hidden md:flex justify-between w-40 px-2.5">
                <BsFillPlusCircleFill className="w-6 h-6 self-center" />
                <BsPerson className="w-6 h-6 self-center" />
            </div>
        </nav>
    )
}


export {NavBar};