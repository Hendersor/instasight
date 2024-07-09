import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookmarks"/>
        <Route path="/login"/>
        <Route path="/sign"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
