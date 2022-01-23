import React from 'react';
import ContentCard from './ContentCard';

const Content = () => {



    return (
        <main className='container bg-white m-auto mt-6 pb-16'>
            <div className='flex items-center justify-around p-8'>
                <h4 className='text-xl font-bold'>দর্শনীয় স্থান সমূহ</h4>
                <hr className='h-0.5 w-5/6 bg-blue-100' />
            </div>
            <div class="flex justify-center flex-wrap">
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
            </div>
        </main>
    );
};

export default Content;