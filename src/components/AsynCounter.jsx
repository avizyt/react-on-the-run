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
