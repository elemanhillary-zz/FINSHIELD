import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Table, Tag, Space, Tabs } from 'antd'
import SupplierDetails from './SupplierDetails';
import Tenders from './Tenders';

const { Header, Footer, Content } = Layout
const { Column } = Table
const { TabPane } = Tabs

const data = [
    {
        key: '1',
        name: 'TWIGA-001',
        age: 'SCM-COO6-0908',
        address: '000500 THIKA',
        tags: ['Pharma'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '2',
        name: 'TWIGA-002',
        age: 'SCM-C009-0367',
        address: '00100 NAIROBI',
        tags: ['BEVERAGES'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '3',
        name: 'TWIGA-004',
        age: 'SCM-COO7-0678',
        address: '0300 NAIROBI',
        tags: ['E-Commerce', 'Manufacturing'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '3',
        name: 'TWIGA-008',
        age: 'SCM-C009-0567',
        address: '095 EMBAKASI',
        tags: ['Internet Services', 'Diary'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
];

const dataPROENT = [
    {
        key: '1',
        name: 'KURA',
        age: 'SCM-COO6-0908',
        address: '000500 THIKA',
        tags: ['Pharma'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '2',
        name: 'KEMS',
        age: 'SCM-C009-0367',
        address: '00100 NAIROBI',
        tags: ['Pharma'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '3',
        name: 'KNH',
        age: 'SCM-COO7-0678',
        address: '0300 NAIROBI',
        tags: ['Pharma'],
        kraPin: "KR37378",
        regDate: "23-10-2021"
    },
    {
        key: '3',
        name: 'KQ',
        age: 'SCM-C009-0567',
        address: '095 EMBAKASI',
        tags: ['Pharma'],
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

class SupplierDashboard extends Component {

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
                dataIndex: 'address',
                key: 'regDate',
            },
            {
                title: 'Type',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Industry',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'E-Commerce') {
                                color = 'volcano';
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
            <Tabs>
                <TabPane tab="Tenders" key="tenders">
                    <Table dataSource={tenders} columns={this._renderTenders()} />
                    <Tenders {...this.props} tender={true} isVisible={this.state.viewDetails} openModal={this.viewDetails} />
                </TabPane>
                <TabPane tab="Procuring Entities" key="pe">
                    <Table dataSource={dataPROENT} columns={this._renderColums()} />
                    <SupplierDetails tender={true} isVisible={this.state.viewDetails} openModal={this.viewDetails} />
                </TabPane>
                <TabPane tab="Suppliers" key="suppliers">
                    <Table dataSource={data} columns={this._renderColums()} />
                    <SupplierDetails tender={true} isVisible={this.state.viewDetails} openModal={this.viewDetails} />
                </TabPane>
            </Tabs>
        );
    }
}

export default SupplierDashboard;