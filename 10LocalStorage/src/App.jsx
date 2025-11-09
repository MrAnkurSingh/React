import React from 'react';

const App = () => {
//  const details={
//   Name:'ankur',
//   age:20,
//   add:'jaipur'
//  }

// localStorage.setItem('userinfo',JSON.stringify(details))

const raw=localStorage.getItem('userinfo')
const data=JSON.parse(raw)
console.log(data.Name)

  return (
   <div>
   App
   </div> 
   
  );
}

export default App;
