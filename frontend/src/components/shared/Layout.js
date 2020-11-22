import React from 'react'

import Container from 'react-bootstrap/Container'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <Container>
    <Header/>

    <main className="mx-auto my-5">
    {children}
    </main>

    <Footer/>
  </Container>
)

export default Layout
