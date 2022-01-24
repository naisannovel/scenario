import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import { IoArrowBack } from "react-icons/io5";
import DistrictDropdown from './DistrictDropdown';
import DivisonSearchableDropdown from './DivisonSearchableDropdown';
import DynamicInput from './DynamicInput';

const Drawer = ({ isOpen, drawerOpenHandler }) => {

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
             <div>
                 <div className={`fixed w-2/6 h-full bg-white shadow-2xl shadow-gray-400 rounded-tl-2xl overflow-hidden top-0 right-0 z-50 transition duration-1000 ease-in-out ${ isOpen ? '':'translate-x-full' }`}>
                <div class="container w-3/4 h-full m-12">

                <button className='flex items-center justify-center py-2 px-5 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-800 text-md focus:outline-none focus:ring-2 ring-offset-1' onClick={drawerOpenHandler}>
                    <IoArrowBack className='mr-1' /> Back</button>

             <DivisonSearchableDropdown/>
             <DistrictDropdown/>
             <DynamicInput/>
                </div>
             </div>
             {/* { isOpen && <div className='fixed w-full h-full bg-black opacity-25 top-0 left-0'></div> } */}
             </div>
    ,document.getElementById('drawer'));
};

export default Drawer;