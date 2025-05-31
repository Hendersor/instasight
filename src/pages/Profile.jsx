import { Divider } from "../components/Divider";
import { ProfileCard } from "../components/ProfileCard";
import { ProfilePicturesContainer } from "../components/ProfilePicturesContainer";

const Profile = () => {
  return (
    <section className="w-[90%] h-screen mx-auto">
        <ProfileCard/>
        <Divider/>
        <ProfilePicturesContainer/>
    </section>
  );
}


export {Profile};
