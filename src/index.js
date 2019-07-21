import React from 'react'
import ReactDOM from 'react-dom'
import './styles/App.scss'
import App from './App'
import ScrollToTop from './scrollTop'
import { BrowserRouter as Router } from 'react-router-dom'

import { setCookie } from './utils/cookieManager'

if (window.screen.width < 576) {
  setCookie('rdp', 's', 90)
} else {
  setCookie('rdp', 'l', 90)
}

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)
