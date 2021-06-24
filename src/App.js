import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/post/:id" exact component={Post} />
          <Route path="/" exact component={Home} />
          <Route path="/user/:username" exact component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
