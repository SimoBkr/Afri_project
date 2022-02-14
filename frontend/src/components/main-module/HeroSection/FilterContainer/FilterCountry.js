import React, { useState } from 'react';
import { Select, Input, Form } from 'antd';
import 'antd/dist/antd.css';
import '../../Main.css';

function FilterCountry() {

    const { Option } = Select;

    const [containerDelect, setcontainerDelect] = useState({
        container: "",
        autoDelect: ""
    })

    const ChangeInput = (e) => {
        setcontainerDelect({
            ...containerDelect,
            container: e.target.value,
        })
    }

    const ChangeAutoDelect = (e, name) => {
        setcontainerDelect({
            ...containerDelect,
            [name]: e
        })
    }

    function logInformation() {
        console.log(containerDelect);
    }

    return (
        <>
            <br /> <br />
            <div className="FilterCountry">
                <div className="Filter">
                    <div className="container col-12">
                        <div className="row rowFilter">
                            <Form name="basic"
                                layout="inline"
                                initialValues={{
                                    remember: true,
                                }}>
                                <div className="col-xs-3" style={{ marginRight: "27px" }}>
                                    <div className="panel panel-default">
                                        <div className="panel-body">

                                            <ul className="countryfilter">

                                                <li className="date">
                                                    <img src="img/FCL.png" alt="Not Found ..." className="image-left" />
                                                </li>

                                                <li className="filter-li">
                                                    <Form.Item name="container" rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input this field!',
                                                        },
                                                    ]}>
                                                        <Input
                                                            placeholder="Container N°"
                                                            className="ant-select-selector"
                                                            style={{ width: "450px", marginLeft: "10px" }}
                                                            onChange={(e) => ChangeInput(e)}
                                                        />
                                                    </Form.Item>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-6">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <ul className="date-ul">
                                                <li className="date-li">
                                                    <div className="SelectOptions">
                                                        <Select
                                                            showSearch
                                                            defaultValue="Auto Delect"
                                                            style={{ width: 388 }}
                                                            onChange={(e) => {
                                                                ChangeAutoDelect(e, "autoDelect")
                                                            }}
                                                        >
                                                            <Option value="Auto">Auto Delect</Option>
                                                            <Option value="Alianca">Alianca</Option>
                                                            <Option value="Arkas">Arkas</Option>
                                                            <Option value="BLPL">BLPL Singapore</Option>
                                                        </Select>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-2">
                                    <div className="panel panel-default" id="panelsearsh">
                                        <div className="panel-body">
                                            <Form.Item>
                                                <button className="Button_Search">
                                                    <img id="searchicon" src="img/loop.png" alt="Not Found ..." />
                                                </button>
                                            </Form.Item>
                                        </div>
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

export default FilterCountry;