import React from 'react'

import Container from 'react-bootstrap/Container'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <main>
    <Header/>

    <Container fluid className="mt-5 mb-8">
    {children}
    </Container>

    <Footer/>
  </main>
)

export default Layout
