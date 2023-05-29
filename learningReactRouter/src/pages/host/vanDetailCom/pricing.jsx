import { useOutletContext } from "react-router-dom";
function pricing() {
    const {van} = useOutletContext(); 
    return ( 
        <div className="text-xl font-bold space-y-6 py-4">
            ${van.price} / Day
        </div>
     );
}

export default pricing;