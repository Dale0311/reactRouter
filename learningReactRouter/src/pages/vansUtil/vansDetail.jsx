import { useParams } from "react-router-dom";
import fetchData from "../../hooks/fetchData"
import { useState, useEffect } from 'react';
import bgColor from "../../utils/bgColor";
function vansDetail() {
    
    const params = useParams();
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetchData(params.id, setData)    
    }, []);

    return ( 
        data? 
        <div className="my-4 px-8 md:px-0 md:w-1/2 xl:w-1/4 mx-auto space-y-4">
            <img src={data.imageUrl} alt="picture" className="rounded-t-md" />
            <div className="flex items-start">
                <div className={`${bgColor(data.type)} py-2 px-4 mb-4 text-white rounded`}>
                    <h1>{data.type}</h1>
                </div>
            </div>
            <div className="my-4 flex justify-between mx-2 items-center">
                <h1 className="font-bold text-3xl">{data.name}</h1>
                <h1><span className="font-bold">${data.price}</span> / Day</h1>
            </div>
            <div className="text-xl py-4">
                {data.description}
            </div>
            <button className={`bg-[#FF8C38] text-white py-2 px-4 w-full rounded text-xl font-bold`}>
                <h1>Rent This van</h1>
            </button>
            
        </div>
        :
        <h1 className="text-3xl font-bold text-center py-4">Loading...</h1>
     );
}

export default vansDetail;