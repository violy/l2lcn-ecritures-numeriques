import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import moment from "moment"
import "moment/locale/fr"
import Seo from "../components/seo"
moment.locale('fr');

export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html='',tableOfContents ='' } = markdownRemark
  const { title = '', date = false, next = false} = frontmatter
  return (
    <Layout>
      <Seo title={`${title} | Écritures numériques | Arthur Violy | Université Gustave Eiffel - L2 LCN`} />
      <article className="post markdown-body">
        <header className={"post-header"}>
          <h1 className={"post-title"}>{title}</h1>
          <div className={"post-date"}>vu le {date && moment(date).format('LL')}</div>
          <nav>
            <h4>Sommaire</h4>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents}} />
          </nav>
        </header>
        <main
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      {next && <Link to={next} className={"post-next"}>page suivante <code>{next}</code></Link>}
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        next
      }
      tableOfContents
    }
  }
`