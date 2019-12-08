import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DataFetching () {
    const [ postList, setPost ] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.dir(res.data);
            setPost(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, [])
    return(
        <div>
            <h2>Data fetching...</h2>
            <ul>
                {
                    postList.map( key =>
                        <li key={key.id}>{key.title}</li>
                        
                    )
                }
            </ul>
            
        </div>
    )
}

export default DataFetching;
