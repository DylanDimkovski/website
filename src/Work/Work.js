import { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div id="main">
        <article id="work" className="panel">
          <header>
            <h2>Projects</h2>
          </header>
          <p>
            A list of all projects both Professional and Education I have been
            apart of.
          </p>
          <p>SkillSet: C++, C#, Java, React FrameWork, Python</p>
          <section>
            <div className="row">
              <div className="col-4 col-6-medium col-12-small">
              <a href="https://github.com/DylanDimkovski/AzulGameUpdated" className="image fit">
                  <img src="images/Azul.png" alt="" />
                </a>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <a href="#" className="image fit">
                  <img src="images/base.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 col-6-medium col-12-small">
                <a href="#" className="image fit">
                  <img src="images/base.jpg" alt="" />
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default Work;
