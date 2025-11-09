import React from 'react';
import { useState } from 'react';

const App = () => {

const [tittle,setTittle] = useState('');
const [details, setDetails] = useState('');
const [task, setTask] = useState([]);

 const submitHandler=(e)=>{
   e.preventDefault()
   
const copyTask=[...task]
copyTask.push({tittle,details})
setTask(copyTask)

console.log(copyTask)
   setTittle('')
   setDetails('')
 }
 
 const deleteNotes=(idx)=>{
   const copyTask=[...task]
   copyTask.splice(idx,1)
   setTask(copyTask)
 }

  return (
    <div className='h-full bg-black text-white lg:flex'>

      <form  className='flex gap-4 flex-col p-5 lg:w-1/2 items-start' 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      >
        <h1 className='font-bold text-3xl'>Add Notes</h1>

        <input
        type='text'
        placeholder='Enter Notes handing'
        className='border-2 h-10 w-full px-2 rounded'
        value={tittle}
        onChange={(e)=>{
        setTittle(e.target.value)
        }}
        />
        <textarea
        type='text'
        placeholder='write Details'
        className='border-2 h-40 w-full px-2 resize-none flex flex-row items-start outline-none rounded '
        value={details}
        onChange={(e)=>{
         setDetails(e.target.value)
        }}
        />
        <button
        className='bg-white  text-black font-bold rounded h-10 w-full px-2 active:scale-90'
        >
          Add Notes
        </button>
      </form>
<div className='lg:w-1/2 border-l-2 p-8'>

<h1 className='text-4xl font-bold'>Recent Notes</h1>

<div className='flex flex-wrap gap-5 mt-5 h-135 overflow-auto'>
  
{task.map((elem,idx)=>{
  return<div key={idx} className='h-70 w-67 bg-amber-50 rounded-2xl text-black bg-cover bg-[url("https://wallpapers.com/images/hd/vintage-paper-texture-background-8uezkm57cjmw2cus.jpg")]'>

<button onClick={()=>{
  deleteNotes(idx)
}} className='h-5 w-6 ml-58 mt-1 active:scale-95'
>
  <img src="https://icon-library.com/images/cross-png-icon/cross-png-icon-23.jpg"/>
</button>

    <h1 className='font-bold text-2xl pl-5'>
    <u>{elem.tittle}</u>

  </h1>
  <p className='p-4'>{elem.details}</p>

  </div>
})}

</div>
</div>
    </div>
  );
}

export default App;
