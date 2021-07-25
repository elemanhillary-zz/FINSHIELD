import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import '../../App.css'

const { Option } = Select;

class SupplierDetails extends Component {

    state = { visible: false, companyName: "TRANSPHARMA HEALTHCARE CO. LIMITED" };

    componentDidUpdate = (prevProps) => {
        if (prevProps.isVisible !== this.props.isVisible) {
            this.setState({
                visible: this.props.isVisible
            })
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
        this.props.openModal(false)
    };

    render() {
        return (
            <Drawer
                title="Supplier Details"
                width={720}
                onClose={this.onClose}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="Company Name"
                            >
                                <Input defaultValue="TRANSPHARMA HEALTHCARE CO. LIMITED" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="owner"
                                label="Business Type"
                            >
                                <Input defaultValue="private" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                label="Address"
                            >
                                <Input defaultValue="PLOT 209/8476 , KENYATTA AVENUE, PLOT 209/8476 KENYATTA AVENUE" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="Email"
                            >
                                <Input defaultValue="fin***@gmail.com" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Registration Number"
                            >
                                <Input defaultValue="CPR/2013/118524" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="KRA Pin"
                            >
                                <Input defaultValue="KR***9303849" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Industry"
                            >
                                <Input defaultValue="Pharmacy" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Pricing"
                            >
                                <Input defaultValue="500,000,000 Ksh" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Lead Time"
                            >
                                <Input defaultValue="3 Years 7 Months" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Market Valuation"
                            >
                                <Input defaultValue="6.8 Billion Ksh" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Institution Endorsements"
                            >
                                <Input defaultValue="Safaricom, NCBA, Twiga" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        );
    }
}

export default SupplierDetails;