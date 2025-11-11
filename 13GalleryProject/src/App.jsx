import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
const App = () => {

  const [userData, setUserData] = useState([]);
  const [pageNo, setpage] = useState(1);

  const getData=async()=>{
const response=  await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=18`)
setUserData (response.data)

  }

useEffect(() => {
  getData();
}, [pageNo]);

  let printUserData=<h1 className='top-1/2 left-1/2 absolute'>Loading....</h1>
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div>
        <img className='h-45 w-46' key={idx} src={elem.download_url} alt="" />
      </div>
    })
  }

  return (

    
    <div className='flex flex-col justify-center items-center gap-3 mt-5 overflow-auto '>

<div className='flex flex-wrap gap-3 justify-center'>
  {printUserData}



</div>

<div className='flex justify-center gap-3 '>
  <button
  style={{opacity:pageNo==1?0.5:1}}
className='bg-yellow-900
p-5 rounded-2xl'
onClick={()=>{
  if(pageNo>1){
setpage(pageNo-1)
  setUserData([])
  }
  
}}
>
Prev
</button>
<h4 className='text-black mt-5'>Page {pageNo}</h4>
<button
className='bg-yellow-900
p-5 rounded-2xl '
onClick={()=>{
  setpage(pageNo+1)
  setUserData([])
}}
>
Next
</button>

</div>

    </div>

  );
}

export default App;
