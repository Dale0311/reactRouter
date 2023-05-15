function toRender(props) {
    
    // fn that decides the color
    const bgColor = () =>{
        let bg;
        if(props.type == "simple"){
            bg = "bg-[#E17653]"
        }
        else if(props.type == "rugged"){
            bg = "bg-[#115E59]"
        }
        else if(props.type == "luxury"){
            bg = "bg-[#161616]"
        }
        else{
            bg = "bg-red-500";
        }
        return bg;
    }
    return ( 
        <div className="w-auto md:w-8/12 mx-auto bg-white shadow-md rounded-lg cursor-pointer">
            <img src={props.imageUrl} alt="" className="w-full rounded-t-md" />
            <div className="my-4 flex justify-between mx-2">
                <h1 className="font-bold">{props.name}</h1>
                <h1><span className="font-bold">${props.price}</span> / Day</h1>
            </div>
            <div className={`${bgColor()} py-2 px-4 mb-4 text-white rounded  text-center`}>
                <h1>{props.type}</h1>
            </div>
        </div>
     );
}

export default toRender;