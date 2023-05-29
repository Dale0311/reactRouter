import { useState, useEffect } from 'react';
import fetchData from '../../hooks/fetchData';
import Card from './vansComponent/card';
// card maker


function VansList() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData(null, setData)
    }, [])

    // map over the data that just come
    const toRen = data.map(value=>{
        return <Card 
            key={value.id}
            id={value.id}
            image={value.imageUrl}
            name={value.name}
            price={value.price}
        />
    })
    return ( 
        <div className='my-8'>
            <h1 className='text-base md:text-2xl lg:text-3xl font-semibold'>Your Listed Vans:</h1>
            <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.length < 1 && <h1 className='text-3xl font-bold'>Loading....</h1>}
                {data && toRen}
            </div>
        </div>
    );
}
export default VansList;