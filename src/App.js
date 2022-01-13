import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WhatClientsSay from "./pages/WhatClientsSay";
import Home from "./pages/Home";
import About from "./pages/About";
import EducatorResources from "./pages/EducatorResources";
import FAQ from "./pages/FAQ";
import ParentResources from "./pages/ParentResources";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import { ApolloClient, ApolloProvider } from "@apollo/client";
// import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          {/* Define routes to render different page components at different paths */}
          <Route exact path="/" component={Home} />
          {/* Define a route that will take in variable data */}
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/educatorresources"
            component={EducatorResources}
          />
          {/* this is where i name the path to my pages */}
          <Route exact path="/parentresources" component={ParentResources} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/testimonies" component={WhatClientsSay} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
