import { Link } from "react-router-dom";
import logo from "../../assets/img/logog1.png"
function NavBar() {
    return ( 
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0 py-9">
            <div className="">
                <Link to="/">
                    <img src={logo} className="bg-white w-24 md:w-auto" alt=""/>
                </Link>
            </div>
            <ul className="flex space-x-4 ">
                <li className="text-[#4D4D4D] font-semibold">
                    <Link to="/about">About</Link> 
                </li>
                <li className="text-[#4D4D4D] font-semibold">
                    <Link to="/vans">Vans</Link> 
                </li>
                <li className="text-[#4D4D4D] font-semibold">
                    <Link to="/admin">Admin</Link> 
                </li>
            </ul>
        </div>
     );
}

export default NavBar;