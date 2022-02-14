import React, { useContext } from 'react';
import { ContextUser } from '../../contexts/ContextUser';
import HeroSection from '../main-module/HeroSection/HeroSection';
import Navbar from '../Navbar';
import Cards from './ToolsCards/Cards';

const Main = () => {
    const context = useContext(ContextUser);
    return (
        <>
            <Navbar formUser={context.formUser} setformUser={context.setformUser} />
            <HeroSection />
            <br /><br />
            <Cards />
        </>
    );
}

export default Main;
