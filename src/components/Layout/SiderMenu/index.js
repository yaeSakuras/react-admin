import React, {useEffect} from "react"
import {useHistory, useLocation} from "react-router"
import {useObserver} from "mobx-react"
import {Layout, Menu} from "antd"

import useStore from "../../../stores"

const {Sider} = Layout
const {SubMenu} = Menu

const SiderMenu = () => {
    const location = useLocation()
    const history = useHistory()
    const {globalStore} = useStore()
    const {pathname} = location
    useEffect(()=> {
        globalStore.getMenus().then(() => globalStore.initMenuKeys(pathname))
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const routerChange = (param) => {
        if (param) {
            history.push(param)
            globalStore.routerChange(param)
        }
    }

    const onSelectedChange = (item)=> {
        const {key} = item
        globalStore.onSelectedChange(key)
    }

    const onOpenChange = (openKeys)=> {
        globalStore.onOpenChange(openKeys)
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
            {globalStore.openKeys}
            <div className="layout-logo"/>
            <Menu
                onClick={onSelectedChange}
                onOpenChange={onOpenChange}
                theme="dark"
                mode="inline"
                openKeys={globalStore.openKeys}
                selectedKeys={globalStore.selectedKeys}
            >
                {
                    renderMenu(globalStore.menu)
                }
            </Menu>
        </Sider>
    ))
}

export default SiderMenu