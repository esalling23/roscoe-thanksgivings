import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const closeNav = () => setExpanded(false)
  const openNav = () => setExpanded(true)

  return (
    <Navbar
      className="mb-3"
      expand="lg"
      onToggle={expanded ? closeNav : openNav}
      expanded={expanded}
    >
      <Navbar.Brand href="#/">Roscoe Thanksgiving Through the Years</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <NavLink
          onSelect={closeNav}
          href="#timeline"
        >
          Timeline
        </NavLink>
        <Button className="guess-btn">
          <NavLink
            onSelect={closeNav}
            href="#guess-year-game"
          >
            Guess the Year ⁉️
          </NavLink>
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
