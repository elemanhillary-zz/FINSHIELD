import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Popover, Upload, message, Modal } from 'antd';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';

import br from 'react-router'

import '../../App.css'

const { Option } = Select;
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

class Tenders extends Component {

    state = { IsModalVisible: false, visible: false, companyName: "TRANSPHARMA HEALTHCARE CO. LIMITED" };

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

    showModal = (event) => {
        this.setState({
            IsModalVisible: true,
            visible: false
        })
        event.stopPropagation()
        this.props.openModal(false)
    };

    handleOk = () => {
        this.setState({
            IsModalVisible: false
        })
        
        this.props.history.push("/feedback")
    };

    handleCancel = () => {
        this.setState({
            IsModalVisible: false
        })
    };

    _renderPopModal = _ => (
        <Button type="primary" onClick={(event) => this.showModal(event)}>Apply Tender</Button>
    )

    _renderApplyModal = _ => (
            <Modal title="Apply For Tender" visible={this.state.IsModalVisible} onOk={() => this.handleOk()} onCancel={() => this.handleCancel()}>

                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload tender documents</p>
                    <p className="ant-upload-hint">
                        Strictly prohibit from uploading company data or other
                        bad files
                    </p>
                </Dragger>
            </Modal>
 
    )

    render() {
        return (
            <>
            <Drawer
                title="Tender Details"
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
                        {this._renderPopModal()}
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="OCID"
                            >
                                <Input defaultValue="OCDS-065251" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="owner"
                                label="Tender NO"
                            >
                                <Input defaultValue="CGK/FEP/001/2021/2022" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                label="Financial year"
                            >
                                <Input defaultValue="2021-2022" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="Procurement Method"
                            >
                                <Input defaultValue="Open Tender" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dateTime"
                                label="Category"
                            >
                                <Input defaultValue="Non Consultancy Services" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Tender Fee"
                            >
                                <Input defaultValue="0" bordered={false} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Bid Security Percentage"
                            >
                                <Input defaultValue="0%" bordered={false} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
            {this._renderApplyModal()}
            </>
        );
    }
}

export default Tenders;