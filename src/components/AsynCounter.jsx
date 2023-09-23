import { useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

const AsynCounter = () => {
    const [count, setCount] = useState(0);

    const buttonStyle = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-indigo-600 to-pink-500
    text-gray-100 rounded-sm ring-2 ring-purple-400 px-6 py-2 
    hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 shadow-lg shadow-indigo-300/50`;

    const handleIncrease = () => {
        setTimeout(() => setCount(count + 1), 1000);
    };
    const handleDecrease = () => {
        setTimeout(() => setCount(count - 1), 1000);
    };
    return (
        <div className='card m-4'>
            Count: {count}
            <hr />
            <div className='grid grid-flow-row'>
                <BsFillArrowLeftCircleFill
                    size='2rem'
                    className='text-slate-800'
                    onClick={handleDecrease}
                />

                <BsFillArrowRightCircleFill
                    size='2rem'
                    className='text-slate-800'
                    onClick={handleIncrease}
                />
            </div>
        </div>
    );
};

export default AsynCounter;
