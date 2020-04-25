import React from "react"

const Home = React.lazy(() => import("./views/Home"))
const Login = React.lazy(() => import("./views/Login"))
const User = React.lazy(() => import("./views/User"))

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
        }]
    },
    {
        path: '/login',
        component: Login,
    },
];