import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
};

export default Counter;
