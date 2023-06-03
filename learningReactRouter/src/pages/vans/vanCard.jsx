import { Link } from "react-router-dom";
import bgColor from "../../utils/bgColor";
function toRender(props) {
    return ( 
        <div className="md:w-8/12 mx-auto bg-white shadow-md rounded-lg cursor-pointer">
            <Link to={props.id} state={{search : props.search, type: props.q}}>
                <img src={props.imageUrl} alt="" className="w-full rounded-t-md" />
                <div className="my-4 flex justify-betsween mx-2">
                    <h1 className="font-bold">{props.name}</h1>
                    <h1><span className="font-bold">${props.price}</span> / Day</h1>
                </div>
                <div className={`${bgColor(props.type)} py-2 px-4 mb-4 text-white rounded  text-center`}>
                    <h1>{props.type}</h1>
                </div>
            </Link>
        </div>
     );
}

export default toRender;