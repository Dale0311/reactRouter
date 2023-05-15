import {Link} from 'react-router-dom';
import heroImg from "../assets/img/aboutPicc.png"
function About({name}) {
    return ( 
        <div className="container mx-auto my-4">
            {/* Hero Section */}
            <div className="flex px-4 flex-col lg:flex-row items-center">
                <img src={heroImg} alt=""/>
                <div className="w-full md:w-auto text-center md:text-left text-xl md:text-2xl xl:text-4xl px-4 xl:px-16 py-4 font-bold leading-normal">
                    Instead of trying to fit uncomfortably into a sedan, it might be more enjoyable and practical to opt for a spacious van. 
                </div>
            </div>

            {/* Mission Card */}
            <div className="mt-8 space-y-4">
                <h1 className="font-black text-2xl px-4 md:px-0">Mission: </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
                    <div className="rounded font-semibold py-2 text-lg px-4 leading-normal bg-[#edd8c1]">
                        Our mission is to provide reliable and affordable rental vans to individuals and businesses, enabling them to fulfill their transportation needs efficiently and effectively.
                    </div>
                    <div className="rounded font-semibold py-2 text-lg px-4 leading-normal bg-[#edd8c1]">
                        We strive to create a seamless rental experience for our clients by prioritizing excellent customer service, safety, and convenience.
                    </div>
                    <div className="rounded font-semibold py-2 text-lg px-4 leading-normal bg-[#edd8c1]">
                        We aim to build long-term relationships with our clients by establishing trust and providing exceptional rental van solutions that meet their unique requirements.
                    </div>
                </div>
            </div>

            {/* Section */}
            <div className="mt-4 bg-[#FFCC8D] p-8 space-y-8">
                <h1 className="text-2xl font-bold">Your destination is waiting. <br /> Your Van is ready.</h1>
                <div>
                    <Link to="/vans">
                        <button className="font-bold text-white text-lg bg-black py-4 px-8 rounded">
                        Explore our vans
                        </button>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default About;