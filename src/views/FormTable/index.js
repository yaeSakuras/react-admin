import React from "react"
import {useFormTable} from "@umijs/hooks"
import {Button, Col, Form, Input, Row, Table} from "antd"
import useStore from "../../stores"

const FormTable = () => {
    const [form] = Form.useForm()
    const {userStore} = useStore()

    const {tableProps, search} = useFormTable(userStore.getTableData, {
        defaultPageSize: 10,
        form,
    });

    const {submit, reset } = search;

    const columns = [
        {
            title: 'name',
            dataIndex: 'last',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
        },
        {
            title: 'gender',
            dataIndex: 'gender',
        },
    ];

    const searchForm = (
        <div>
            <Form form={form}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="name" name="name">
                            <Input placeholder="name"/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="email" name="email">
                            <Input placeholder="email"/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="phone" name="phone">
                            <Input placeholder="phone"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button onClick={submit} type="primary">Search</Button>
                        <Button onClick={reset} style={{marginLeft: 16}}>Reset</Button>
                    </Form.Item>
                </Row>
            </Form>
        </div>
    )

    return (
        <div className="layout-formTable">
            {searchForm}
            <Table columns={columns} rowKey="email" {...tableProps} bordered scroll={{ y: 440 }}/>
        </div>
    )
}

export default FormTable