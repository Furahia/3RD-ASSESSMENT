import React, { useState } from 'react';
import './components/Style.css'
import Main from './components/Main.js'

// function App() {

//   let [total, setTotal] = useState(0);

//   function enterNumbers() {
//     let numbers = prompt("Enter numbers separated by a comma")
//     numbers.split(",").forEach(number => {
//       setTotal(prevState => prevState.total = prevState.total + Number(number));
//     })
//     console.log(total)
//   }
     
//   return (
//  <div className="App">
//     <button onClick={enterNumbers} > Enter numbers </button>

//     <h3>Total = {total}</h3>

//   </div>
// )
// };



function App() {
  return (
    <div><Main/></div>
  )
}

export default App