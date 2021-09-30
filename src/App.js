import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import EducatorResources from "./pages/EducatorResources";
import FAQ from "./pages/FAQ";
import ParentResources from "./pages/ParentResources";
// import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Home Page */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* About Me Page */}
      <Route exact path="/aboutme">
        <AboutMe />
      </Route>

      {/* Parent Resources Page */}
      <Route exact path="/parentresources">
        <ParentResources />
      </Route>

      {/* Educator Resources Page */}
      <Route exact path="/educatorresources">
        <EducatorResources />
      </Route>

      {/* Educator Resources Page */}
      <Route exact path="/faq">
        <FAQ />
      </Route>
    </Router>
  );
}

export default App;
