import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

let Navbar = (props) => {
    let location = useLocation()
 
  return (
    <nav>
      <Link className={location.pathname=="/" ?"active f1":"link f1" } to={"/"}>
        Home Page
      </Link>
      <Link className={location.pathname=="/about" ?"active f1":"link f1" } to={"/about"}>
        About Page
      </Link>
      <Link className={location.pathname=="/contact" ?"active f1":"link f1" } to={"/contact"}>
        Contact Page
      </Link>
    </nav>
  );
};
export default Navbar;
