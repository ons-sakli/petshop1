import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

const TheServices = () => {
    return (
        <div className="bg-secondary-200 px-4 md:px-8 py-12 md:py-24">
            <div className="container mx-auto">
                <h3 className="text-3xl md:text-4xl text-center font-semibold text-[#453227] mb-8 md:mb-12">Explore Our Top Products and Find Something New</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <ServiceItem icon={<GiCompass />} title="Mission" description="Offer the best quality of products to SafePet" />
                    <ServiceItem icon={<GiDiamondHard />} title="Vision" description="Help clients and offer the best quality" />
                    <ServiceItem icon={<GiStabbedNote />} title="History" description="PetShop is a company to offer pet products to your pets" />
                </div>
            </div>
        </div>
    );
};

const ServiceItem = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center bg-[#EFC3CA] py-8 md:py-12 px-4 md:px-8 rounded">
            <span className="flex justify-center items-center w-16 h-16 mb-4 md:mb-6 rounded-full text-3xl bg-[#b7b]">{icon}</span>
            <h4 className="text-2xl md:text-3xl mb-3 font-bold">{title}</h4>
            <p className="leading-relaxed text-[#5f4435]">{description}</p>
        </div>
    );
};

export default TheServices;
