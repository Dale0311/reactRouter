const bgColor = (type) =>{
    let bg;
    if(type == "simple"){
        bg = "bg-[#E17653]"
    }
    else if(type == "rugged"){
        bg = "bg-[#115E59]"
    }
    else if(type == "luxury"){
        bg = "bg-[#161616]"
    }
    else{
        bg = "bg-red-500";
    }
    return bg;
}
export default bgColor;