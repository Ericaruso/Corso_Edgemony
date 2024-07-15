import React, { useState } from 'react';
import Post from './Post';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(1);

    return (
        <div className="counter">
            <button onClick={() => setCount(count - 1)} disabled={count <= 1}>
                Previous
            </button>
            <span>Post ID: {count}</span>
            <button onClick={() => setCount(count + 1)}>
                Next
            </button>
            <Post postId={count} />
        </div>
    );
};

export default Counter;
