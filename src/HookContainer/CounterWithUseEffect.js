import React, { useState, useEffect } from 'react';

function CounterWithUseEffect () {
    const [Count, setCount] = useState(0);
    const [name, setName] = useState('');


    // NOTE: useEffect automatically call just like componentdidupdate. Get executed after every render. 
    // second parameter used to check the value has changed or not, then it auto executed.
    useEffect(() =>{
        console.log('use Effect');
        document.title = `You clicked ${Count} times`;
    },[Count]);
    return (<div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(Count + 1)}>Count {Count}</button>
    </div>)
}

export default CounterWithUseEffect;