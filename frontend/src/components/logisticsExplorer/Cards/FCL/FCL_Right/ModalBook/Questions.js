import React, { useContext } from 'react';
import '../../../ExplorerSection.css';
import { Collapse } from 'antd';
import { CarryOutOutlined, FileDoneOutlined, FileSearchOutlined, InsuranceOutlined } from '@ant-design/icons';
import { ContextLogistics } from '../../../../../../contexts/ContextLogistics';

function Questions() {

    const context_logistics = useContext(ContextLogistics);
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const genExtra1 = () => (
        <FileDoneOutlined
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );

    const genExtra2 = () => (
        <FileSearchOutlined
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );

    const genExtra3 = () => (
        <InsuranceOutlined
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );

    const genExtra4 = () => (
        <CarryOutOutlined
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        />
    );


    return (
        <>
            <Collapse
                defaultActiveKey={['1']}
                onChange={callback}
                expandIconPosition="right"
            >
                <Panel header="DO YOU NEED CUSTOMS CLEARANCE ?" key="1" extra={genExtra1()}>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </Panel>
                <Panel header="DO YOU NEED PRE SHIPMENT INSPECTION SERVICE ?" key="2" extra={genExtra2()}>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </Panel>
                <Panel header="DO YOU NEED INSURANCE ?" key="3" extra={genExtra3()}>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </Panel>
                <Panel header="DO YOU NEED TO DEFER YOUR CARGO PAYMENT ?" key="4" extra={genExtra4()}>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            No
                        </label>
                    </div>
                </Panel>
            </Collapse>
        </>
    )
}

export default Questions;