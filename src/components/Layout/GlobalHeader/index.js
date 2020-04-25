import React from "react"
import {Layout} from "antd"
import LeftHeader from "./LeftHeader"
import RightHeader from "./RightHeader"
import "./index.less"

const {Header} = Layout

const GlobalHeader = () => {
    return (
        <Header className="layout-header">
            <LeftHeader/>
            <RightHeader/>
        </Header>
    )
}

export default GlobalHeader