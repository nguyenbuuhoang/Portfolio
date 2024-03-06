import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import { useParams } from "react-router-dom";
import axios from "axios";

function WebsiteDetail() {
  const { id } = useParams();
  const [website, setWebsite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/webs/${id}`);
        setWebsite(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!website) {
    return <h5>Website Not Found</h5>;
  }

  return (
    <>
      <Header />
      <div className="banner">
        <div className="overlay">
          <div className="container">
            <h1>{website.name}</h1>
            <p>{website.description}</p>
            <button>
              <a href={website.projectLink}>Link Project</a>
            </button>
          </div>
        </div>
      </div>
      <div className="container blogcontainer">
        <div className="row">
          {website.imageTitle.map((item, index) => (
            <div key={index} className="blogBox col-lg-4 col-md-6 col-sm-6">
              <div className="blog_text">
                <h5>{item.title}</h5>
              </div>
              <div className="blogBox_pic">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WebsiteDetail;
