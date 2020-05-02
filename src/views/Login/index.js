import React from "react"
import {useObserver} from "mobx-react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockTwoTone } from "@ant-design/icons"
import "./index.less"

const Login = ()=> {

    const onFinish = values => {
        console.log(values)
    }

    return useObserver(() => (
        <div className="layout-login-container">
            <h2 className="login-title">Admin</h2>
            <Form className="login-form" onFinish={onFinish} size="large">
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input prefix={<UserOutlined style={{ color:"#1890ff" }}/>} placeholder="用户名" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input prefix={<LockTwoTone />} type="password" placeholder="密码"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit-button">登录</Button>
                </Form.Item>
            </Form>
        </div>
    ))
}

export default Login