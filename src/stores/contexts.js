import React from "react"
import GlobalStore from "./global"
import UserStore from "./user"

const storesContext = React.createContext({
    globalStore:new GlobalStore(),
    userStore:new UserStore()
})

export default storesContext