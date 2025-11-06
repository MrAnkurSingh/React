import React, { useState } from 'react';

const App = () => {

// const [state, setstate] = useState([55,56,57]);
  // const upt=()=>{
  //   const newState=[...state]
  //   newState[0]=50
  //   setstate(newState)
  // }


//  const [state, setstate] = useState({username:'Ankur',age:20});

// const upd=()=>{
// setstate(prev=>({...prev,age:30}))

 const [state, setstate] = useState(0);
 const upd=()=>{
  setstate(prev=>(prev+1))
  setstate(prev=>(prev+1))
  setstate(prev=>(prev+1))


}



   return (
    <div>
      <h1>{state}</h1>
      <button onClick={upd}>click</button>
    </div>
  );

 } 


export default App;
