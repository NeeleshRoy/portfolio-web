import React from 'react'

function mirror () {
  return (
    <div className='mirror'>
      <div className='disclaimer'>
        <p>
          To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this
          case study. All information in this case study is my own and does not necessarily reflect the views of TCS.
        </p>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-lg-6'>
          <h1>What is a digital wardrobe?</h1>
          <p>
            A digital wardrobe or smart dressing room is a mirror which has a display at the rear side. It has a proper
            user interface which is leveraged by the user to simulate the trials room experience without having to go
            through the hassle of changing clothes everytime. In this project, a leap motion gesture control is used to
            deliver the navigational and visual experience.
          </p>
        </div>

        <div className='col-xs-12 col-lg-6'>
          <img src='/images/mirror/mirror_asset_1.png' alt='smart mirror diagram' />
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 col-lg-12'>
          <h1>My role and Project Details</h1>
          <p>
            The Retail innovation Labs of TCS Chennai, India is a separate horizontal which provides cutting edge
            solutions to the major Retail clients. It has multiple innovation solution design publications under its
            belt and it operates independently from the other accounts in the company. This project was under the Retail
            Innovation Labs, and I worked as an exclusive interaction designer for this particular project.
          </p>
          <p>
            This project was started with a vision of bridging the gap between physical and digital product interaction
            and curb the irritating experience of physically changing clothes everytime in the trial room. It not only
            delivers the features like recommendations and personalization but also cuts cost of keeping trial clothes
            in the store. The solution is hygenic, intuitive and almost magical.
          </p>
          <b>Details of the project</b>
          <ol>
            <li>Project Name: AINA (Smart dressing room)</li>
            <li>Location: Chennai, India</li>
            <li>Work Area: TCS Retail Innovation Labs</li>
            <li>Duration: 5 months</li>
            <li>
              Team: 8 (1 product manager, <b>1 interaction Designer</b>, 1 innovation consultant, 4 developers and 1
              delivery manager).
            </li>
          </ol>

          <p>My role in this project are as follows:</p>
          <ol>
            <li>Conduct on-field ethnographic studies in various retail stores</li>
            <li>Innovate the navigational experience of the mirror using the available leap motion gestures</li>
            <li>Design the User Interface of the customer journey</li>
            <li>Assist developers with design specs</li>
          </ol>
        </div>
      </div>

      <div className='row'>
        <h1>The Master User Flow</h1>
        <div className='col-xs-12 col-lg-12'>
          <img src='/images/mirror/mirror_asset_2.png' alt='smart mirror - customer journey' />
        </div>
      </div>

      <div className='row'>
        <h1>Rapid Prototyping</h1>
        <div className='col-xs-12 col-lg-6'>
          <p>
            After freezing all the features that the mirror would deliver, I started the rapid prototyping process. I
            sketched 45 prototypes. We casted each prototypes from a google pixel phone, listed out pros and cons of
            each screen, and followed an iterative process of screen rejection.
          </p>
          <p>Some of the key takeways are</p>
          <ol>
            <li>
              The TV screen stretched from center to right, so putting any kind of design elements on the left
              interrupted the master dress view.
            </li>
            <li>
              Most customers are accustomed to web/mobile ecommerce UI. So, we cannot drift much from that experience.
            </li>
            <li>Expanded view of personalization and recommendation features are not mandatory</li>
            <li>
              Users are very keen about the dresses they selected so, the "current dress navigation" design needs to be
              solid
            </li>
          </ol>
          <p>... and many more</p>
        </div>
        <div className='col-xs-12 col-lg-6'>
          <img src='/images/mirror/prototype_sample.jpg' alt='smart mirror - Prototyping sample' />
        </div>
      </div>

      <div className='row'>
        <h1>Visual Designs</h1>
        <div className='col-xs-12 col-lg-4'>
          <p>
            I created the final design after the exhaustive and detailed process of prototyping. At first, glaring of
            the mirror was difficult to overcome. Then, I added proper shadows and blurs to the interface. We were still
            dealing with about 10-15% glaring issues. We decided that the external lighting needs to be fixed.
          </p>
          <p>I created the designs using Sketch</p>
        </div>
        <div className='col-xs-6 col-lg-2'>
          <img src='/images/mirror/1.jpeg' alt='smart mirror - Glaring issue' />
        </div>
        <div className='col-xs-6 col-lg-2'>
          <img src='/images/mirror/2.jpeg' alt='smart mirror - Glaring issue' />
        </div>
        <div className='col-xs-6 col-lg-2'>
          <img src='/images/mirror/3.jpeg' alt='smart mirror - Glaring issue' />
        </div>
        <div className='col-xs-6 col-lg-2'>
          <img src='/images/mirror/4.jpeg' alt='smart mirror - Glaring issue' />
        </div>
      </div>
      <h1>Screens</h1>
      <div className='disclaimer'>
        <p>I will not be able to show all the screens due to copyright issues and the non-disclosure agreement.</p>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-xs-6'>
          <p>Product Detail Screen</p>
          <img src='/images/mirror/PDP.png' alt='smart mirror - Final Visual Design - Product Detail Page' />
        </div>

        <div className='col-xs-12 col-xs-6'>
          <p>Similar Dresses Screen</p>
          <img src='/images/mirror/SD.png' alt='smart mirror - Final Visual Design - Similar Dresses' />
        </div>
      </div>

      <section className='thanks'>
        <p>Thank you for your time and patience.</p>
        <a href='/projects/sage'>View next project &#8594;</a>
      </section>
    </div>
  )
}

export default mirror
