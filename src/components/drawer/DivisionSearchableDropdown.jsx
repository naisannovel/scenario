import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import divisionList from '../../data/division.json';

const DivisionSearchableDropdown = ({ data, setData }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = event => {
        setInputValue(event.target.value);
        setData(prevState => ({...prevState, division: {} }))
        setData(prevState => ({...prevState, district: {} }))
    }

    const selectDivisionHandler = (event, selectedDivision) =>{
        setInputValue(selectedDivision?.name)
        setData(prevState => ({...prevState, division: selectedDivision }))
    }


    let searchData;

    if(data?.code === undefined && inputValue){
        const filterData = divisionList.division.filter(item => item.name.toString().toLowerCase().startsWith(inputValue.toString().toLowerCase()));
            searchData = (
                <div className='absolute top-full left-0 w-full text-sm z-50'>
                    
                        {
                            filterData.length ? 
                            filterData.map((item,index) => (
                                <div onClick={(event) => selectDivisionHandler(event, item)} key={index} className='py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-pointer'>
                                    <p className='px-4'> { item.name } </p>
                                </div>
                            )) :
                            (
                                <div className='py-2 bg-white hover:bg-blue-50 border-b border-l border-r hover:border-r-0 hover:border-l-0 cursor-not-allowed'>
                                    <p className='px-4'> Not Found </p>
                                </div>
                            )
                        }
                    
                </div>
            )
    }
    
    return (
        <div className='mt-12'>
            <label className='text-sm'>Division</label>
            <div className='w-full bg-blue-50 rounded-lg py-3 relative mt-2'>
                <input type="text" onChange={(event)=> onChangeHandler(event)} value={ inputValue } className='w-full mx-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500' placeholder='Type here' />
                <IoSearchOutline className='absolute top-0 right-0 bottom-0 my-auto mr-4 text-xl text-gray-400' />

                
                   { searchData } 
                
           
            </div>
        </div>
    );
};

export default DivisionSearchableDropdown;