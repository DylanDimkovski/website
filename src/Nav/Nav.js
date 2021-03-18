import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav id="nav">
        <Link to="/" className="icon solid fa-home">
          <span>Home</span>
        </Link>
        <Link to="/work" className="icon solid fa-folder">
          <span>Work</span>
        </Link>
        <Link to="/contact" className="icon solid fa-envelope">
          <span>Contact</span>
        </Link>
        <a href="https://github.com/DylanDimkovski" className="icon brands fa-github">
          <span>Github</span>
        </a>
        <a href="https://cdn.pixabay.com/photo/2014/05/20/21/25/bird-349035_960_720.jpg" style={{display:"none"}}>
          <span>My hen</span>
        </a>
      </nav>
    );
  }
}

export default Nav;
