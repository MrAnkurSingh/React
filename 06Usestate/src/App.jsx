import React, { useState } from 'react';

const App = () => {

  const [state, setstate] = useState(0);

        function Increase(){
          setstate(state+1)
        }

  return (

    <div className="Main">
      <div>
      <div className="box"><h1>{state} </h1></div>

      <div className="btns">

              <button onClick={()=>{
                setstate(state-1)
              }}>Decrease</button>

              <button onClick={Increase}
              >Increase</button>

              <button onClick={()=>{
                setstate(state+5)
              }} >click to +5</button>

      </div>
    </div>
    </div>
     
  
  );
}

export default App;
