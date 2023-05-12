import {Link} from "react-router-dom"
function Home({name}) {
    return ( 
        <div className="min-h-[85vh] md:min-h-0 py-0 md:py-[178.6px] bg-cover bg-center bg-[url('./img/homeCP.png')] text-white flex items-center justify-center">
            <div className="flex flex-col space-y-12 justify-center items-center py-16 px-4 text-center md:px-0">
                <div className="font-extrabold text-2xl  md:text-3xl lg:text-5xl md:leading-normal">You got the travel plans, <br /> &nbsp; we got the travel vans.</div>
                <p className="text-sm md:text-lg text-center">Add adventure to your life by joining the #vanlife movement. <br/>Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans">
                    <button className="bg-[#FF8C38] py-2 px-8 rounded font-bold">Find your van</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;