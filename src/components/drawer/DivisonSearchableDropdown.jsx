import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const DivisonSearchableDropdown = () => {

    return (
        <div className='mt-12'>
            <label className='text-sm'>Division</label>
            <div className='w-full bg-blue-50 rounded-lg py-3 relative mt-2'>
                <input type="text" name='division' className='w-full mx-4 focus:outline-none bg-transparent text-md placeholder:text-gray-500' placeholder='Type here' />
                <IoSearchOutline className='absolute top-0 right-0 bottom-0 my-auto mr-4 text-xl text-gray-400' />
            </div>
        </div>
    );
};

export default DivisonSearchableDropdown;