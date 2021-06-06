import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route  path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
