import React from 'react';
import ReactDOM from 'react-dom';
import Main from './layouts/main';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home';
ReactDOM.render(
    <React.StrictMode>
        <Main>
            <Home></Home>
        </Main>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
