import React from "react"
import {useObserver} from "mobx-react"
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons"
import useStore from "../../../stores"

const LeftHeader = () => {
    const {globalStore} = useStore()

    const toggle = () => {
        globalStore.toggle()
    }

    return useObserver(() => (
        <div className="left-header">
            {
                React.createElement(globalStore.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })
            }
        </div>
    ))
}

export default LeftHeader