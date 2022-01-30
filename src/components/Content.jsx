import React, { useContext, useEffect } from 'react';
import { cookieDataContext } from '../App';
import ContentCard from './ContentCard';

const Content = () => {
    
    const [cookieData, setCookieData] = useContext(cookieDataContext);

    useEffect(()=>{
        if(document.cookie.split('=')[1]){
            const cookiesDataList = JSON.parse(document.cookie.split('=')[1]);
            setCookieData(cookiesDataList)
          }
        },[])

        let displayData;

        if(cookieData.length){
            displayData = cookieData.map((item, index) => <ContentCard division={item?.division?.name} district={item?.district?.name} key={index} /> )
        }else{
            displayData = <h4 className='text-3xl font-bold opacity-30'>No Data Found</h4>
        }

    return (
        <main className='container bg-white m-auto mt-6 pb-16'>
            <div className='flex flex-col sm:flex-row items-center justify-around p-8'>
                <h4 className='text-md md:text-xl font-bold'>দর্শনীয় স্থান সমূহ</h4>
                <hr className='h-0.5 w-full mt-4 sm:mt-0 sm:w-5/6 bg-blue-100' />
            </div>
            <div className="flex justify-center flex-wrap">
            { displayData }
            </div>
        </main>
    );
};

export default Content;