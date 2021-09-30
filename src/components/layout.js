/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

class Layout extends React.Component{
  //
  async componentDidMount() {
    try {
      const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
      await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
      console.error(err);
    }
  }

  render = () => {
    const {props} = this;
    const { children } = props;

    return (
      <div className={"site"}>
        <Header siteTitle={`Écriture Numérique L2 LCN — Université Gustave Eiffel — 2021/2022`} />
        <div className={"site-main"}>{children}</div>
        <footer className={"site-footer"}>
          {new Date().getFullYear()}, {` `}
          <a href="https://violy.net">Arthur Violy</a> - Université Gustave Eiffel - L2 LCN — Écritures numériques
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
