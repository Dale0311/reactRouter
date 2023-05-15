function toRender(props) {
    return ( 
        <div className="w-8/12 mx-auto bg-white shadow-xl rounded-lg cursor-pointer">
            <img src={props.imageUrl} alt="" className="w-full rounded-t-md" />
            <div className="my-4 flex justify-between mx-2">
                <h1>{props.name}</h1>
                <h1>${props.price}</h1>
            </div>
        </div>
     );
}

export default toRender;