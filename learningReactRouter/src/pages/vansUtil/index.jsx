// pseudo code to fetch the data n display
// import useState, useEffect
import { useState, useEffect } from 'react';
// import axios
import axios from "axios"
// import render component
import ToRender from './render';

function Vans() {
    // create a empty useState called [data, setData]
    const [data, setData] = useState([]);
    // create a useEffect that only runs 1 time, dependencies array is empty array []
    useEffect(() => 
        // anonymous fn
        {
            // calls fetchData
            fetchData()
        }, []);
    
    // create fetchData fn
    const fetchData = () => {
        axios
            // axios.get
            .get("https://645c8a84250a246ae30744d5.mockapi.io/vans")
            // then res=> setData(res.data)
            .then(res => setData(res.data)) // note: i can still manage error handling but im tamad
    }
    
    // create a variable call toRender
    //toRender = *map over data
    const toRender = data.map(element => {
        return <ToRender 
            key={element.id}
            name={element.name}
            price={element.price}
            description={element.description}
            imageUrl={element.imageUrl}
            type={element.type}
        />
    })

    return ( 
        <div className='flex justify-center items-center'>
            <div className="grid grid-cols-3 gap-8 py-4 ">
                {toRender}
            </div>
        </div>
     );

}

export default Vans;