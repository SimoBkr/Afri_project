import React, { useContext } from 'react'
import { ContextFilter } from '../../../contexts/ContextFilter';
import './ExplorerSection.css'
import FCL_Left from './FCL/FCL_Left';
import RBox2 from './FCL/FCL_Right/RBox2';
import LCL_Left from './LCL/LCL_Left';
import Result_LCL from './LCL/LCL_Right/Result_LCL';
import FTL_Left from './FTL/FTL_Left';
import Result_FTL from './FTL/FTL_Right/Result_FTL';
import LTL_Left from './LTL/LTL_Left';
import Result_LTL from './LTL/LTL_Right/Result_LTL';
import FWL_Left from './FWL/FWL_Left';
import Result_FWL from './FWL/FWL_Right/Result_FWL';
import Svg_animation from './Svg_animation';

function ExplorerSection() {

    const context_filter = useContext(ContextFilter);

    return (
        <>
            {context_filter.DistanceandtimeParams.moyenTransport === "" &&
               <>
                 <Svg_animation />  
               </>
            }
            {context_filter.DistanceandtimeParams.moyenTransport === "fcl" &&
                <section className="features-boxed2">
                    <div className="container displaying_flex">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="box" id="logistics">
                                <FCL_Left />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item2">
                            <RBox2 />
                        </div>
                    </div>
                </section>
            }
            {context_filter.DistanceandtimeParams.moyenTransport === "lcl" &&
                <section className="features-boxed2">
                    <div className="container displaying_flex">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="box" id="logistics">
                                <LCL_Left />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item2">
                            <Result_LCL />
                        </div>
                    </div>
                </section>
            }

            {context_filter.DistanceandtimeParams.moyenTransport === "ftl" &&
                <section className="features-boxed2">
                    <div className="container displaying_flex">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="box" id="logistics">
                                <FTL_Left />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item2">
                            <Result_FTL />
                        </div>
                    </div>
                </section>
            }

            {context_filter.DistanceandtimeParams.moyenTransport === "ltl" &&
                <section className="features-boxed2">
                    <div className="container displaying_flex">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="box" id="logistics">
                                <LTL_Left />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item2">
                            <Result_LTL />
                        </div>
                    </div>
                </section>
            }

            {context_filter.DistanceandtimeParams.moyenTransport === "fwl" &&
                <section className="features-boxed2">
                    <div className="container displaying_flex">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="box" id="logistics">
                                <FWL_Left />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item2">
                            <Result_FWL />
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default ExplorerSection;