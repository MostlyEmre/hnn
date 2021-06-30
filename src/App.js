import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [currentPageType, setCurrentPageType] = useState("frontpage");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.getItem("favorites" === null) ? localStorage.setItem("favorites", JSON.stringify([])) : setFavorites(JSON.parse(localStorage.getItem("favorites")));
    // localStorage.getItem("favorites" === null) ? localStorage.setItem("favorites", []) : setFavorites(localStorage.getItem("favorites"));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentPageType]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                favorites={favorites}
                setFavorites={setFavorites}
                currentPageType={currentPageType}
                setCurrentPageType={setCurrentPageType}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route
            path="/:category"
            exact
            render={(props) => (
              <Home
                {...props}
                favorites={favorites}
                setFavorites={setFavorites}
                currentPageType={currentPageType}
                setCurrentPageType={setCurrentPageType}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/user/:username" exact render={(props) => <User {...props} favorites={favorites} setFavorites={setFavorites} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
