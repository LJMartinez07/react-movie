import React from 'react';
import ReactDOM from 'react-dom';
import RouterView from './router/router-view';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render((
    <div className="app">
                <RouterView />
            </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
