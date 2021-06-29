import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/:postType" exact component={Home} />
          <Route path="/post/:id" exact component={Post} />

          <Route path="/user/:username" exact component={User} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
