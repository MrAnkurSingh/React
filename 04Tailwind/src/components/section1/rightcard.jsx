import React from 'react';
import Rightcardcontent from './rightcardcontent';

const Rightcard = (props) => {
    return (
        <div class='h-full shrink-0 w-60 overflow-hidden relative rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img}></img>
            <Rightcardcontent id={props.id} tag={props.tag} color={props.color}/>
        </div>
        
    );
}

export default Rightcard;
