import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmarks"/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/sign"/>
        <Route path="/notFound" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
