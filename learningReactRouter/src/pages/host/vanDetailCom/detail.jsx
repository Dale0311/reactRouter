import { useOutletContext } from "react-router-dom";
function detail() {
    const {van} = useOutletContext();
    return ( 
        <div className="space-y-6 py-4 text-sm md:text-base lg:text-lg">
            <h1><b>Name:</b> {van.name}</h1>
            <h1><b>Category:</b> {van.type}</h1>
            <h1><b>Description:</b> {van.description}</h1>
            <h1><b>Type:</b> Public</h1>
        </div>
     );
}

export default detail;