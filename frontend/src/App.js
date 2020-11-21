import React from 'react'
import { Route } from 'react-router-dom'

import Timeline from './components/routes/Timeline'
import Layout from './components/shared/Layout'

const App = () => {
  return (
    <Layout>
      <Route path="/" component={Timeline}/>
    </Layout>
  )
}

export default App
