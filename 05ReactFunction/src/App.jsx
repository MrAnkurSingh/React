import React from 'react';

const App = () => {


const scroll=(elem)=>{
console.log(`speed of scrolling`,elem)
}
  return (
<div onWheel={(elem)=>{
scroll(elem.deltaY)
}}>
      <div className='black'></div>
      <div className='white'></div>
</div>
  );

  
// const alt=()=>{
//  alert('button clicked')
// }
// return(
// <div>

//   <button onClick={alt}>
//     click
//   </button>
// </div>
// )

}

export default App;
