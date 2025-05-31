import { ProfilePictures } from "./ProfilePictures";

const ProfilePicturesContainer = () => {
  return (
    <div className="w-full h-auto grid grid-cols-3 justify-start gap-2 py-4 border border-gray-300 rounded-t-xl shadow-md bg-white">
      <ProfilePictures/>  
      <ProfilePictures/>  
      <ProfilePictures/>    
    </div>
  );
}

export {ProfilePicturesContainer}