import { Outlet, NavLink } from "react-router-dom";
function HostNav() {
    return ( 
        <nav className="w-1/2 mx-auto">
            <ul className="flex flex-col md:flex-row md:space-x-4 text-sm md:text-lg font-semibold text-[#4D4D4D]">
                <li className="hover:text-black">
                    <NavLink to="" end>Dashboard</NavLink>
                </li>
                <li className="hover:text-black">
                    <NavLink to="income">Income</NavLink>
                </li>
                <li className="hover:text-black">
                    <NavLink to="vans">Vans</NavLink>
                </li>
                <li className="hover:text-black">
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
            <Outlet />
        </nav>
     );
}

export default HostNav;