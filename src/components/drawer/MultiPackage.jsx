import React, { useState } from 'react';

const MultiPackage = () => {

    const [data, setData] = useState([]);

    const dataAndColor = [
        {
            packageNum: 1,
            color: 'orange',
            amount: '৩০০.০০'
        },
        {
            packageNum: 2,
            color: 'blue',
            amount: '৪০০.০০'
        },
        {
            packageNum: 3,
            color: 'orange',
            amount: '৫০০.০০'
        },
        {
            packageNum: 4,
            color: 'blue',
            amount: '৬০০.০০'
        },
    ]
    
    const handleToggleCheckbox = index =>{

        const newAry = [...data]
        const selectedPackage = dataAndColor[index];

            const isInclude = data.findIndex(item => item.packageNum === selectedPackage.packageNum);
            
            if(isInclude !== -1){
                newAry.splice(isInclude,1)
                setData(newAry)
            }else{
                newAry.push(selectedPackage)
                setData(newAry);
            }
    }

    return (
        <div className='mt-6'>
            <label className='text-sm'>Packages</label>
            
                {
                    dataAndColor.map(({ packageNum, color, amount },index)=>(
                        <div className='mt-6 mb-8 flex items-center justify-between px-4' key={index}>
                <label for={`package${packageNum}`} className='flex'>
                    <div className={`h-12 w-12 bg-${ color }-100 rounded-lg`}></div>
                    <div className='flex flex-col justify-around ml-3'>
                        <h4 className={`text-${ color }-500 text-sm font-semibold`}>Package { packageNum }</h4>
                        <p className='text-blue-900 text-sm font-semibold'>৳{ amount }</p>
                    </div>
                </label>
                <input type="checkbox" onChange={()=>handleToggleCheckbox(index)} id={`package${packageNum}`} value={`package${packageNum}`}/>
            </div>
                    ))
                }
        </div>
    );
};

export default MultiPackage;