import React from 'react';
import Rightcard from './rightcard';

const Rightcontent = (props) => {
    return (
        <div id='right' className='h-full rounded-4xl overflow-auto p-5 w-2/3 flex flex-nowrap gap-8'>
          {props.users.map((elem,idx)=>{
            return <Rightcard key={idx} id={idx} img={elem.img}color={elem.color} tag={elem.tag} />
          })}
            
        </div>
    );
}

export default Rightcontent;
