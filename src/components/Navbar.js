import React, { useState } from 'react'
import { Link } from 'gatsby'
import classnames from "classnames";

const Navbar = React.forwardRef((_props, ref) => {
  const [isActive, setIsActive] = useState(false);
  const activeClass = { "is-active": isActive };
  const navbarBurgerClasses = classnames("navbar-burger burger", activeClass)
  const navbarMenuClasses = classnames("navbar-menu", activeClass)

  const toggleHamburger = () => {
    setIsActive(!isActive)
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
      ref={ref}
    >
      <div className="container">
        <div className="navbar-brand">
          <div
            className={navbarBurgerClasses}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={navbarMenuClasses}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
              Forside
              </Link>
            <Link className="navbar-item" to="/products">
              Produkter
              </Link>
            <Link className="navbar-item" to="/contact">
              Kontakter
              </Link>
          </div>
        </div>
      </div>
    </nav>
  )
})

export default Navbar
