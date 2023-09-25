import { useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

const AsynCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setTimeout(() => setCount((state) => state + 1), 1000);
    };
    const handleDecrease = () => {
        setTimeout(() => setCount((state) => state - 1), 1000);
    };
    return (
        <div className='card m-4 bg-blue-400'>
            Count: {count}
            <hr />
            <div className='flex flex-row justify-center space-x-2 py-4'>
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
