import { BsHouseDoorFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { NavIcon } from "./NavIcon";

const TabBar = ():JSX.Element => {  
  return (
    <nav className="border-t-2 border-gray-200 bg-white fixed bottom-0 w-full flex justify-around p-3 md:hidden">
        <NavIcon icon={BsHouseDoorFill} to="/" />
        <BsFillPlusCircleFill />
        <BsSearch />
        <NavIcon icon={BsBookmarkFill} to="/bookmarks" />
        <NavIcon icon={BsPerson} to="/profile" />
    </nav>
  )
}

export {TabBar}