import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Timeline from './components/routes/Timeline'
import GuessYearGame from './components/routes/GuessYearGame'
import Layout from './components/shared/Layout'

const App = () => {
  return (
    <Layout>
        <Route exact path="/" component={Timeline}/>
        <Route exact path="/guess-year-game" component={GuessYearGame}/>
    </Layout>
  )
}

export default App
