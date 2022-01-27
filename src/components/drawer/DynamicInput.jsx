import React, { useState } from 'react';
import { IoRemoveOutline } from "react-icons/io5";
import { useEffect } from 'react/cjs/react.development';
import upazila from '../../data/upazila.json';

const DynamicInput = ({ data, selectedDistrict, setData }) => {

    const [inputValue, setInputValue] = useState(['']);
    const [placesOfSelectedDistrict, setPlacesOfSelectedDistrict] = useState([]);
    const [indexNum, setIndexNum] = useState(null);
    const [filteredPlacesUsingInputValue, setFilteredPlacesUsingInputValue] = useState([]);

    const onChangeHandler = (event,index)=>{
       const newAry = [...inputValue];
       newAry[index] = event.target.value;
       setInputValue(newAry);
       setFilteredPlacesUsingInputValue([])
       if(newAry[index].length !== 0){
           const filteredPlace = placesOfSelectedDistrict.filter(item => item?.name.toString().toLowerCase().startsWith(newAry[index].toString().toLowerCase()))
           setIndexNum(index);
            setFilteredPlacesUsingInputValue([...filteredPlace])
    }
    }

    const incrementInputField = () =>{
        const newAry = [...inputValue];
        const removeEmptyInput = newAry.filter(item => item !== '') 
        setInputValue( [...removeEmptyInput, ''] );
    }

    const removeInput = index =>{
        const remainInput = inputValue.filter((item,i)=> i !== index );
        setInputValue(prevState => remainInput);
    }

    useEffect(()=>{
        if(selectedDistrict?.code !== undefined){
           const filteredPlacesByDistrict = upazila.upazila.filter(item => item.parent_code === selectedDistrict.code);
           setPlacesOfSelectedDistrict([...filteredPlacesByDistrict])
        }
    },[selectedDistrict])

    let displayPlaceItems;

    if(filteredPlacesUsingInputValue.length !== 0){
        <div className='absolute top-full left-0 w-full text-sm z-50'>
        {
            displayPlaceItems = filteredPlacesUsingInputValue.map(item => (
                <div className='py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-pointer'>
                    <p className='px-4'> { item?.name } </p>
                </div>
        ))
        }
            </div>
    }

    return (
        <div className='mt-6'>
            <label className='text-sm'>Popular Place</label>
            {
                inputValue.map((item, index)=>(
                    <div className='mt-3 mb-3 flex items-center justify-between' key={index}>
                <div className='relative w-4/5'>
                <input type="text" onChange={(event)=>onChangeHandler(event,index)} value={item} className='w-full border border-blue-200 rounded-lg py-3 px-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500' placeholder={`Popular Place ${index + 1}`} />

                    

                {/* <div className='absolute top-full left-0 w-full text-sm z-50'>
                    <div className='py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-pointer'>
                        <p className='px-4'> hello world </p>
                    </div>
                </div> */}

                { indexNum === index && displayPlaceItems }



                </div>


                


                { inputValue.length > 1 && <div className='h-12 w-12 flex items-center justify-center rounded-full border hover:bg-red-600 hover:text-white'><IoRemoveOutline onClick={()=>removeInput(index)} className='w-6 h-6' /></div> }

                

            </div>
                ))
            }
            {
                inputValue.length !== 0 && <button onClick={incrementInputField} className='w-4/5 border-dashed border-2 border-blue-200 rounded-lg py-3 px-4 font-medium text-gray-500 focus:outline-none bg-transparent text-md placeholder:text-gray-500 disabled:opacity-60' disabled={ !inputValue[inputValue.length-1].length }>+ add a place</button>
            }
        </div>
    );
};

export default DynamicInput;