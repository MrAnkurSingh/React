import React from 'react';

const Rightcardcontent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0  h-full w-full p-5 flex flex-col justify-between '>
                <h1 className='bg-yellow-50 rounded-full h-8 w-8 flex justify-center items-center font-bold'>{props.id+1}</h1>
                <div>
                    <p className='text-white mb-5 text-shadow-2xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptates veritatis totam reiciendis.</p> 
                   <div className='flex text-white '>
                     <button style={{backgroundColor:props.color}}className='px-4 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-700 px-2 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Rightcardcontent;
