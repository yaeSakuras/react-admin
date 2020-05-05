import React from "react"
import {Table} from "antd"

const User =()=> {
    const dataSource = [
        {
            key: '1',
            name: {
                last:"gggg"
            },
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: {
                last:"zzh"
            },
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name.last',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div>
            user
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default User