import React from "react"
import { Link, graphql } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BgImage from "../components/BgImage";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
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
