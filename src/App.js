import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Icon from "./images/beard-fohawk.ico";
import { brandIcon } from "./pages/Styles.module.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav-wrapper lime lighten-5">
          <Link to="/">
            <img src={Icon} className={brandIcon} alt="Beard Fohawk Icon" />
            <span className="brand-logo black-text">Vega</span>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/" className="black-text">
                About Vega
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="black-text">
                💼From Vega
              </Link>
            </li>
            <li>
              <Link to="/posts" className="black-text">
                🧠From Vega
              </Link>
            </li>
            <li>
              <Link to="/contact" className="black-text">
                Contact Vega
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
