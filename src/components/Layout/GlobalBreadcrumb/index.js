import React from "react"
import {useObserver} from "mobx-react"
import {Breadcrumb} from "antd"
import useStore from "../../../stores"

const GlobalBreadcrumb = () => {
    const {globalStore} = useStore()

    return useObserver(() => (
        <Breadcrumb>
            {
                globalStore.breadcrumbs.map((name, index) => (
                    <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    ))
}

export default GlobalBreadcrumb