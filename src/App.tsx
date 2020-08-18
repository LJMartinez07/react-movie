import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/';
import Movies from './pages/movies/'
function App() {
    return (
        <Router>
            <Switch>
                <Route exact  path="/" render={() => <Home/>} />
                <Route path="/movies" render={() => <Movies/>} />
            </Switch>
        </Router>
    );
}

export default App;
