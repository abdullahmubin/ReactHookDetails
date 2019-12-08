import React, { useState, useEffect } from 'react';

function MousePosition(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('logMousePosition');
        setX(e.clientX);
        setY(e.clientY);

    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        // NOTE: below code use to unmount

        return () => {
            console.log('component unmounting...');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default MousePosition;