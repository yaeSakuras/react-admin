import React from "react"
import {Layout} from "antd"
import SiderMenu from "../SiderMenu"
import GlobalHeader from "../GlobalHeader"
import GlobalBreadcrumb from "../GlobalBreadcrumb"
import GlobalFooter from "../GlobalFooter"

const {Content} = Layout

const BasicLayout = props => {
    const {children} = props

    return (
        <Layout>
            <SiderMenu/>
            <Layout>
                <GlobalHeader/>
                <GlobalBreadcrumb/>
                <Content>{children}</Content>
                <GlobalFooter/>
            </Layout>
        </Layout>
    )
}

export default BasicLayout