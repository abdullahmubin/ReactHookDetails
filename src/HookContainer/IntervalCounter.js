import React, { useState, useEffect } from 'react';

function IntervalCounter() {
    const [Count, setCount] = useState(0);

    const Interval = () => {
        setCount(preCount => preCount + 1);
    }

    useEffect(()=>{
        const counter = setInterval(Interval, 1000);

        return() => {
            clearInterval(counter)
        }
    }, [])
    return(
        <div>
            {Count}
        </div>
    )
}
export default IntervalCounter;