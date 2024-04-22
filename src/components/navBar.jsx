import { BsInstagram } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="border-y h-16 flex justify-between px-5">
            <div className="flex justify-between w-40 px-2.5">

                <BsInstagram className="w-6 h-6 self-center" />
                <h1 className="self-center text-xl">Instasight</h1>

            </div>

            <div className="flex justify-between items-center w-28 px-2.5">
                <BsBookmark className="w-5 h-5 self-center pointer"/>
                
                <figure className="rounded-full border-solid border border-black h-10 w-10 flex justify-center items-center pointer ">
                    <AiOutlineUser className="w-6 h-6 self-center pointer"/>
                </figure>
            </div>
        </nav>
    )
}


export {NavBar};