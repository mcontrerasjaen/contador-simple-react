import './SecondsCounter.css';
import { FaRegClock } from 'react-icons/fa';

const SecondsCounter = (props) => {
    
    const stringTime = props.seconds.toString().padStart(6, "0");

    return (
        <div className="counter-container">
            <div className="digit-box">
                <FaRegClock />
            </div>
                {stringTime.split("").map((digit, index) => (
                    <div key={index} className="digit-box">
                         {digit}
                    </div>
            ))}
        </div>
    );
};

export default SecondsCounter;
