import React from "react";

export const WebsiteScreenComponent = (props) => {
  const { website } = props;
  return (
    <>
      <div className="blogBox col-lg-4 col-md-6 col-sm-6">
        <div className="blogBox_pic">
          <img src={website.image} alt={website.name} />
          <div className="blogLebal">
          <a href={`/websites/${website._id}`}>Project Details</a>
          </div>
        </div>
        <div className="blog_text">
          <ul>
            <li>
              <i className="far fa-calendar"></i>{/*  12 May 2021 */}
            </li>
          </ul>
          <h5>
            <a href={website.projectLink}>{website.name}</a>
          </h5>
          <p> {website.description}</p>
        </div>
      </div>
    </>
  );
};
