import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";


const PictureContainer = ():JSX.Element => {
  return (
    <section className="border border-gray-700 w-80 h-[470px] mx-auto rounded-md my-5">
        <div className="h-10 w-full flex justify-start items-center">
          <figure className="h-full w-12 flex justify-center items-center overflow-hidden">
            <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09H3bRBTPEqWdsSNuOz7b284eOBt4dDcuSQ&s" alt="user image" />
          </figure>
          <h3 className="mx-2">username</h3>
        </div>

        <figure className='w-full h-80 border-solid border-2 border-red' >
            <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/18156147/pexels-photo-18156147/free-photo-of-mujer-sentado-novia-fotografia-de-boda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />
        </figure>

        <div className=" w-full h-[87px] px-2">
          <div className="w-full h-4/6 flex flex-col justify-between">
            <p className="font-medium text-base">234 Likes</p>
            <div className="w-full h-2/4 flex justify-between">
             <BsHeart className="w-6 h-6"/>
             <BsBookmark className="w-6 h-6"/>
            </div>
          </div>
          <div className="h-3/6 w-full">
            <p>
              <h3 className="font-bold">username</h3>
              description
            </p>
          </div>
        </div>
    </section>
  )
}

export {PictureContainer}