import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      headerImage:file(relativePath: {eq: "header-libre.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            breakpoints: [320, 375, 920, 1280, 1600, 1920]
          )
        }
      }
    }
  `)
  const image = getImage(data.headerImage)

  return (
  <header className={"site-header"}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <GatsbyImage image={image} alt={data.site.siteMetadata.title} />
          <span className={"container"}>
            <strong>{' Écritures numériques '}</strong>
            <span>{' démarrer un projet '}</span>
            <span>{' avec les outils web'}</span>
          </span>

        </Link>
      </h1>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
