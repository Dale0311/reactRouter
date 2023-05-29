import { NavLink } from "react-router-dom";
import logo from "../assets/img/logog1.png"
function NavBar() {
    return ( 
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-0 py-9">
            <div className="">
                <NavLink to="/">
                    <img src={logo} className="bg-white min-w-24" alt=""/>
                </NavLink>
            </div>
            <ul className="flex text-sm md:text-base space-x-2 md:space-x-4 mx-4">
                <li className="text-[#4D4D4D] font-semibold">
                    <NavLink to="/host">Host</NavLink> 
                </li>
                <li className="text-[#4D4D4D] font-semibold">
                    <NavLink to="/about">About</NavLink> 
                </li>
                <li className="text-[#4D4D4D] font-semibold">
                    <NavLink to="/vans">Vans</NavLink> 
                </li>
                <li className="text-[#4D4D4D] font-semibold">
                    <NavLink to="/admin">Admin</NavLink> 
                </li>
            </ul>
        </nav>
     );
}

export default NavBar;