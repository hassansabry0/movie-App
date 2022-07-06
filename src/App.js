import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/movie-details/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
