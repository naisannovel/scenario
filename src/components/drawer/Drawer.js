import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { IoArrowBack } from "react-icons/io5";
import DistrictDropdown from './DistrictDropdown';
import DivisionSearchableDropdown from './DivisionSearchableDropdown';
import DynamicInput from './DynamicInput';
import MultiPackage from './MultiPackage';

const Drawer = ({ isOpen, drawerOpenHandler }) => {

  const [data,setData] = useState({
    division: {},
    district: {},
    popularPlace: [''],
    ourPackages: []
  })

    const bodyRef = useRef(document.querySelector("body"));

    // Prevent page scrolling when the drawer is open
    useEffect(() => {
        const updatePageScroll = () => {
          if (isOpen) {
            bodyRef.current.style.overflow = "hidden";
          } else {
            bodyRef.current.style.overflow = "";
          }
        };
    
        updatePageScroll();
      }, [isOpen]);

    return ReactDom.createPortal(
                 <div className={`fixed overflow-y-scroll w-2/6 h-full bg-white shadow-2xl shadow-gray-400 rounded-tl-2xl overflow-hidden top-0 right-0 z-50 transition duration-1000 ease-in-out ${ isOpen ? '':'translate-x-full' }`}>
                <div class="container w-3/4 m-12">

                <button className='flex items-center justify-center py-2 px-5 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-800 text-md focus:outline-none focus:ring-2 ring-offset-1' onClick={drawerOpenHandler}>
                    <IoArrowBack className='mr-1' /> Back</button>

             <DivisionSearchableDropdown data={data.division} setData={setData} />
             <DistrictDropdown divisionData={data.division} setData={setData} />
             <DynamicInput data={data.popularPlace} setData={setData} />
             <MultiPackage  data={data.ourPackages} setData={setData} />
                </div>
             <hr className='h-0.5 w-full bg-gray-50' />
             <div class="container w-3/4 m-12 flex items-center justify-evenly">
             <button onClick={drawerOpenHandler}  className='flex items-center justify-center py-2 px-6 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-800 text-md focus:outline-none focus:ring-2'>Cancel</button>
             <button className='flex items-center justify-center py-2 px-7 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-md focus:outline-none focus:ring-2 ring-offset-1'>Submit</button>
             </div>
             </div>
    ,document.getElementById('drawer'));
};
export default Drawer;