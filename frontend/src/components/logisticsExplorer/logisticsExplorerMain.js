import React, { useContext } from 'react';
import ExplorerSection from './Cards/ExplorerSection';
import Filter from '../main-module/HeroSection/FilterSeaLandAir/Filter';
import '../logisticsExplorer/logisticsExplorerMain.css'
import ImageLogistics from './TitleAndImageLogistics/ImageLogistics';
import { ContextUser } from '../../contexts/ContextUser';
import Navbar from '../Navbar';

const LogisticsExplorerMain = () => {
    const context = useContext(ContextUser);

    return (
        <>
            <Navbar formUser={context.formUser} setformUser={context.setformUser} />
            <div>
                <div className="container">
                    <ImageLogistics />
                </div>
                <div className="customfilter">
                    <Filter />
                </div>
                <div className="container">
                    <ExplorerSection />
                </div>
            </div>
        </>
    );
}

export default LogisticsExplorerMain;
