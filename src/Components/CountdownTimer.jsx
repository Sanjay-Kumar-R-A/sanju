import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const CountdownTimer = () => {
    const getTimeLeft = () => {
        const targetDate = new Date("2025-03-31T00:00:00");
        const now = new Date();
        const difference = targetDate - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const [message, setMessage] = useState("Counting Down...");
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const newTime = getTimeLeft();
            setTimeLeft(newTime);

            // 🎊 Fun Messages Based on Time Left
            if (newTime.days === 0 && newTime.hours < 12) {
                setMessage("Almost Time! 🎂");
            }
            if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes < 30) {
                setMessage("Get Ready! 🎈");
            }
            if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
                setMessage("HAPPY BIRTHDAY! 🎉 ENJOY YOUR 14th YEAR BIRTHDAY");
                clearInterval(timer);
                setShowConfetti(true);
                launchConfetti();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 🎉 Confetti Blast when Timer Ends
    const launchConfetti = () => {
        let count = 0;
        const interval = setInterval(() => {
            confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.6 },
            });
            count++;
            if (count > 5) clearInterval(interval);
        }, 500);
    };

    return (
        <section className="flex flex-col items-center bg-black bg-opacity-80 backdrop-blur-lg border border-gray-700 text-white py-10 rounded-xl shadow-lg">
            <h2 className="text-5xl md:text-6xl font-bold hero-text text-neon-blue">{message}</h2>

            <div className="flex gap-6 mt-6 text-3xl md:text-4xl font-bold">
                <div className="text-neon-cyan">{timeLeft.days} <span className="text-gray-300">DAYS</span></div>
                <div className="text-neon-blue">{timeLeft.hours} <span className="text-gray-300">HOURS</span></div>
                <div className="text-neon-purple">{timeLeft.minutes} <span className="text-gray-300">MINUTES</span></div>
                <div className="text-neon-pink">{timeLeft.seconds} <span className="text-gray-300">SECONDS</span></div>
            </div>

            {/* 🎊 Confetti Effect */}
            {showConfetti && <div className="hidden"></div>}
        </section>
    );
};

export default CountdownTimer;
