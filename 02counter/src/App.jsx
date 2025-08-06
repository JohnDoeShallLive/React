import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   let [count, setCount] = useState(5)
//   const addvalue = () => {
//     setCount(count = count + 1)
//     console.log( `count is ,${count}`)
//   }
//   const removeValue = () => {
//     setCount(count = count - 1)
//     console.log( `count is ,${count}`)
//   }
//   return (
//     <>
//       <h1>I am Shreyash</h1>
//       <h2>{count}</h2>

//       <button onClick={addvalue}>
//           Add Value
//         </button>
// <br />
// <br />

//         <button onClick={removeValue}>
//           Remove Value
//         </button>
        
//     </>
//   )
// }


//Assignment
function App() {
  let [count, setCount] = useState(5)
  const addvalue = () => {
    console.log(`Button Clicked`);
    if(count<20){
    setCount(count = count + 1)
    console.log( `count is ,${count}`)
  }
}
  const removeValue = () => {
    console.log(`Button Clicked`);
    if(count>0){
    setCount(count = count - 1)
    console.log( `count is ,${count}`)
  }
}
  return (
    <>
      <h1>I am Shreyash</h1>
      <h2>{count}</h2>

      <button onClick={addvalue}>
          Add Value
        </button>
<br />
<br />

        <button onClick={removeValue}>
          Remove Value
        </button>
        
    </>
  )
}


export default App
