import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <section className='home'>
        <div className='hero'>
          <h1>
            Hello, I'm Neelesh. A <span className='highlight-3'>UX/UI designer</span> who applies an analytical,
            investigative and inquisitive mind to build smart and innovative products.
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
              src='/images/projects/cta_4.jpg'
              alt='A usability study on total tech support which provides a digital get support experience to the users.'
            />
            <div className='feature-portfolio-info'>
              <h2>BestBuy Usability studies</h2>
              <p>
                A usability study on total tech support which provides a digital get support experience to the users.
              </p>
              <Link className='button-primary' to='/projects/tts'>
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
          </div>
        </div>
      </section>
    )
  }
}

export default Home
