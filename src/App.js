import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import User from "./pages/User";
import New from "./pages/New";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/post/:id" exact component={Post} />
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
          <Route path="/show" exact component={Show} />
          <Route path="/ask" exact component={Ask} />
          <Route path="/user/:username" exact component={User} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
