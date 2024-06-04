'use client';
import React from 'react';

import Spinner from '../Spinner'

function Counter() {
  const [count, setCount] = React.useState(() => { 
    if (typeof window == 'undefined') { 
      return 0
    }
    return Number(window.localStorage.getItem('saved-count') || 0)
  });
  // const [count, setCount] = React.useState(null);

  React.useEffect(() => { 
    const savedValue = Number(window.localStorage.getItem('saved-count') || 0)
    setCount(savedValue)
  }, [])

  React.useEffect(() => {
    if (typeof count == 'number')  { 
      window.localStorage.setItem('saved-count', count);
    }
  }, [count]);

  return (
    <button
      suppressHydrationWarning
      className="count-btn"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
      {/* Count: {typeof count == 'number' ? count : <Spinner/>} */}
    </button>
  );
}

export default Counter;
