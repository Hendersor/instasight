import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {SignIn} from "./pages/SignIn"
import { Profile } from "./pages/Profile";
import { Bookmarks } from "./pages/Bookmarks";
import { NotFound } from "./pages/NotFound";
import { TabBar } from "./components/TabBar";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <TabBar />
    </BrowserRouter>
  )
}

export default App
