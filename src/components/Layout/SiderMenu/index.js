import React, {useEffect} from "react"
import {useHistory, useLocation} from "react-router"
import {useObserver} from "mobx-react"
import {Layout, Menu} from "antd"

import useStore from "../../../stores"

const {Sider} = Layout
const {SubMenu} = Menu;

const SiderMenu = () => {
    const location = useLocation()
    const history = useHistory()
    const {globalStore} = useStore()

    useEffect(()=> {
        console.log(location)
    },[location])

    const routerChange = (param) => {
        if (param) {
            history.push(param)
            globalStore.routerChange(param)
        }
    }

    const renderMenu = (data) => {
        return data.map((i) => {
            if (i.children.length > 0) {
                return <SubMenu key={i.id} title={i.name}>
                    {renderMenu(i.children)}
                </SubMenu>
            }
            return <Menu.Item key={i.id} title={i.name} onClick={() => routerChange(i.url)}>{i.name}</Menu.Item>
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