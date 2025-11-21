import React, { use, useEffect, useState } from 'react'

export default function Count() {
   let[count,setCount]  = useState(0);
//    const inc = () => {
//     setCount (count = count +1)
//    }
let [c,setCoun] = useState(0);
useEffect(()=>console.log("You clicked on button"));

 let [nam,setName] = useState("Divyanshu");
 const cng = () => {setName("Adarsh")};
   
  return (
    <div>
      <h1>you clicked {c} times</h1>
      <button onClick={()=> setCoun(c+1)}>Click me</button>
        <h1>This count is {count}</h1>
       
        <button onClick={()=>setCount(count++)}>Incremanet count</button>
        <button onClick={()=> setCount(count--)}>Decrement Count</button>
        <button onClick={()=>setCount(count =0)}>Reset</button>
        <br /><br />
         <h2>The Name is {nam}</h2>
        <button onClick={cng}>Name Changer</button>
        
        

    </div>
  )
}
