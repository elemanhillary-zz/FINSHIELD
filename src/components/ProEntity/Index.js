import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Table, Tag, Space, Tabs, Card, Button } from 'antd'
import SupplierDetails from '../Supplier/SupplierDetails';
import Tenders from '../Supplier/Tenders';

import { PlusOutlined } from "@ant-design/icons"
import CreateTender from './CreateTender';

const { Header, Footer, Content } = Layout
const { Column } = Table
const { TabPane } = Tabs

const data = [
    {
        key: '1',
        name: 'KURA',
        age: 'SCM-COO6-0908',
        address: '000500 THIKA',
        tags: ['65%'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '2',
        name: 'KEMS',
        age: 'SCM-C009-0367',
        address: '00100 NAIROBI',
        tags: ['80%'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '3',
        name: 'KNH',
        age: 'SCM-COO7-0678',
        address: '0300 NAIROBI',
        tags: ['90%'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '3',
        name: 'KQ',
        age: 'SCM-C009-0567',
        address: '095 EMBAKASI',
        tags: ['50%'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
];

const tenders = [
    {
        number: 'CGK/FEP/001/2021/2022',
        description: 'TENDER FOR THE DEVELOPMENT OF AN INTEGRATED REVENUE MANAGEMENT SYSTEM FOR THE COUNTY GOVERNMENT OF KIAMBU.',
        key: '1',
        cat: "Consultancy Service",
        pe: "Gov. Of Kenya",
        meth: "Open Tender",
        close: "06/08/2021",
        open: "22/07/2021"
    }
]

class ProEntityDashboard extends Component {

    state = {
        viewDetails: false
    }

    viewDetails = value => {
        this.setState({
            viewDetails: value
        })
    }

    _renderColums = _ => {
        return [
            {
                title: 'Company Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Reg. No',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'KRA PIN',
                dataIndex: 'kraPin',
                key: 'kraPin',
            },
            {
                title: 'Registration Date',
                dataIndex: 'regDate',
                key: 'regDate',
            },
            {
                title: 'Type',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Eligibility',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag === "65%" ? '#fa8c16' : '#237804';
                            if (tag === '50%') {
                                color = '#cf1322';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={() => this.viewDetails(true)}>View Details</a>
                    </Space>
                ),
            },
        ]
    }

    _renderTenders = _ => {
        return [
            {
                title: 'Tender Number',
                dataIndex: 'number',
                key: 'number',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'PE',
                dataIndex: 'pe',
                key: 'pe',
            },
            {
                title: 'Category',
                dataIndex: 'cat',
                key: 'cat',
            },
            {
                title: 'Method',
                dataIndex: 'meth',
                key: 'meth',
            },
            {
                title: 'Closing Date',
                dataIndex: 'close',
                key: 'close',
            },
            {
                title: 'Published Date',
                dataIndex: 'open',
                key: 'open',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={() => this.viewDetails(true)}>View Details</a>
                    </Space>
                ),
            },
        ]
    }

    render() {
        return (
            <Tabs tabBarExtraContent={<Button type="primary" onClick={() =>  this.viewDetails(true)}>Publish Tender<PlusOutlined /></Button>}>
                <TabPane tab="My Tenders" key="tenders">
                    <Table dataSource={tenders} columns={this._renderTenders()} />
                    <CreateTender {...this.props} tender={true} isVisible={this.state.viewDetails} openModal={this.viewDetails} />
                </TabPane>
                <TabPane tab="Suppliers" key="suppliers">
                    <Table dataSource={data} columns={this._renderColums()} />
                    <SupplierDetails tender={true} isVisible={this.state.viewDetails} openModal={this.viewDetails} />
                </TabPane>
            </Tabs>
        );
    }
}

export default ProEntityDashboard;