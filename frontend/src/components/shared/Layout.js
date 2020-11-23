import React from 'react'

import Container from 'react-bootstrap/Container'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <main>
    <Header/>

    <Container className="my-5">
    {children}
    </Container>

    <Footer/>
  </main>
)

export default Layout
