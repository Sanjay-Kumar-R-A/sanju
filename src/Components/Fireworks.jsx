import React, { useEffect, useState } from "react";
import { Fireworks } from "fireworks-js";
import cakeImage from "../assets/cake.gif"; // Your cake animation image

const FireworksComponent = () => {
    const [candleLit, setCandleLit] = useState(false);
    const [showFireworks, setShowFireworks] = useState(false);
    
    useEffect(() => {
        // Step 1: Wait 3 seconds before lighting the candle
        const candleTimer = setTimeout(() => {
            setCandleLit(true);

            // Step 2: After 2 more seconds, trigger the fireworks
            setTimeout(() => {
                setShowFireworks(true);
                startFireworks();
            }, 2000);
        }, 3000);

        return () => clearTimeout(candleTimer);
    }, []);

    // Function to start real fireworks animation
    const startFireworks = () => {
        const container = document.getElementById("fireworks-container");
        if (container) {
            const fireworks = new Fireworks(container, {
                speed: 3,
                acceleration: 1.05,
                friction: 0.97,
                gravity: 1.5,
                particles: 100,
                explosion: 5,
                trace: 3,
                opacity: 0.8,
            });
            fireworks.start();

            // Stop fireworks after 5 seconds
            setTimeout(() => {
                fireworks.stop();
            }, 5000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center relative">
            {/* Step 1: Show Cake with Candle */}
            <div className="relative">
                <img src={cakeImage} alt="Birthday Cake" className="w-64 h-auto" />
                
                {/* Step 2: Candle Flame Animation */}
                <div className={`absolute top-3 left-1/2 transform -translate-x-1/2 ${candleLit ? "opacity-100 animate-flicker" : "opacity-0"}`}>
                    🔥 {/* Replace with flame image if needed */}
                </div>
            </div>

            {/* Step 3: Fireworks Animation */}
            {showFireworks && <div id="fireworks-container" className="absolute top-0 left-0 w-full h-full"></div>}
        </div>
    );
};

export default FireworksComponent;
