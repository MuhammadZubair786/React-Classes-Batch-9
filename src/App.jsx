import { Routes,Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/About"
import Contact from "./components/Contact"
function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<h1>404 page not found</h1>}></Route>
    </Routes>
  )
}
export default App