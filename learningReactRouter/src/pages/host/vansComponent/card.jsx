import { Link } from "react-router-dom";
function Card({ image, id, name, price }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link to={id}>
                <img className="w-full" src={image} alt={name} />
                <div className=" py-4 flex justify-between">
                    <div className="font-bold text-lg mb-2">{name}</div>
                    <p className="text-gray-700 text-base">${price} / Day</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;