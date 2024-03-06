import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import WebsiteData from "../data/WebsiteData";
import { WebsiteScreenComponent } from "../components/websiteScreenComponent/WebsiteScreenComponent";
function WebsiteScreen(props) {
  return (
    <>
      <Header />
      {/*    <!-- APP SCREEN --> */}
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Recent Websites</h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container blogcontainer">
        <div className="row">
          {WebsiteData.websites.map((website) => (
            <WebsiteScreenComponent
              key={website.id}
              website={website}
            ></WebsiteScreenComponent>
          ))}
        </div>
      </div>
      {/*     <!-- APP SCREEN END --> */}
    </>
  );
}

export default WebsiteScreen;
