import { Link } from "react-router-dom";
function NavBar() {
    return ( 
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0 py-9">
            <div className="">
                <Link to="/">
                    <img src="./img/logog1.png" className="bg-white w-24 md:w-auto" alt=""/>
                </Link>
            </div>
            <ul className="flex space-x-4 ">
                <li className="text-[#4D4D4D] font-semibold">
                    <Link to="/about">About</Link> 
                </li>
                <li className="text-[#4D4D4D] font-semibold">
                    <Link to="/vans">Vans</Link> 
                </li>
            </ul>
        </div>
     );
}

export default NavBar;