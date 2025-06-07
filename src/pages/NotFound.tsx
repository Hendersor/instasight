import { IoIosArrowRoundBack } from "react-icons/io";

const NotFound = ():JSX.Element => {
  return (
    <>
      <div className="w-11/12 h-[400px] mx-auto flex flex-col items-center px-5 my-5 rounded-lg shadow-xl">
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
          <IoIosArrowRoundBack className="w-7 h-7" />
          Go back
        </button>
      </div>
    </>
  );
}

export {NotFound}