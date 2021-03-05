import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Index from "./pages/Index";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Index} />
        <Route exact path={"/settings"} component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
