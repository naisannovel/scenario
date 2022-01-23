import React from 'react';

const ContentCard = () => {
    return (
        <div className='basis-80 h-72 p-4 m-4 shrink-0 border border-blue-200 rounded-2xl'>
            <div className='h-5/6 flex flex-col justify-center'>
                <p className='text-blue-900 font-semibold text-sm'>মানিকগঞ্জ</p>
                <p className='text-orange-500 font-semibold text-base'>হরিরামপুর</p>
            </div>
            <button className='border w-full py-3 rounded-lg left-0 font-semibold bg-blue-100 hover:bg-blue-200 text-blue-500 text-sm focus:outline-none focus:ring-2 ring-offset-1'>এডিট করুন</button>
        </div>
    );
};

export default ContentCard;