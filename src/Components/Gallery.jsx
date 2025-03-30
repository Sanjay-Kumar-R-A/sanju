import React from "react";

import memory1 from "../assets/1.jpeg";
import memory2 from "../assets/2.jpeg";
import memory3 from "../assets/3.jpeg";
import memory4 from "../assets/4.jpeg";
import memory5 from "../assets/5.jpeg";
import memory6 from "../assets/6.jpeg";
import memory7 from "../assets/7.jpeg";
import memory8 from "../assets/8.jpeg";
import memory9 from "../assets/9.jpeg";
import memory10 from "../assets/10.jpeg";
import memory11 from "../assets/11.jpeg";
import memory12 from "../assets/12.jpeg";
import memory13 from "../assets/13.jpeg";
import memory14 from "../assets/14.jpeg";
import memory15 from "../assets/15.jpeg";
import memory16 from "../assets/16.jpeg";
import memory17 from "../assets/17.jpeg";
import memory18 from "../assets/18.jpeg";
import memory19 from "../assets/19.jpeg";
import memory20 from "../assets/20.jpeg";
import memory21 from "../assets/21.jpeg";
import memory22 from "../assets/22.jpeg";
import memory23 from "../assets/23.jpeg";
import memory24 from "../assets/24.jpeg";
import memory25 from "../assets/25.jpeg";
import memory26 from "../assets/26.jpeg";
import memory27 from "../assets/27.jpeg";
import memory28 from "../assets/28.jpeg";
import memory29 from "../assets/29.jpeg";
import memory30 from "../assets/30.jpeg";
import memory31 from "../assets/31.jpeg";
import memory32 from "../assets/32.jpeg";
import memory33 from "../assets/33.jpeg";
import memory34 from "../assets/34.jpeg";
import memory35 from "../assets/35.jpeg";




const images = [
    memory1, memory2, memory3, memory4, memory5, memory6, memory7, memory8, memory9, memory10,
    memory11, memory12, memory13, memory14, memory15, memory16, memory17, memory18, memory19,memory20,
    memory21,memory22,memory23,memory24,memory25,memory26,memory27,memory28,memory29,memory30,memory31,
    memory32,memory33,memory34,memory35
];

const Gallery = () => {
    return (
        <section className="py-10 bg-gray-800">
            <h2 className="text-4xl text-center text-white hero-text">Memory Gallery 📸</h2>
            <h2 className="text-4xl text-center text-white hero-text">LETS SEE HOW YOU GROWN </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Memory ${index + 1}`} className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform" />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
