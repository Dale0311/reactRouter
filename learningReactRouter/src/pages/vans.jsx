import VansData from "./vansUtil/index"
function Vans() {
    return ( 
        <div className="container mx-auto my-4 space-y-4 flex flex-col items-center">
            <h1 className="font-bold text-3xl">
                Explore our van options         
            </h1>
            <div className="space-x-4">
                <button className="bg-[#EDD8C1] rounded py-2 px-6">Simple</button>
                <button className="bg-[#EDD8C1] rounded py-2 px-6">Luxury</button>
                <button className="bg-[#EDD8C1] rounded py-2 px-6">Rugged</button>
                <button className="">Clear filter</button>
            </div>
            <VansData />
        </div>
     );
}

export default Vans;