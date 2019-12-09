import React from "react"
import { Link, graphql } from "gatsby";
import "./index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BgImage from "../components/BgImage";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="introduction">
    <h1>Hello! I'm Sharifa,</h1>
    <p>a software engineer and Nutrition and Dietetics Technician, Registered based in the Minneapolis area. 
      <br />I have a background in community nutrition, working with low-income and refugee families. specifically working with NutriDietetic Technician turned software engineer 
      <br />I'm also a roller derby athlete and play for <a href="http://www.mnrollerderby.com">Minnesota Roller Derby</a>.</p>
   
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <BgImage
      title="astronaut"
      fluid={data.astronaut.childImageSharp.fluid}
      overlayColor="#04040454"
    >
      <h2 style={{ color: "white" }}>Look at me!</h2>
    </BgImage> */}
    <Link to="/page-2/">Go to page 2</Link>
    </div>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default IndexPage
