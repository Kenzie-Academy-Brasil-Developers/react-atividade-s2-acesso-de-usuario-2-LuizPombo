import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Company from "./pages/Company";
import { members } from "./components/users/users";
import Costumer from "./pages/Costumer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members} />
          </Route>
          <Route exact path="/costumer/:id">
            <Costumer />
          </Route>
          <Route exact path="/company/:id">
            <Company />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
