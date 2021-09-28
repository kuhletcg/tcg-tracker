import "./App.css";
import Nav from "./components/Navbar";
import HomePage from "./components/HomePage";
import Tweet from "./components/Tweet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tweets" exact component={Tweet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
