import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from './SiteMetadata';

const colorClasses = [
  "red", "blue", "green", "yellow", "purple"
]

const Navbar = () => {
  const { title } = useSiteMetadata();

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        {/* <div className="navbar-brand"> */}
        <h3 className="nav__header">
          {title.split("").map((ch, i) => {
            return (<span key={i} className={colorClasses[i % colorClasses.length]}>{ch}</span>)
          })}
        </h3>
        {/* </div> */}
      </div>
    </nav>
  )
}

export default Navbar
