import React from 'react';
import { useState } from 'react';

const App = () => {
const [state, setstate] = useState([]);
  
const getData= async ()=>{
const response= await fetch('https://picsum.photos/200/300')
 const data = await response

 
 setstate(data.url)

}

  return (

    <div className='flex gap-5 flex-col m-10'>

      <div>
<button className='mt-10 ml-2 bg-amber-950 rounded-2xl w-20 active:scale-95' onClick={getData}> click </button>
      </div>

       <div  className='mt-10'>

        <img src={state} alt="" />
      </div>

     
    </div>
  );
}

export default App;
