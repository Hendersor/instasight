import { NavBar } from "../components/NavBar";
import { IoIosArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-full flex flex-col items-center justify-center px-5">
        <figure>
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1722806007/404Error_laptp9.png"
            alt="404 image"
          />
        </figure>

        <p className="text-center my-5">
          The link you clicked may be broken or the page may have been removed
          or renamed.
        </p>

        <button className="bg-black text-white w-[125px] px-4 h-9 rounded-md pointer flex items-center justify-between">
            <IoIosArrowRoundBack className="w-7 h-7"/>
            Go back
          </button>
      </div>
    </>
  );
}

export {NotFound}