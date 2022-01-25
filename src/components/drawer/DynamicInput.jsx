import React from 'react';
import { IoRemoveOutline } from "react-icons/io5";

const DynamicInput = ({ data, setData }) => {


    const onChangeHandler = (event,index)=>{
       const newAry = [...data];
       newAry[index] = event.target.value;
       const haveInputValue = newAry.filter(item => item !== '') 
       setData(prevState => ({ ...prevState, popularPlace: haveInputValue }));
    }

    const incrementInputField = () =>{
        setData(prevState => ({ ...prevState, popularPlace: [...prevState.popularPlace, ''] }));
    }

    const removeInput = index =>{
        const remainInput = data.filter((item,i)=> i !== index );
        setData(prevState => ({ ...prevState, popularPlace: remainInput }));
    }

    return (
        <div className='mt-6'>
            <label className='text-sm'>Popular Place</label>
            {
                data.map((item, index)=>(
                    <div className='mt-3 mb-3 flex items-center justify-between' key={index}>
                <input type="text" onChange={(event)=>onChangeHandler(event,index)} value={item} className='w-4/5 border border-blue-200 rounded-lg py-3 px-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500' placeholder={`Popular Place ${index + 1}`} />
                { data.length > 1 && <div className='h-12 w-12 flex items-center justify-center rounded-full border hover:bg-red-600 hover:text-white'><IoRemoveOutline onClick={()=>removeInput(index)} className='w-6 h-6' /></div> }
            </div>
                ))
            }
            {
                data.length !== 0 && <button onClick={incrementInputField} className='w-4/5 border-dashed border-2 border-blue-200 rounded-lg py-3 px-4 font-medium text-gray-500 focus:outline-none bg-transparent text-md placeholder:text-gray-500 disabled:opacity-60' disabled={ !data[data.length-1].length }>+ add a place</button>
            }
        </div>
    );
};

export default DynamicInput;