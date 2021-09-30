import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Accueil</h1>
    <p>
      <Link to="/introduction/">Introduction</Link>
    </p>
  </Layout>
)

export default IndexPage
