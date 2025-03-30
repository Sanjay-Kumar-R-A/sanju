import React from "react";
import HeroSection from "./Components/HeroSection";
import Wishes from "./Components/Wishes";
import CountdownTimer from "./Components/CountdownTimer";
import Gallery from "./Components/Gallery";


const App = () => {
    return (
        <div>
            <CountdownTimer />
            <HeroSection />
            <Wishes />
            <Gallery />
         
        </div>
    );
};

export default App;
