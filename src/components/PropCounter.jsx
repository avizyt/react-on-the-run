import { useState } from "react";

import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

const PropCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (event, delta) => {
        setCount(count + delta);
    };

    return (
        <div className='card'>
            Count: {count}
            <BsFillArrowLeftCircleFill
                size='2rem'
                className='text-slate-800'
                onClick={(event) => handleClick(event, 1)}
            />
            <BsFillArrowRightCircleFill
                size='2rem'
                className='text-slate-800'
                onClick={(event) => handleClick(event, 1)}
            />
        </div>
    );
};

export default PropCounter;
