import React, {useState} from 'react';

function CounterTwo(){
    const initialState = 0;
    const [ Count, setCount ] = useState(initialState);

    const increment = () =>{
        for (var i = 0; i < 5; i++){
            setCount(prevValue => prevValue + 1);
        }
    }

    return(
        <div>
            Count: { Count }
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
            <button onClick={() => setCount(Count - 1)}>Decrease</button>
            <button onClick={increment}>IncrementFive</button>
        </div>
    )
}

export default CounterTwo;