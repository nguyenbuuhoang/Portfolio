import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/header"
function AppScreen(props) {
  return (
    <>
    <Header></Header>
      {/*<!-- APP SCREEN --> */}
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Recent Mobile Apps</h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container blogcontainer">
        <div className="row">
          <div className="blogBox col-lg-4 col-md-6 col-sm-6">
            <div className="blogBox_pic">
              <img src="../assets/images/portifolio/pot4.png" alt="" />
              <div className="blogLebal">
                <a href="">Project Details</a>
              </div>
            </div>
            <div className="blog_text">
              <ul>
                <li>
                  <i className="far fa-calendar"></i> 12 May 2021
                </li>
              </ul>
              <h5>
                <a href="">Sell & Bull App</a>
              </h5>
              <p>
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between...
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- APP SCREEN END --> */}
    </>
  );
}

export default AppScreen;
