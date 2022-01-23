import React, { useState } from 'react';
import Content from './Content';
import Drawer from './drawer/Drawer';
import Header from './Header';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const drawerOpenHandler = ()=>{
        setIsOpen(!isOpen)
    }
    console.log('isOpen ',isOpen);

    return (
        <div>
            <Drawer isOpen={isOpen} drawerOpenHandler={drawerOpenHandler} />
            <Header drawerOpenHandler={drawerOpenHandler} />
            <Content/>
        </div>
    );
};

export default Home;