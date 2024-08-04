import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import {SignIn} from "./pages/SignIn"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmarks"/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/notFound" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
