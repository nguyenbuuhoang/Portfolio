import React from "react";
import Header from "../components/header/header";
import WebsiteData from "../data/WebsiteData";
import { WebsiteDetails } from "../components/websiteDetailComponent/WebsiteDetailComponent";
function WebsiteDetail(props) {
  return (
    <>
      <Header />
      {/*    <!-- APP SCREEN --> */}
      {WebsiteData.websites.map((website) => (
        <WebsiteDetails key={website.id} website={website} />
      ))}
      {/*     <!-- APP SCREEN END --> */}
    </>
  );
}

export default WebsiteDetail;
