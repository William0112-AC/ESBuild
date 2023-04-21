import React, { useCallback, useState } from 'react'; 6.9k (gzipped: 2.7k)

const App = (props: { message: string }) => {
    const App = (props: { message: string }) => { const [count, setCount] = useState(0);

        const increment = useCallback(() => { 
            setCount((count) count + 1); 
        }, [count]);

return(

<h1>{props.message}</h1>
<h2>Count: {count}</h2>
<button>Increment</button>
<button onClick={increment</button>
</>

);
};

