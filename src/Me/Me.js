import { Component } from "react";
import { Link } from "react-router-dom";

class Me extends Component {
  render() {
    return (
      <article id="home" className="panel intro">
        <header>
          <h1>Dylan Dimkovski</h1>
          <p>Software Engineer | Student</p>
        </header>
        <Link to="/work" className="jumplink pic">
          <span className="arrow icon solid fa-chevron-right">
            <span>See my work</span>
          </span>
          <img src="images/me.jpg" alt="" />
        </Link>
      </article>
    );
  }
}

export default Me
