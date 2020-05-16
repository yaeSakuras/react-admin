import React from "react"

const Home = React.lazy(() => import("./views/Home"))
const BasicForm = React.lazy(() => import("./views/BasicForm"))
const StepForm = React.lazy(() => import("./views/StepForm"))
const BasicList = React.lazy(() => import("./views/BasicList"))
const TableList = React.lazy(() => import("./views/TableList"))
const BasicDetail = React.lazy(() => import("./views/BasicDetail"))
const UserCenter = React.lazy(() => import("./views/UserCenter"))
const UserSetting = React.lazy(() => import("./views/UserSetting"))
const Login = React.lazy(() => import("./views/Login"))

export default [
    {
        path: '/',
        to: '/home'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
        routes: [{
            path: '/home/basic-form',
            component: BasicForm,
        },{
            path: '/home/step-form',
            component: StepForm,
        },{
            path: '/home/basic-list',
            component: BasicList,
        },{
            path: '/home/table-list',
            component: TableList,
        },{
            path: '/home/basic-detail',
            component: BasicDetail,
        },{
            path: '/home/user-center',
            component: UserCenter,
        },{
            path: '/home/user-setting',
            component: UserSetting,
        }]
    },
];