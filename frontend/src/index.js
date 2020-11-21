import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('app')

const appJsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(appJsx, container)
