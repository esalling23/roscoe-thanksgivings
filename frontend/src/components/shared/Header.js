import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

const Header = () => (
  <Navbar className="mb-3" expand="md">
    <Navbar.Brand href="#/">Roscoe Thanksgiving Through the Years</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <NavLink href="#/">Timeline</NavLink>
      <Button className="guess-btn">
        <NavLink href="#guess-year-game">Guess the Year ⁉️</NavLink>
      </Button>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
