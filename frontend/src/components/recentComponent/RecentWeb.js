import React from "react";

export const RecentWeb = (props) => {
  const { website } = props;
  return (
    <>
      <div className="shop col-lg-3 col-md-4 col-sm-6">
        <div className="shopBack">
          <img src={website.image} alt={website.name} />
          <div className="shoplebal">
            <a href={`/websites/${website._id}`}>Read More</a>
          </div>
        </div>
        <div className="shoptext">
          <p>{website.name}</p>
          <h3>{website.description.substring(0, 30)}</h3>
        </div>
      </div>
    </>
  );
};
