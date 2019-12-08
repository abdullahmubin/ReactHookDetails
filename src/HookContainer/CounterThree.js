import React, {useState} from 'react';

function CounterThree(){

    const [name, setName] = useState({firstName: '', lastName : ''});

    return(
        <div>
            <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName : e.target.value})} />
            <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />

            <h2>firstName: {name.firstName} </h2>
            <h2>lastName: {name.lastName} </h2>
        </div>
    )

}

export default CounterThree;