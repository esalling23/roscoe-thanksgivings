import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'
import App from './App'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

render(appJsx, document.getElementById('app'))
