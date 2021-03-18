import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from "./Main/Main.js";
import Work from "./Work/Work.js";
import Contact from "./Contact/Contact.js";
import Nav from "./Nav/Nav.js";
import Footer from "./Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <div className="is-preload">
              <div id="wrapper">
                <TransitionGroup>
                <Nav />
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/work">
                  <Work />
                </Route>
                <Route exact path="/Contact">
                  <Contact />
                </Route>
                <Footer />
                </TransitionGroup>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
