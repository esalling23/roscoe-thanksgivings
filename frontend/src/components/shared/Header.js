import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

const Header = () => (
  <Navbar expand="md">
    <Navbar.Brand>Roscoe Thanksgiving Through the Years</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <NavLink href="#/">Home</NavLink>
      <NavLink href="#guess-year-game">Guessing Game</NavLink>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
