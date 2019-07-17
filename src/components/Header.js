import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img src='/images/logo.svg' alt='Neelesh Roy - Designer . Thinker . Problem Solver' />
          </Link>
        </div>
        <ul className='socials'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <a target='_blank' href='/documents/resume.pdf'>
              Resume
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/neeleshroy/' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
