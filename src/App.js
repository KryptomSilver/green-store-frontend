import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
