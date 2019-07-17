import React from 'react'
import ReactDOM from 'react-dom'
import './styles/App.scss'
import App from './App'
import ScrollToTop from './scrollTop'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)
