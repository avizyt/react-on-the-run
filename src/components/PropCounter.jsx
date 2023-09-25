import { useState } from "react";

import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

const PropCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = (event, delta) => {
        setCount(count + delta);
    };

    const handleDecrease = (event, delta) => {
        setCount(count - delta);
    };

    return (
        <div className='card bg-purple-400'>
            Count: {count}
            <div className='flex flex-row justify-center space-x-2 py-4'>
                <BsFillArrowLeftCircleFill
                    size='2rem'
                    className='text-slate-800'
                    onClick={(event) => handleDecrease(event, 1)}
                />
                <BsFillArrowRightCircleFill
                    size='2rem'
                    className='text-slate-800'
                    onClick={(event) => handleIncrease(event, 1)}
                />
            </div>
        </div>
    );
};

export default PropCounter;
