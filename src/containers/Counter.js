import React from 'react';
import { useCount } from '../store/Count';

const Counter = () => {
  const [count, { increment, decrement }] = useCount();
  
  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;