import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
