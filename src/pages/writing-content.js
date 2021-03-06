import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Heading from "../components/Heading";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import DesignSystemIndex from "../components/DesignSystemIndex";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Writing content`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Writing content`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Spelling",
          to: "/writing-content/#spelling"
        }
      ]}
    />
    <Paragraph>
      {`When writing content use inclusive language and imagine you're talking to the reader.`}
    </Paragraph>
    <Paragraph>{`To be clear and concise you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`avoid jargon`}</ListItem>
      <ListItem>{`avoid the passive`}</ListItem>
      <ListItem>{`use short sentences with one main idea`}</ListItem>
      <ListItem>{`use bulleted lists when paragraphs have more than four points`}</ListItem>
    </BulletedList>
    <Paragraph>{`When styling your writing you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use sentence case`}</ListItem>
      <ListItem>{`avoid use of bold`}</ListItem>
      <ListItem>{`use italics for general emphasis`}</ListItem>
      <ListItem>{`use words for single-figure numbers`}</ListItem>
      <ListItem>{`use single quotation marks for quoted speech`}</ListItem>
      <ListItem>{`only use the ampersand when space is tight`}</ListItem>
      <ListItem>{`write dates as 9 January 2018`}</ListItem>
      <ListItem>{`use the 12-hour clock, for example 10am and 2.30pm`}</ListItem>
      <ListItem>{`use noon and midnight instead of 12 noon and 12 midnight`}</ListItem>
    </BulletedList>
    <Heading>{`Spelling`}</Heading>
    <BulletedList>
      <ListItem>{`Barnardo’s (always with apostrophe)`}</ListItem>
      <ListItem>{`email (no hyphen)`}</ListItem>
      <ListItem>{`http:// (is not required, begin web addresses with www)`}</ListItem>
      <ListItem>{`online (one word)`}</ListItem>
      <ListItem>{`per cent (should be spelt in words, unless used in tables)`}</ListItem>
      <ListItem>{`postcode (no hyphen)`}</ListItem>
      <ListItem>{`website (no hyphen)`}</ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/87">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
