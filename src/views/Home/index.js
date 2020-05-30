import React from "react"
import RouterView from "../../components/RouterView"
import BasicLayout from "../../components/Layout/BasicLayout"

const Home = (props) => {
    return (
        <BasicLayout>
            <RouterView routes={props.routes}/>
        </BasicLayout>
    )
}

export default Home