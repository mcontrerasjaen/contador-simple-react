import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isCountdown, setIsCountdown] = useState(false);
	const [active, setActive] = useState(true);


   useEffect(() => {
        let interval = null;

        if (active) {
            interval = setInterval(() => {
                setSeconds(prev => {
                    
                    if (prev === 50 && !isCountdown) {
                        const respuesta = window.confirm("¿Quieres empezar la cuenta regresiva?");
                        if (respuesta) {
                            setIsCountdown(true);
                            return prev - 1;
                        }
                    }
                    
                    if (isCountdown) {
                        return prev > 0 ? prev - 1 : 0;
                    }
                    return prev + 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [active, isCountdown]); 

    // FUNCIONES DE CONTROL
    const handleStop = () => setActive(false);
    const handleResume = () => setActive(true);
    const handleReset = () => {
    setSeconds(0);         
    setIsCountdown(false); 
    setActive(true);       
};

    return (
    <div className="main">
        <div className="content-container"> 
            <SecondsCounter seconds={seconds} />
            
            <div className="button-group">
                <button className="btn-control" onClick={handleStop}>Parar</button>
                <button className="btn-control" onClick={handleResume}>Resumir</button>
                <button className="btn-control btn-reset" onClick={handleReset}>Reiniciar</button>
            </div>
        </div>
    </div>
);
};

export default Home;