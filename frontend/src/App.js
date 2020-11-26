import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/routes/Home'
import Timeline from './components/routes/Timeline'
import GuessYearGame from './components/routes/GuessYearGame'
import Layout from './components/shared/Layout'

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home}/>
      <Route exact path="/timeline" component={Timeline}/>
      <Route exact path="/guess-year-game" component={GuessYearGame}/>
    </Layout>
  )
}

export default App
