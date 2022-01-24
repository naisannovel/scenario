import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

const Drawer = ({ isOpen, drawerOpenHandler }) => {

    const bodyRef = useRef(document.querySelector("body"));


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
                 <div className={`fixed w-2/5 h-full bg-white text-black rounded-tl-2xl overflow-hidden top-0 right-0 z-50 transition duration-1000 ease-in-out ${ isOpen ? '':'translate-x-full' }`}>
                <button className='border py-2 px-8 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-800 text-xl focus:outline-none focus:ring-2 ring-offset-1' onClick={drawerOpenHandler}>Back</button>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae ullam corrupti distinctio eum, fugit, saepe iure neque soluta cumque dolorum explicabo quibusdam porro, deleniti repellat at eligendi facere. Omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic earum nostrum voluptates quae rem ad illum ipsa ex, ullam expedita, aperiam, voluptatem quis nam repellendus tempore libero distinctio quas obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde ea a recusandae quis. Eveniet nisi cum, aperiam at odit minus, minima et hic sequi atque alias ea. Cupiditate, voluptatibus?
                </p>
             </div>
             {/* { isOpen && <div className='fixed w-full h-full bg-black opacity-25 top-0 left-0'></div> } */}
             </div>
    ,document.getElementById('drawer'));
};

export default Drawer;