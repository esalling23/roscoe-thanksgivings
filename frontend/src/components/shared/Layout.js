import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <main className="container">
    <Header/>

    <h1>Roscoe Thanksgiving Through the Years</h1>

    {children}

    <Footer/>
  </main>
)

export default Layout
