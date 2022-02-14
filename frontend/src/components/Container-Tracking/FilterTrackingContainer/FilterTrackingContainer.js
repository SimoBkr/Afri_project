import React, { useContext, useState } from 'react';
import { Select, Input, Form } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import containerdata from './SeaLines.json';
import '../../../components/main-module/Main.css';
import { ContextContainer } from '../../../contexts/ContextContainer';

function FilterTrackingContainer() {

    const { Option } = Select;
    const context_container = useContext(ContextContainer);

    const ChangeInput = (e) => {
        context_container.setcontainerDetect({
            ...context_container.containerDetect,
            container: e.target.value,
        })
    }

    const ChangeAutoDetect = (e, name) => {
        context_container.setcontainerDetect({
            ...context_container.containerDetect,
            [name]: e
        })
    }
    
    return (
        <>
            <br /> <br />
            <div>
                <div className="filter_container">
                    <div className="container">
                        <div className="row_filter row">
                            <Form
                                name="basic"
                                layout="inline"
                                initialValues={{
                                    remember: true,
                                }}>
                                <div className="col col_search">
                                    <div className="search_field">
                                        <Form.Item
                                            name="search"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input this field!',
                                                },
                                            ]}>
                                            <Input
                                                placeholder="N° Container"
                                                className="ant-select-selector input_search_field"
                                                onChange={(e) => ChangeInput(e)}
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="col-md-auto">
                                    <ul className="seaLines_ul">
                                        <li className="seaLines_li">
                                            <div className="SelectOptions">
                                                <Select
                                                    showSearch
                                                    placeholder="SeaLines"
                                                    className="select_field_seaLines"
                                                    onChange={(e) => {
                                                        ChangeAutoDetect(e, "autoDetect")
                                                    }}
                                                >
                                                    <Option value={containerdata.seaLines[0].value}>{containerdata.seaLines[0].name}</Option>
                                                </Select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-sm-1">
                                    <div className="search_container">
                                        <Form.Item>
                                            <button className="button_search_container_tracking" onClick={() => context_container.getDataContainer()}>
                                                <img id="searchicon" src="img/loop.png" alt="Not Found ..." />
                                            </button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterTrackingContainer;