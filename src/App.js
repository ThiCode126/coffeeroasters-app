import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Components/Header";


function App() {


  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          About
        </Route>
        <Route path="/plan">
          Plan
        </Route>
        <Route exact path="/">
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
