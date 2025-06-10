import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { Routes, Route } from "react-router-dom";
import {SignIn} from "./pages/SignIn"
import { Profile } from "./pages/Profile";
import { Bookmarks } from "./pages/Bookmarks";
import { NotFound } from "./pages/NotFound";
import { TabBar } from "./components/TabBar";
import { NavBar } from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";


const App = (): JSX.Element => {
  const {isAuthenticated} = useContext(AuthContext)!

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmarks" element={
          <PrivateRoute>
            <Bookmarks/>
          </PrivateRoute>
          }/>
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
          }/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {isAuthenticated && (<TabBar />)}
    </>

  )
}

export default App
