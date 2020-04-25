import React from "react"
import {useHistory} from "react-router-dom";
import {useObserver} from "mobx-react"
import {Layout, Menu} from "antd"

import useStore from "../../../stores"

const {Sider} = Layout
const {SubMenu} = Menu;

const SiderMenu = () => {
    const history = useHistory()
    const {globalStore} = useStore()

    const linkTo = (param) => {
        param && history.push(param)
    }

    const renderMenu = (data) => {
        return data.map((i) => {
            if (i.children.length > 0) {
                return <SubMenu key={i.id} title={i.name}>
                    {renderMenu(i.children)}
                </SubMenu>
            }
            return <Menu.Item key={i.id} title={i.name} onClick={() => linkTo(i.url)}>{i.name}</Menu.Item>
        })
    }

    return useObserver(() => (
        <Sider trigger={null} collapsible collapsed={globalStore.collapsed}>
            <div className="layout-logo"/>
            <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={globalStore.defaultOpenKeys}
                defaultSelectedKeys={globalStore.defaultSelectedKeys}
            >
                {
                    renderMenu(globalStore.menu)
                }
            </Menu>
        </Sider>
    ))
}

export default SiderMenu