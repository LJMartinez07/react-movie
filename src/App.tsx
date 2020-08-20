import React from 'react';
import RouterView from './router/router-view';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routerMap from "./router/config";

function RouteList(props: any){
    const routers  = props.routers;
    const route = routers.map((route: any)=>
    <Route path={route.path} component={route.component} />
    );

}

function App() {
    return (
        <React.StrictMode>
            <div className="app">
                <BrowserRouter>
                <Switch>
                    <RouteList routers={routerMap} />
                </Switch>
                
                </BrowserRouter>
                
                {/* <RouterView /> */}
            </div>
        </React.StrictMode>
    );
}

export default App;
