/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text:
      "We understand that product's performance speed is the main drive for meaningful user experiences on any applications. Our products are make with high-level optimization technique and tools to ensure lightning fast performance",
  },
  {
    id: 2,
    imgSrc: Subscription,
    altText: "Scalability Readines",
    title: "Scalability Readines",
    text:
      "Your success is also ours. Every products that we are shipping are embeded with the same principle of scalability readiness. We are building tools that are upgradable into the success of you.",
  },
  {
    id: 3,
    imgSrc: Partnership,
    altText: "World-class Professionalism",
    title: "World-class Professionalism",
    text:
      "We are commit to ensure the highest level of data privacy, transparacy and security during and after all business engagement ",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "We believe that clients are lifelong partners. Whether it is intergrating and update a new feature or training for the current tool, our technical team are experiences in deliver the support you need.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: `section.feature` }}>
      <Container>
        <SectionHeader slogan="Quality product" title="Fast and secure" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
