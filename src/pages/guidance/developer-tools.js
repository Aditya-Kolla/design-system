import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import DesignSystemIndex from "../../components/DesignSystemIndex";
import Title from "../../components/Title";
import BulletedList from "../../components/BulletedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Developer tools`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Guidance",
          to: "/guidance/"
        }
      ]}
    />
    <Title>{`Developer tools`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Code quality",
          to: "/guidance/developer-tools/#code-quality"
        },
        {
          level: 1,
          text: "Future-proofing code",
          to: "/guidance/developer-tools/#futureproofing-code"
        }
      ]}
    />
    <Paragraph>{`When developing your product you should maintain code quality and future-proof your code.`}</Paragraph>
    <Heading>{`Code quality`}</Heading>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`format your code with `}
        <Link href="https://prettier.io/">{`Prettier`}</Link>
        {` (default settings)`}
      </ListItem>
      <ListItem>
        {`lint your JavaScript with `}
        <Link href="https://eslint.org/">{`ESLint`}</Link>
        {` (recommended config)`}
      </ListItem>
      <ListItem>
        {`lint your CSS with `}
        <Link href="https://stylelint.io/">{`stylelint`}</Link>
        {` (`}
        <Link href="https://github.com/barnardos/stylelint-config-barnardos">{`stylelint-config-barnardos`}</Link>
        {`)`}
      </ListItem>
    </BulletedList>
    <Heading>{`Future-proofing code`}</Heading>
    <Paragraph>{`You should transpile modern standards for:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`JavaScript with `}
        <Link href="https://babeljs.io/docs/en/babel-preset-env">{`babel-preset-env`}</Link>
      </ListItem>
      <ListItem>
        {`CSS with `}
        <Link href="https://preset-env.cssdb.org/">{`postcss-preset-env`}</Link>
      </ListItem>
    </BulletedList>
    <Paragraph>
      {`You should use the `}
      <Link href="https://github.com/browserslist/browserslist">{`browserslist`}</Link>
      {` defaults to configure both.`}
    </Paragraph>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/183">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;
