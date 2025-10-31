import React from 'react';
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';

const Page1content = (props) => {
    return (
        <div className='py-10 px-10  h-[85vh] gap-5 flex justify-between items-center '>
            <Leftcontent/>
            <Rightcontent users={props.users} />
            
        </div>
    );
}

export default Page1content;
