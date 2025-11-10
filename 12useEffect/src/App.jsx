import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [num, setNum] = useState(0);
  const prevNumRef=useRef(num)
  console.log(prevNumRef.current)

  useEffect(() => {
   if(prevNumRef.current<num){
    console.log("num is increasing")
   }else{
    console.log("num is decreasing")
   }
     prevNumRef.current = num;
  },[num]);

  return (
    <>
    
    <div className="box">
     <h1>{num}</h1>
   </div>

    <div>
      <button onClick={()=>{
        setNum(num+1)
      }}>Click+1</button>
      <button onClick={()=>{
        setNum(num-1)
      }}>Click-1</button>
    </div>
    </>
   
  );
}

export default App;
