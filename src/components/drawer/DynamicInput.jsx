import React, { useState } from 'react';
import { IoRemoveOutline } from "react-icons/io5";

const DynamicInput = () => {
    
    const [place,setPlace] = useState(['']);

    const onChangeHandler = (event,index)=>{
       const newAry = [...place];
       newAry[index] = event.target.value;
       setPlace(newAry);
    }

    const removeInput = index =>{
        const remainInput = place.filter((item,i)=> i !== index );
        setPlace(remainInput)
    }
    
    return (
        <div className='mt-6'>
            <label className='text-sm'>Popular Place</label>
            {
                place.map((item, index)=>(
                    <div className='mt-3 mb-3 flex items-center justify-between' key={index}>
                <input type="text" onChange={(event)=>onChangeHandler(event,index)} value={item} className='w-4/5 border border-blue-200 rounded-lg py-3 px-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500' placeholder='Type here' />
                { place.length > 1 && <div className='h-12 w-12 flex items-center justify-center rounded-full border hover:bg-red-600 hover:text-white'><IoRemoveOutline onClick={()=>removeInput(index)} className='w-6 h-6' /></div> }
            </div>
                ))
            }
            {
                place.length !== 0 && <button onClick={()=>setPlace(prevState => [...prevState,''])} className='w-4/5 border-dashed border-2 border-blue-200 rounded-lg py-3 px-4 font-medium text-gray-500 focus:outline-none bg-transparent text-md placeholder:text-gray-500 disabled:opacity-60' disabled={ !place[place.length-1].length }>+ add a place</button>
            }
        </div>
    );
};

export default DynamicInput;