import React from 'react';
import { useContext } from 'react';
import { ContextContainer } from '../../../contexts/ContextContainer';
import '../ContainerTrackingMain.css';
import ContainerResult from './ContainerResult';
import MapComponent from './MapView/Map';

function ContainerTrackingResult() {

    const context_container = useContext(ContextContainer);

    return (
        <section>
            {context_container.loading_container === false &&
                <div className="container result_map_flex">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="Container_Result">
                            <ContainerResult />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="Map_Container_Result">
                            <MapComponent />
                        </div>
                    </div>
                </div>
            }
            {context_container.loading_container === true &&
                <div className="text-center">
                     <img src="/img/container_loading.svg" alt="...Not Found" className="img_container_loading"/>
                </div>
            }
        </section>
    )
}

export default ContainerTrackingResult;