import React, {useEffect} from "react"
import {Spin} from "antd"
import useStore from "../../stores"
import {useLocation} from "react-router-dom"
import "./index.less"

function RouterLoading() {
    const {globalStore} = useStore()
    const location = useLocation()
    useEffect(() => {
        const {pathname} = location
        console.log(pathname)
        if(~pathname.indexOf("/home/")){
            globalStore.getMenus().then(() => globalStore.initMenuKeys(pathname))
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="layout-loading">
            <Spin size="large" />
        </div>
    )
}

export default RouterLoading