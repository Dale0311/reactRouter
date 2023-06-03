import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

// helper function
import fetchData from "../../hooks/fetchData";

// components
import ToRender from "./vanCard";
function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setvans] = useState([]);
    const q = searchParams.get("type");
    
    // fetching the data
    useEffect(() => 
        {
            fetchData(null,setvans)
        }, []);
    

    // searchParams
    const Display = q? vans.filter(van=>van.type===q) : vans

    // onclick handle - option #3 using setter param
    function handleClick(key, value){
        setSearchParams(oldVal=>{
            // this code works fine when dealing with multiple url param
            if(value===null){
                oldVal.delete(key)
            }
            else{
                oldVal.set(key,value)
            }
            return oldVal
        })
    }
    
    // okay for some reason this code right here doesn't work in multiple url param
    // return oldVal = value? oldVal.set(key,value) : oldVal.delete(key);

    const toRender = Display.map(element => {
        return <ToRender 
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            description={element.description}
            imageUrl={element.imageUrl}
            type={element.type}
            search={searchParams.toString()}
            q={q}
        />
    })

    return ( 
        <div className="container mx-auto my-4 space-y-4 flex flex-col items-center">
            <h1 className="font-bold text-xl text-center md:text-left md:text-3xl">
                Explore our van options         
            </h1>
            <div className="space-x-4 px-4">
                <button onClick={()=>handleClick("type", "simple")} className={`${q=="simple" && "bg-[#EDD8C1]"} rounded py-2 px-2 md:px-6 text-xs md:text-base`} value="simple">Simple</button>
                <button onClick={()=>handleClick("type", "luxury")} className={`${q=="luxury" && "bg-[#EDD8C1]"} rounded py-2 px-2 md:px-6 text-xs md:text-base`} value="luxury">Luxury</button>
                <button onClick={()=>handleClick("type", "rugged")} className={`${q=="rugged" && "bg-[#EDD8C1]"} rounded py-2 px-2 md:px-6 text-xs md:text-base`} value="rugged">Rugged</button>
            </div>
            {q && <button onClick={()=>handleClick("type", null)} className="text-left">Clear filter</button>}
            {Display.length>0? 
            <div className='flex justify-center items-center px-4 md:px-0'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                    {toRender}
                </div>
            </div> : 
            <div>
                <h1 className='text-3xl font-bold text-center py-4'>Loading...</h1>
            </div>}
        </div>
    )}
export default Vans;