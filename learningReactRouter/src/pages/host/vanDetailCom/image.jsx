import { useOutletContext } from "react-router-dom";
function image() {
    const {van}= useOutletContext();
    return ( 
        <div className="space-y-6 py-4 w-1/2 md:w-1/4">
            <img className="w-full md:w-9/12 xl:w-1/2" src={van.imageUrl} alt={van.name} />
        </div>
        );
}

export default image;