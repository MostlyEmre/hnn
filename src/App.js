import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import pages and components
import Post from "./pages/Post";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/:postType" exact component={Home} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/user/:username" exact render={(props) => <User {...props} favorites={favorites} setFavorites={setFavorites} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
