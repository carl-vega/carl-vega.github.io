import React from "react";
import BasicImg from "../images/basic.jpg";
import BootstrapImg from "../images/bootstrap.jpg";
// import FightImg from "../images/fight.jpg";
import GifImg from "../images/gif.jpg";
// import MySQLImg from "../images/mysql.jpg";
// import NodeImg from "../images/node.jpg";
import ResponsiveImg from "../images/responsive.jpg";
import RochambeauImg from "../images/rochambeau.jpg";
import TriviaImg from "../images/trivia.jpg";
// import WordImg from "../images/word.jpg";
import { pinnedProject } from "./Styles.module.css";

export default function Portfolio() {
  const rowPinnedProject = `row col ${pinnedProject}`;
  return (
    <>
      <main className="container">
        {/* <!-- Featured projects cards --> */}
        <div className="row">
          <div className="col s12">
            {/* <!-- Featured projects header --> */}
            <h4>Featured Projects</h4>
            <hr />
          </div>
          <div className={rowPinnedProject}>
            <div className="card hoverable sticky-action col s12">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={BasicImg} alt="" />
              </div>
              <div className="card-content row">
                <span className="card-title activator col s12 grey-text text-darken-4">
                  HTML and CSS Portfolio
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  HTML and CSS Portfolio
                  <i className="material-icons right">close</i>
                </span>
                <p>A simple portfolio that uses only HTML and CSS.</p>
                <p className="col s12">
                  <a href="https://github.com/carl-vega/carl-vega.github.io/">
                    <i className="material-icons right">code</i>
                  </a>
                  <a href="https://carl-vega.github.io">
                    <i className="material-icons right">launch</i>
                  </a>
                </p>
              </div>
            </div>
            <div className="card hoverable sticky-action col s12">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={RochambeauImg}
                  id="feat-2"
                  alt=""
                />
              </div>
              <div className="card-content row">
                <span className="card-title activator truncate col s12 grey-text text-darken-4">
                  Rock,Paper,Scissors,Spock,Lizard
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Rock,Paper,Scissors,
                  <br />
                  Spock,Lizard<i className="material-icons right">close</i>
                </span>
                <p>
                  A two person only game of Rock,Paper,Scissors,Spock,Lizard
                  with a one to one chat system.
                </p>
                <p className="col s12">
                  <a href="https://github.com/carl-vega/Spock-Rock-Paper-Scissors-Lizard/">
                    <i className="material-icons right">code</i>
                  </a>
                  <a href="https://carl-vega.github.io/Spock-Rock-Paper-Scissors-Lizard/">
                    <i className="material-icons right">launch</i>
                  </a>
                </p>
              </div>
            </div>
            <div className="card hoverable sticky-action col s12">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={ResponsiveImg}
                  id="feat-3"
                  alt=""
                />
              </div>
              <div className="card-content row">
                <span className="card-title activator col s12 grey-text text-darken-4">
                  Scrape of WIRED
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Scape of WIRED<i className="material-icons right">close</i>
                </span>
                <p>A scaper that uses MongoDB to store Wired article links.</p>
                <p className="col s12">
                  <a href="https://github.com/carl-vega/mongo-scaper-wired/">
                    <i className="material-icons right">code</i>
                  </a>
                  <a href="https://carl-vega.github.io/mongo-scaper-wired/">
                    <i className="material-icons right">launch</i>
                  </a>
                </p>
              </div>
            </div>
            <div className="card hoverable sticky-action col s12">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={GifImg} id="feat-4" alt="" />
              </div>
              <div className="card-content row">
                <span className="card-title activator col s12 grey-text text-darken-4">
                  Gifaholic
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Gifaholic<i className="material-icons right">close</i>
                </span>
                <p>A basic webapp to pull in a search query of Giphy</p>
                <p className="col s12">
                  <a href="https://github.com/carl-vega/Gifaholic/">
                    <i className="material-icons right">code</i>
                  </a>
                  <a href="https://carl-vega.github.io/Gifaholic/">
                    <i className="material-icons right">launch</i>
                  </a>
                </p>
              </div>
            </div>
            <div className="card hoverable sticky-action col s12">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TriviaImg} id="feat-5" alt="" />
              </div>
              <div className="card-content row">
                <span className="card-title activator col s12 grey-text text-darken-4">
                  Trivia Game
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Trivia Game<i className="material-icons right">close</i>
                </span>
                <p>
                  A simple trivia game working with an API to pull in questions.
                </p>
                <p className="col s12">
                  <a href="https://github.com/carl-vega/TriviaGame">
                    <i className="material-icons right">code</i>
                  </a>
                  <a href="https://carl-vega.github.io/TriviaGame/">
                    <i className="material-icons right">launch</i>
                  </a>
                </p>
              </div>
            </div>
            <div className="card hoverable sticky-action col s12">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={BootstrapImg}
                  id="feat-6"
                  alt=""
                />
              </div>
              <div className="card-content row">
                <span className="card-title activator col s12 grey-text text-darken-4">
                  Word Guess Game
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Word Guess Game<i className="material-icons right">close</i>
                </span>
                <p>A simple word guess game of 250 movie titles array.</p>
                <p className="col s12">
                  <a href="https://github.com/carl-vega/Word-Guess-Game">
                    <i className="material-icons right">code</i>
                  </a>
                  <a href="https://carl-vega.github.io/Word-Guess-Game/">
                    <i className="material-icons right">launch</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Secondary projects cards --> */}
        <div className="row" id="other-projects">
          <div className="col s12">
            {/* <!-- Secondary projects header --> */}
            <h4>Secondary Projects</h4>
            <hr />
          </div>
          <div className="col s12">
            <h5>
              10% Progress...more coming soon
              <div className="progress">
                <div className="determinate" style={{ width: "10%" }}></div>
              </div>
            </h5>
            <hr />
          </div>
        </div>
      </main>
    </>
  );
}
