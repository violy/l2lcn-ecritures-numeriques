import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Accueil</h1>
    <ul className={"index-tree"}>
      {data.pages.nodes.map((mdPage,key)=>
        <li key={key} className={`item-${mdPage.frontmatter.index%1===0?'root':'child'}`}><code>{mdPage.frontmatter.index}</code> <Link to={mdPage.frontmatter.slug}>{mdPage.frontmatter.title}</Link></li>
      )}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query{
  pages:allMarkdownRemark(
    sort: {fields: frontmatter___index}
    filter: {frontmatter: {index: {gte: 0}}}
  ) {
    nodes {
      frontmatter {
        title
        slug
        next
        keywords
        index
        date
      }
    }
  }
  }
`

export default IndexPage
