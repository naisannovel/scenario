import React from 'react';

const Header = ({ drawerOpenHandler }) => {

    return (
        <header className="container bg-white m-auto items-center justify-around py-20 rounded-bl-3xl rounded-br-3xl flex">
                <h3 className='text-4xl font-bold text-blue-900'>দর্শনীয় স্থান যোগ করতে চান?</h3>
                <button className='border py-2 px-8 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-800 text-xl focus:outline-none focus:ring-2 ring-offset-1' onClick={drawerOpenHandler} >add new place</button>
        </header>
    );
};

export default Header;