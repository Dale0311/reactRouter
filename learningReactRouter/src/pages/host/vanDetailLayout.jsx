import { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink, Link } from 'react-router-dom';
import fetchData from '../../hooks/fetchData';
import bgColor from '../../utils/bgColor';
function vanDetail() {
    const params = useParams();
    const [van, setVan] = useState("");
    useEffect(()=>{
        fetchData(params.id, setVan);
    }, [])
    
    return ( 
        <div className='max-w-full my-4 space-y-4'>
            <Link to=".." relative='path' className='hover:border-b-2 border-[#4D4D4D]'><i className="fa-solid fa-arrow-left-long"></i> Go back to all the vans</Link>
            <div className="rounded shadow-lg flex flex-col md:flex-row space-x-4">
                <div className='w-full lg:w-1/4'>
                    <img src={van.imageUrl} alt={van.name} />
                </div>
                <div className="py-4 flex flex-col space-y-4">
                    <p className={`py-2 px-6 ${bgColor(van.type)} rounded text-white self-start text-sm`}>{van.type}</p>
                    <h1 className="font-bold text-sm md:text-3xl mb-2 ">{van.name}</h1>
                    <p className="text-gray-700 text-sm md:text-xl font-bold">${van.price} <span className="font-medium sm:text-xs md:text-base">/ Day</span></p>
                </div>
            </div>
            <ul className='flex space-x-6'>
                <li>
                    <NavLink to="." end>Details</NavLink>
                </li>
                <li>
                    <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="image">Image</NavLink>
                </li>
            </ul>
            <Outlet context={{van}}/>
        </div>
     );
}

export default vanDetail;