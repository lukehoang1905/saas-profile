/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import NextLogo from "assets/key-feature/next-js.svg";
import ReactLogo from "assets/key-feature/react.svg";
import GatsbyLogo from "assets/key-feature/gatsby.svg";
import FigmaLogo from "assets/key-feature/figma2.svg";
import GoogleALogo from "assets/key-feature/ga.svg";
import MailChimpLogo from "assets/key-feature/mailchimp.svg";
import SendGLogo from "assets/key-feature/sendgrid.svg";
import AWSLogo from "assets/key-feature/microsoft-azure-logo.jpeg";

const data = [
  {
    id: 1,
    imgSrc: NextLogo,
    altText: "Fast NextLogo",
    title: "Fast NextLogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    imgSrc: ReactLogo,
    altText: "ReactLogo deal",
    title: "ReactLogo deal",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    imgSrc: GatsbyLogo,
    altText: "Pro GatsbyLogo",
    title: "Pro GatsbyLogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },

  {
    id: 4,
    imgSrc: SendGLogo,
    altText: "Customer SendGLogo",
    title: "Customer SendGLogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 8,
    imgSrc: FigmaLogo,
    altText: "Customer FigmaLogo",
    title: "Customer FigmaLogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 6,
    imgSrc: GoogleALogo,
    altText: "Customer GoogleALogo",
    title: "Customer GoogleALogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  ,
  {
    id: 7,
    imgSrc: AWSLogo,
    altText: "Customer AWSLogo",
    title: "Customer AWSLogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },

  {
    id: 5,
    imgSrc: MailChimpLogo,
    altText: "Customer MailChimpLogo",
    title: "Customer MailChimpLogo",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: `section.keyFeature` }}>
      <Container>
        <SectionHeader
          slogan={"What do we offer?"}
          title={"Latest advance technology"}
        />
        <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <FeatureCardColumn
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
    width: ["80%", "60%", "80%"],
    mx: "auto",
    gridGap: [
      "60px 0",
      null,
      "70px 40px",
      "80px 60px",
      "30px",
      "80px 40px",
      "85px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
