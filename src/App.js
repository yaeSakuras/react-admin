import React, {Suspense} from "react"
import {HashRouter, Switch} from "react-router-dom"
import RouterView from "./components/RouterView"
import RouterLoading from "./components/RouterLoading"
import routerConfig from "./routerConfig"
import "./requestConfig"
import "./App.css"

function App() {

    return (
        <HashRouter>
            <Suspense fallback={<RouterLoading/>}>
                <Switch>
                    <RouterView routes={routerConfig}/>
                </Switch>
            </Suspense>
        </HashRouter>
    );
}

export default App;
