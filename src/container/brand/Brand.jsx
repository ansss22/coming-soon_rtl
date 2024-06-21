import React from "react";
import "./brand.css";
import { atlassian, slack, shopify, dropbox, google } from "./imports";

const Brand = () => {
  return (
    <div className="mobile__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropboxm" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
