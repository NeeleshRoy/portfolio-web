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
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/uc?export=download&id=1BZg3RYv1-2mM16sWVqRkyA4KSqARAYAh'
            >
              Resume
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/neeleshroy/' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
          </li>

          <li>
            <a href='tel:+91 (910) 207-4630'>+91 (910) 207-4630</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
