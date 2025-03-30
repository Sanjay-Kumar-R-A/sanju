import React from "react";
import backgroundImage from "../assets/1.jpeg"; // Manually import the image

const HeroSection = () => {
    return (
        <section 
            className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use imported image
        >
            <h1 className="text-5xl md:text-7xl text-white hero-text">HAPPY BIRTHDAY Sanjana 🎉</h1>
            <p className="text-xl md:text-2xl text-white mt-4">Celebrating a special day with love and joy!</p>
        </section>
    );
};

export default HeroSection;
