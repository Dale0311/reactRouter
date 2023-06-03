import { Link } from "react-router-dom";
function notFound() {
    return ( 
        <div className="text-3xl font-bold flex flex-col items-center space-y-4 my-40">
            <div>Sorry, The page not found</div>
            <Link to="/" className="bg-black py-2 px-8 text-white rounded">Return to Home</Link>
        </div>
     );
}

export default notFound;