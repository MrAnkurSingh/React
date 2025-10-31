import React from 'react';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';

const App = () => {

const users=[
  {
    img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2574',
    color:'lightgreen',
    tag:'Satisfied'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1682437317248-b8b00e36bb94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=726',
    color:'lightblue',
    tag:'Underserved'
  },
   {
    img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
   color:'lightpink',
    tag:'Underbanked'
  },

]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  );
}

export default App;
