import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Statistics from "./views/Statistics";
import Sales from './views/Sales';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/statistics" component={Statistics} />
                <Route exact path="/sales" component={Sales} />
                <Route exact path="/" component={Home} />
                <Route  path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
