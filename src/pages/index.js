import Helmet from "react-helmet";
import React from "react";

import DesignSystemNavigation from "../components/DesignSystemNavigation";
import Lede from "../components/Lede";
import Title from "../components/Title";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Design System`}</title>
    </Helmet>
    <Title>{`Design System`}</Title>
    <Lede>{`Designing and developing digital products for Barnardo's.`}</Lede>
    <div className="Pages-designSystemNavigation">
      <DesignSystemNavigation
        items={[
          {
            text: "Getting started",
            to: "/getting-started/"
          },
          {
            text: "Principles",
            to: "/principles/"
          },
          {
            text: "Guidance",
            to: "/guidance/"
          }
        ]}
      />
    </div>
  </div>
);

export default Pages;
