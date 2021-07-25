import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Upload, Divider, message, Modal, Typography, Spin } from 'antd';
import { PlusOutlined, InboxOutlined, LoadingOutlined } from '@ant-design/icons';

import '../../App.css'

const { Option } = Select;
const { Text } = Typography
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

class CreateTender extends Component {

    state = {
        visible: false,
        submitting: false
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.isVisible !== this.props.isVisible) {
            this.setState({
                visible: this.props.isVisible
            })
        }
    }

    _renderLoadingSpinner = _ => (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
    )

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

    success = () => {
        this.setState({
            submitting: true
        })
        setTimeout(() => {

            this.setState({
                submitting: false
            })

            this.onClose()
            let secondsToGo = 2;
            const modal = Modal.success({
                title: 'Tender',
                content: `Tender has been successfully uploaded`,
            });
            const timer = setInterval(() => {
                secondsToGo -= 1;
            }, 1000);
            setTimeout(() => {
                clearInterval(timer);
                modal.destroy();
            }, secondsToGo * 1000);
        }, 1000)
    }

    render() {
        return (
            <Drawer
                title="Create Tender"
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
                        <Button onClick={() => this.success()} style={{ marginRight: 8 }}>
                            {this.state.submitting ? <>Publishing <Spin indicator={this._renderLoadingSpinner()}/></> : <>Publish Tender</>}
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload tender files</p>
                                <p className="ant-upload-hint">
                                    Strictly prohibit from uploading company data or other
                                    bad files
                                </p>
                            </Dragger>
                        </Col>
                    </Row>
                    <Divider orientation="left" style={{ fontWeight: 600 }}>Tender Criteria</Divider>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="owner"
                                label="Quality"
                            >
                                <Input placeholder="Tender Quantity" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                label="Cost"
                            >
                                <Input placeholder="Quantity" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="approver"
                                label="Capital"
                            >
                                <Input placeholder="Operating Capital" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        );
    }
}

export default CreateTender;