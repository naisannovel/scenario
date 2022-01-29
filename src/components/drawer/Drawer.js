import React, { useEffect, useRef, useContext } from 'react';
import ReactDom from 'react-dom';
import { IoArrowBack } from "react-icons/io5";
import DistrictDropdown from './DistrictDropdown';
import DivisionSearchableDropdown from './DivisionSearchableDropdown';
import DynamicInput from './DynamicInput';
import MultiPackage from './MultiPackage';
import { scenarioDataContext } from '../../App';

const Drawer = ({ isOpen, drawerOpenHandler }) => {

  const [scenarioData, setScenarioData] = useContext(scenarioDataContext);

    const bodyRef = useRef(document.querySelector("body"));
    const { division, district, places, ourPackages } = scenarioData;

    const submitHandler = () =>{
      if(document.cookie.split('=')[1]){
        const previousScenarioData = JSON.parse(document.cookie.split('=')[1]);
        const newScenarioDataAry = [...previousScenarioData, scenarioData];
        document.cookie = 'scenarioData =' + JSON.stringify(newScenarioDataAry)
      }else{
        document.cookie = 'scenarioData =' + JSON.stringify([scenarioData])
      }

      // clear state
      setScenarioData({
        division: { name: '' },
        district: {},
        places: [''],
        ourPackages: []
      })

      // After submitHandler drawer will be close
      drawerOpenHandler()
    }

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
                <div className="container w-3/4 m-12">

                <button className='flex items-center justify-center py-2 px-5 rounded-lg bg-blue-100 hover:bg-blue-100 text-blue-800 text-md focus:outline-none focus:ring-2 ring-offset-1' onClick={drawerOpenHandler}>
                    <IoArrowBack className='mr-1' /> Back</button>

              
             <DivisionSearchableDropdown />
             <DistrictDropdown />
             <DynamicInput />
             <MultiPackage />
                </div>
             <hr className='h-0.5 w-full bg-gray-50' />
             <div className="container w-3/4 m-12 flex items-center justify-evenly">
             <button onClick={drawerOpenHandler}  className='flex items-center justify-center py-2 px-6 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-800 text-md focus:outline-none focus:ring-2'>Cancel</button>
             <button onClick={submitHandler} disabled={ !(division?.code && district?.code && places[0].length >= 1 && ourPackages.length) } className='flex items-center justify-center py-2 px-7 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-md focus:outline-none focus:ring-2 ring-offset-1 disabled:cursor-not-allowed'>Submit</button>
             </div>
             </div>
    ,document.getElementById('drawer'));
};
export default Drawer;