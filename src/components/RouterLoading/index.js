import React from "react"
import {Spin} from "antd"
import "./index.less"

function RouterLoading() {
    return (
        <div className="layout-loading">
            <Spin size="large" />
        </div>
    )
}

export default RouterLoading