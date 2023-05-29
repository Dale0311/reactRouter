import VansList from "./vansList"
function Vans() {
    return ( 
        <div className="container mx-auto my-4 space-y-4 flex flex-col items-center">
            <h1 className="font-bold text-xl text-center md:text-left md:text-3xl">
                Explore our van options         
            </h1>
            <div className="space-x-4 px-4">
                <button className="bg-[#EDD8C1] rounded py-2 px-2 md:px-6 text-xs md:text-base">Simple</button>
                <button className="bg-[#EDD8C1] rounded py-2 px-2 md:px-6 text-xs md:text-base">Luxury</button>
                <button className="bg-[#EDD8C1] rounded py-2 px-2 md:px-6 text-xs md:text-base">Rugged</button>
            </div>
            <button className="text-left">Clear filter</button>
            <VansList />
        </div>
     );
}

export default Vans;