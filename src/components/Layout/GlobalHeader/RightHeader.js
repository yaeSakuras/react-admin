import React from "react"
import {Dropdown, Menu} from "antd"
import {UserOutlined, SettingOutlined, LogoutOutlined} from "@ant-design/icons"

const RightHeader = () => {

    const menu = (
        <Menu>
            <Menu.Item key="center"><UserOutlined/>个人中心</Menu.Item>
            <Menu.Item key="settings"><SettingOutlined/>个人设置</Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="logout"><LogoutOutlined/>退出登录</Menu.Item>
        </Menu>
    );

    return (
        <div className="right-header">
            <Dropdown trigger="click" overlay={menu}>
                <div className="avator">
                    <span className="name">Zhou</span>
                </div>
            </Dropdown>
        </div>
    )
}

export default RightHeader