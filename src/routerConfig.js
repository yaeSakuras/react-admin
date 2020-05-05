import React from "react"

const Home = React.lazy(() => import("./views/Home"))
const Login = React.lazy(() => import("./views/Login"))
const User = React.lazy(() => import("./views/User"))
const FormTable = React.lazy(() => import("./views/FormTable"))

export default [
    {
        path: '/',
        to: '/home'
    },
    {
        path: '/home',
        component: Home,
        routes: [{
            path: '/home/user',
            component: User,
        },{
            path: '/home/formTable',
            component: FormTable,
        }]
    },
    {
        path: '/login',
        component: Login,
    },
];