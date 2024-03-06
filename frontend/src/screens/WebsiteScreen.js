import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import { WebsiteScreenComponent } from "../components/websiteScreenComponent/WebsiteScreenComponent";
import MessageBox from "../components/boxes/MessageBox";
import LoadingBox from "../components/boxes/LoadingBox";
function WebsiteScreen(props) {
  const [webs, setWebs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/webs");
        setLoading(false);
        setWebs(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  },[]
  );
  return (
    <>
      <Header />
      {/*    <!-- APP SCREEN --> */}
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>My Websites</h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container blogcontainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row">
            {webs.map((website) => (
              <WebsiteScreenComponent
                key={website._id}
                website={website}
              ></WebsiteScreenComponent>
            ))}
          </div>
        )}
      </div>
      {/*     <!-- APP SCREEN END --> */}
    </>
  );
}

export default WebsiteScreen;
