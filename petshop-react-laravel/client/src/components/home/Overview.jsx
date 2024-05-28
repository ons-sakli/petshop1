import React from "react";
import { Link } from "react-router-dom";


const Overview = () => {
    return (
        <div className="w-full bg-[#EFC3CA] py-32 text-center">
            <div className="px-3 lg:px-0 lg:w-[55%] mx-auto">
                <h2 className="font-extrabold text-5xl text-[#242833] capitalize mb-10 tracking-widest leading-10">Company goals</h2>
                <p className="text-lg text-[#555] tracking-widest font-normal mb-5 leading-7">our responsibility to safepet in this world , to offre and helpmany produts to your pet  .</p>
                <p className="text-lg text-[#555] tracking-widest font-normal mb-5 leading-7">petshop is the best .</p>
                <Link className="inline-block px-6 py-3 font-semibold tracking-wider text-white bg-primary uppercase mt-8 text-lg hover:bg-secondary-200 transition-all duration-300" to='/about'>
                    View More
                </Link>
            </div>
        </div>
    );
};


export default Overview;