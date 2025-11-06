import React from 'react';
import { useState } from 'react';

const App = () => {

  const [tittle,setTittle] = useState('');


const submitHandler=(e)=>{
  e.preventDefault()
console.log(`form submitted by ${tittle}`);
setTittle('');
}

  return (
    <>
      <div className="main">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
         <input type='text' placeholder='enter your name' value={tittle} onChange={(e)=>{
          setTittle(e.target.value)
         }}/>
         <button>submit</button>
        </form>
      </div>
    </>
  
  );
}

export default App;
