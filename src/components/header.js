import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import headerImg from "../images/header-h.jpg"

const Header = ({ siteTitle }) => (
  <header className={"site-header"}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={headerImg} alt={siteTitle} />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
