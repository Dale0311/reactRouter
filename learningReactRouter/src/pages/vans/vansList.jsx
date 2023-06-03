// pseudo code to fetch the data n display
// import useState, useEffect
import { useState, useEffect } from 'react';
// import render component
import ToRender from './vanCard';
import fetchData from '../../hooks/fetchData';
import fetchData2 from '../../hooks/asyncFetch';
function Vans() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => 
        {
            async () =>{
                setLoading(true)
                setData(fetchData2())
                setLoading(false)
            }
        }, []);
    
    // create a variable call toRender
    //toRender = *map over data
    const toRender = data.map(element => {
        return <ToRender 
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            description={element.description}
            imageUrl={element.imageUrl}
            type={element.type}
        />
    })
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className='flex justify-center items-center px-4 md:px-0'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                {toRender}
            </div>
        </div> 
     )

}


// : 
//         <div>
//             <h1 className='text-3xl font-bold text-center py-4'>Loading...</h1>
//         </div>

export default Vans;