import React from 'react';
import RouterView from './router/router-view';
function routerBeforeEnterHook(path: string) {

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

}
function App() {
    return (
        <React.StrictMode>
            <div className="app">
                <RouterView beforeEnter={routerBeforeEnterHook} />
            </div>
        </React.StrictMode>
    );
}

export default App;
