import React, {useEffect} from "react"
import useStore from "../../stores"
import {useLocation} from "react-router-dom"

function RouterLoading() {
    const {globalStore} = useStore()
    const location = useLocation()
    useEffect(() => {
        const {pathname} = location
        if(~pathname.indexOf("home")){
            globalStore.initMenuKeys(pathname)
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>loading...</div>
    )
}

export default RouterLoading;