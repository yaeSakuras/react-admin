import React from "react"
import storesContext from "./contexts"

const useStore = () => React.useContext(storesContext)

export default useStore