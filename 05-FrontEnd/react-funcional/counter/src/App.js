import React, { useState } from 'react';

const App = (props) => {
  const [count,setCount] = useState(0)

  // const suma = () => {
  //   setCount(count + 1)
  // }

  const resta = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
  <>
   <h1>haz clickeado: {count}</h1>
   <button onClick={()=> setCount(count + 1)}>Click para aumentar</button>
   <button onClick={resta}>Click para disminuir</button>
   <button onClick={reset}>Click para resetear</button>
  </>
 )
}

export default App
