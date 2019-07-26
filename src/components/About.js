import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <div className='row section'>
          <div className='col-lg-5 col-xs-12'>
            <img src='images/about/neelesh.png' alt='neelesh' />
          </div>

          <div className='col-lg-7 col-xs-12'>
            <h1>Neelesh Roy</h1>
            <p>
              <b>UX/UI designer</b> in Tata Consultancy Services
            </p>

            <p>
              <b>Education : </b> Bachelors of Technology, West Bengal University of Technology
            </p>

            <p>
              <b>Experience : </b>3.2 years
            </p>

            <p>
              <b>Hobbies :</b> PUBG, Swimming, Badminton
            </p>
            <p>
              <a
                href='https://linkedin.com/in/neeleshroy/'
                target='_blank'
                rel='noopener noreferrer'
                className='social'
              >
                <img src='/images/icons/linkedin.svg' alt='' />
              </a>
              <a
                href='https://www.facebook.com/NeeleshRoy.2013'
                target='_blank'
                rel='noopener noreferrer'
                className='social'
              >
                <img src='/images/icons/facebook.svg' alt='' />
              </a>
              <a
                href='https://www.instagram.com/neel.bongo/?hl=en'
                target='_blank'
                rel='noopener noreferrer'
                className='social'
              >
                <img src='/images/icons/instagram.svg' alt='' />
              </a>
            </p>
          </div>
        </div>

        <div className='row section'>
          <div className='col-lg-6 col-xs-12'>
            <h3>Design</h3>
            <p>
              I have a stubborn attitude. The only thing I believe in is my power of observations. I try to collect
              visual cues, cognitive data wherever I go, whether its an airport or a bathroom. It helps me to stay sharp
              and improves my design thinking capabilities.
            </p>
            <p>
              Apart from this, I try to stay upto date with the latest design and technology trends. I always try to
              find problems in the environment and ways of solving them through design. Even a tiniest bit of
              behavioural change in people sparks a joyous and adventourous feeling in me which allows me to become more
              motivated.
            </p>
          </div>
          <div className='col-lg-6 col-xs-12'>
            <img src='/images/about/design.png' alt='design' />
          </div>
        </div>

        <div className='row section'>
          <div className='col-lg-6 col-xs-12'>
            <h3>Gaming</h3>
            <p>
              I am also an avid gamer. It all started in the 5th grade of school. We were exposed to a game called{' '}
              <a
                href='https://www.playdosgames.com/online/dangerous-dave/'
                alt='dave'
                rel='noopener noreferrer'
                target='_blank'
              >
                Dangerous Dave.
              </a>{' '}
              I played a range of games starting from mario to pubg (currently). I was a good counter strike 1.6 player
              and had an DOTA MMR of 3200 in 2013. Right now, I play PUBG and in each season I go upto a rank of
              3000-7000 in ASIA squad TPP.
            </p>
            <p>
              As a designer and a thinker we need to observe and perceive data from environment. Gaming increases
              vision, and improves decision making skills. Imagine the decision making you have to do with{' '}
              <a
                href='https://www.reddit.com/r/DotA2/comments/4agvjy/how_complex_is_dota_2_really/'
                target='_blank'
                rel='noopener noreferrer'
              >
                4.68×10<sup>32</sup> different end game combinations.
              </a>
            </p>
          </div>
          <div className='col-lg-6 col-xs-12'>
            <img src='/images/about/gaming.png' alt='neelesh' />
          </div>
        </div>

        <section className='thanks'>
          <p>Thank you for your time and patience.</p>
          <a href='/projects/sage'>Dive into the projects</a>
        </section>
      </div>
    )
  }
}

export default About
