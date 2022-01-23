import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

const Drawer = ({ isOpen, drawerOpenHandler }) => {

    const bodyRef = useRef(document.querySelector("body"));


    // useEffect(() => {
    //     const updatePageScroll = () => {
    //       if (isOpen) {
    //         bodyRef.current.style.overflow = "hidden";
    //       } else {
    //         bodyRef.current.style.overflow = "";
    //       }
    //     };
    
    //     updatePageScroll();
    //   }, [isOpen]);

    return ReactDom.createPortal(
        // <div>
            <div className={`fixed w-1/4 h-full top-0 right-0 transition duration-200 ease-in-out bg-white text-black z-50 ${ isOpen ? 'translate-x-full':"" }`} >
            <button className='border py-2 px-8 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl focus:outline-none focus:ring-2 ring-offset-1' onClick={drawerOpenHandler} >back</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, incidunt doloremque? Facere cupiditate mollitia aliquam. Ea corporis aperiam dignissimos quasi porro, autem magnam sed repellat modi voluptate minus ducimus eveniet.
            </div>
            // {/* <div className='fixed w-full h-full bg-black opacity-25 top-0 left-0'></div> */}
        // {/* </div> */}
    ,document.getElementById('drawer'));
};

export default Drawer;