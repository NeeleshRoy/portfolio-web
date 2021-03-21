import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Typewriter from "typewriter-effect";

class Home extends Component {
  render() {
    return (
      <section className='home'>
        <div className='hero'>
          <h1>
            <Typewriter
              options={{
                loop: false,
                skipAddStyles: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello, My name is Neelesh.")
                  .pauseFor(2000)
                  .typeString(" A <span className='highlight-3'>UX/UI designer.</span>")
                  .pauseFor(700)
                  .typeString(" I love to design & develop digital experiences.")
                  .start()
              }} />
          </h1>
          <p className='skills'>
            <b>Primary Skills : </b>
            <span className='highlight'>Contextual Enquiry</span>
            <span className='highlight'>Journey Mapping</span>
            <span className='highlight'>User &#38; Task flows</span>
            <span className='highlight'>Affinity Diagrams</span>
            <span className='highlight'>Information Architecture</span>
            <span className='highlight'>Rapid Prototyping</span>
            <span className='highlight'>Visual Design</span>
          </p>
          <p className='skills'>
            <b>Secondary Skills : </b>
            <span className='highlight-2'>HTML5</span>
            <span className='highlight-2'>SASS</span>
            <span className='highlight-2'>ReactJS</span>
            <span className='highlight-2'>Digital Experimentation</span>
            <span className='highlight-2'>Graphic design</span>
          </p>
        </div>
        <div className='portfolio-home'>
          <div className='feature-portfolio'>
            <img src='/images/projects/cta_4.jpg' alt='Talk to audience after presentation' />
            <div className='feature-portfolio-info'>
              <h2>Hey there</h2>
              <p>
                A solution for people who want to continue engagement with their audience after a talk/conference or presentation.
              </p>
              <Link className='button-primary' to='/projects/heythere'>
                Case study &#8594;
              </Link>
              <Link className='button-secondary' to='/heythere' target="_blank" rel="noopener noreferrer">
                See App
              </Link>
            </div>
          </div>
          <div className='feature-portfolio'>
            <img src='/images/projects/cta_5.jpg' alt='Digital wardrobe solution for Retail customers' />
            <div className='feature-portfolio-info'>
              <h2>Digital Wardrobe</h2>
              <p>
                A digital wardrobe which allows retailers to deliver seamless live experiences and personalisation to
                the customers
              </p>
              <Link className='button-primary' to='/projects/mirror'>
                Case study &#8594;
              </Link>
            </div>
          </div>
          <div className='feature-portfolio'>
            <img src='/images/projects/cta_1.jpg' alt='An app for dementia patient&#39;s caretaker' />
            <div className='feature-portfolio-info'>
              <h2>Sage</h2>
              <p>
                A product for dementia patients which allow the caretakers to address patient’s emotional problems and
                constantly monitors health related issues.
              </p>
              <Link className='button-primary' to='/projects/sage'>
                Case study &#8594;
              </Link>
            </div>
          </div>

          <div className='feature-portfolio'>
            <img
              src='/images/projects/cta_2.jpg'
              alt='A product for top and mid management to analyze and plan finances in various levels of the organization.'
            />
            <div className='feature-portfolio-info'>
              <h2>Planatics</h2>
              <p>
                A product for top and mid management to analyze and plan finances in various levels of the organization.
              </p>
              <Link className='button-primary' to='/projects/planatics'>
                Case study &#8594;
              </Link>
            </div>
          </div>
          <div className='feature-portfolio'>
            <img
              src='/images/projects/cta_3.jpg'
              alt='A product for bestbuy customers to manage all the electronics in their home through an app.'
            />
            <div className='feature-portfolio-info'>
              <h2>BestBuy digital experiments</h2>
              <p>
                A collection of digital experiments that were conducted to improve customer experience on the DOTCOM
                domain.
              </p>
              <Link className='button-primary' to='/projects/abt'>
                Case study &#8594;
              </Link>
            </div>

            <div className='feature-portfolio'>
              <img
                src='/images/projects/cta_6.jpg'
                alt='Most recent independently designed brochures to be used during the client visit as an agenda..'
              />
              <div className='feature-portfolio-info'>
                <h2>Client Visit Agendas</h2>
                <p>Most recent independently designed brochures to be used during the client visit as an agenda.</p>
                <Link className='button-primary' to='/projects/brochures'>
                  See the designs &#8594;
                </Link>
              </div>
            </div>
          </div>
          <div className='thanks'>
            <p>Copyright &copy; 2019 by Neelesh Roy</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
