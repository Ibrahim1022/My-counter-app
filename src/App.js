import React, { useState } from 'react';
import './counter.css';


function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>Counter</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={decreaseCount} style={{ fontSize: '24px', padding: '10px', marginRight: '10px' }}>-</button>
                <div style={{ fontSize: '24px', margin: '0 10px', width: '50px', textAlign: 'center' }}>{count}</div>
                <button onClick={increaseCount} style={{ fontSize: '24px', padding: '10px', marginLeft: '10px' }}>+</button>
            </div>
        </div>
    );
}

export default Counter;