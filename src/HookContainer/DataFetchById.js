import React, { useState, useEffect} from 'react';
import Axios from 'axios';

function DataFetchById(){
    const [post, setPost]  = useState({})
    const [id, setId] = useState(0);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {
            console.dir(res.data);
            setPost(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, [id])

    return(
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <ul>
                <li>{post.title}</li>
            </ul>
        </div>
    )
}

export default DataFetchById;