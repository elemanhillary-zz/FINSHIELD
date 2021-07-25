import React, { Component } from 'react';
import { Card, Form, Input, Tabs, Typography, Row, Col, Select, DatePicker, Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"

const { TabPane } = Tabs
const { Text } = Typography
const { Option } = Select
const { Dragger } = Upload

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

class Registration extends Component {
    state = {

        companyIndMock: [
            "Agriculture",
            "E-Commerce",
            "Manuifacturing",
            "Pharma"
        ],
    }

    _renderSupplierForm = _ => (
        <Form layout="vertical">
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="name"
                        label="Company Name"
                    >
                        <Input placeholder="Please enter company name" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="regNumber"
                        label="Reg. Number"
                    >
                        <Input placeholder="Please enter registration number" />
                    </Form.Item>
                </Col>
                <Col span={12}>

                    <Form.Item
                        name="companyAddress"
                        label="Company Address / Contacts"
                    >
                        <Input placeholder="Please enter company address" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="companyInd"
                        label="Select Industries"
                    >
                        <Select
                            showSearch
                            mode="multiple"
                            size={"default"}
                            placeholder="please select company industry"
                            style={{ width: '100%' }}
                            optionFilterProp="children"
                            filterOption={(input, option) =>

                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            {
                                this.state.companyIndMock.map((value, index) => (
                                    <Option key={index}>{value}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        name="branch"
                        label="Company Branch"
                    >
                        <Input placeholder="Please enter company branch" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="comEmail"
                        label="Company Email"
                    >
                        <Input placeholder="Please enter company email" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="estYear"
                        label="Est. Year"
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentElement}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload company logo</p>
                        <p className="ant-upload-hint">
                            Strictly prohibit from uploading company data or other
                            bad files
                        </p>
                    </Dragger>
                </Col>
            </Row>
        </Form>
    )
    render() {
        return (
            <div style={{display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column"}}>
                <Card
                    hoverable={true}
                    bordered={true}
                    actions={[
                        <Link to="/supplier"><Text>Create Account</Text></Link>
                        
                    ]}
                    style={{
                        width: 700
                    }}
                >
                    <Tabs>
                        <TabPane tab="Supplier" key="supplier">
                            {this._renderSupplierForm()}
                        </TabPane>
                        <TabPane tab="Procuring Entity" key="pentity">

                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default Registration;