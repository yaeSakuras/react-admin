import React from "react"
import {useObserver} from "mobx-react"
import {Layout} from "antd"
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons"
import useStore from "../../../stores"

const {Header} = Layout

const GlobalHeader = () => {
    const {globalStore} = useStore()

    const toggle = () => {
        globalStore.toggle()
    }

    return useObserver(()=> (
        <Header>
            {
                React.createElement(globalStore.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })
            }
        </Header>
    ))
}

export default GlobalHeader