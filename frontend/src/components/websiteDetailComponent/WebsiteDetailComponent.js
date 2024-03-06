import React from "react";

export const WebsiteDetails = (props) => {
  const { website } = props;
  return (
    <>
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
};
