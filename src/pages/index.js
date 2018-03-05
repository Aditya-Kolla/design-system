import React from "react";

import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

import "./index.css";

const Pages = () => (
  <div>
    <Title>{`Design system`}</Title>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Helping digital teams efficiently create a consistent experience for service users, including children and young people.`}</Paragraph>
    </div>
    <div className="Pages-navigation">
      <Navigation />
    </div>
  </div>
);

export default Pages;
