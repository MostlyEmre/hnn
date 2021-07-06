import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { paywallSites } from "./paywall";
// import pages
import Post from "./pages/Post";
import Home from "./pages/Home";
import User from "./pages/User";
import New from "./pages/New";
import Ask from "./pages/Ask";
import Show from "./pages/Show";
import Frontpage from "./pages/Frontpage";
import Favorites from "./pages/Favorites";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.getItem("favorites") === null ? localStorage.setItem("favorites", JSON.stringify(favorites)) : setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* Core Pages */}
          <Route path="/" exact render={(props) => <Home {...props} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/new" exact render={(props) => <New {...props} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/show" exact render={(props) => <Show {...props} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/ask" exact render={(props) => <Ask {...props} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/favorites" exact render={(props) => <Favorites {...props} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/frontpage" exact render={(props) => <Frontpage {...props} favorites={favorites} setFavorites={setFavorites} />} />

          {/* Parameter Pages */}
          <Route path="/post/:id" exact component={Post} />
          <Route path="/user/:username" exact render={(props) => <User {...props} favorites={favorites} setFavorites={setFavorites} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
