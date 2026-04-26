import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
  
import Login from "./login";
import Signup from "./signup";
import ProtectedRouter from "./components/protectdRouter";
import AdminPage from "./components/AdminPage";
function App() {
  return (
    <Routes>
      {/* public routing  */}
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route element={<ProtectedRouter allowedRole={["user"]} />}>
        <Route path="/user/home" element={<Home />}></Route>
      </Route>

      <Route element={<ProtectedRouter allowedRole={["admin"]} />}>
        <Route path="/admin/dashoard" element={<AdminPage />} />
      </Route>

      <Route path="*" element={<h1>404 page not found</h1>}></Route>
    </Routes>
  );
}
export default App;
