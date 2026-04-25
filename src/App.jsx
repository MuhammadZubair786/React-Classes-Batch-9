import { Routes,Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/About"
import Contact from "./components/Contact"
import Products from "./components/User"
import ProductDetails from "./components/productDetails"
import UserType from "./UserType"
import CheckType from "./checkUserType"
import UserPage from "./components/UserPage"
import UserPageDetails from "./components/userPageDetail"
function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/product" element={<Products/>}></Route>
      <Route path="/product/:productId" element={<ProductDetails/>}></Route>
      <Route path="/team" element={<UserType/>} ></Route>
      <Route path="/team/:teamType" element={<CheckType/>} ></Route>
      <Route path="/users" element={<UserPage/>}></Route>
      <Route path="/users/:userIdDetails" element={<UserPageDetails/>}></Route>


      <Route path="*" element={<h1>404 page not found</h1>}></Route>
    </Routes>
  )
}
export default App