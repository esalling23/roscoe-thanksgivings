import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('app')

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

render(appJsx, container)
