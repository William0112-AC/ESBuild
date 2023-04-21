import React, { useCallback, useState } from 'react'; 6.9k (gzipped: 2.7k)

const App = (props: { message: string }) => {

return(

<h1>{props.message}</h1>
<h2>Count: {count}</h2>
<button>Increment</button>
</>
)
}