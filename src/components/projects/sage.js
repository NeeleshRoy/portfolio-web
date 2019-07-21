import React from 'react'
import { getCookie } from '../../utils/cookieManager'

function Sage () {
  const view = getCookie('rdp')
  const userflows = () => {
    return (
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <img src='/images/sage/onboarding.png' alt='User Flow - onboarding' />
        </div>
        <div className='col-lg-6 col-xs-12'>
          <img src='/images/sage/reminders.png' alt='User Flow - Reminders' />
        </div>
      </div>
    )
  }

  const wires = () => {
    return (
      <div className='row'>
        <div className='col-lg-2'>
          <img src='/images/sage/wires/dashboard_1.png' alt=' Dashboard - main' />
        </div>
        <div className='col-lg-2'>
          <img src='/images/sage/wires/dashboard_3.png' alt='Dashboard from notification' />
        </div>
        <div className='col-lg-2'>
          <img src='/images/sage/wires/gallery_home.png' alt='Gallery - Home' />
        </div>
        <div className='col-lg-2'>
          <img src='/images/sage/wires/landing_screen.png' alt='Landing screen' />
        </div>
        <div className='col-lg-2'>
          <img src='/images/sage/wires/notification_expanded.png' alt='notification expanded' />
        </div>
        <div className='col-lg-2'>
          <img src='/images/sage/wires/reminders_home.png' alt='reminders home' />
        </div>
      </div>
    )
  }
  return (
    <div className='sage-app'>
      <h1>Sage - An innovation to aid the caretakers of dementia patients</h1>
      <img src='/images/sage/sage_intro.jpg' alt='sage introduction' className='sage_img_intro' />

      <p>
        This portfolio content is too long. If you don't want to read that much click{' '}
        <a href='/lean/sage' target='_blank'>
          here
        </a>{' '}
        to load an <b> 11mb </b>portfolio image in a separate window.
      </p>
      <section className='story'>
        <h1>The Story</h1>
        <div className='row'>
          <div className='col-lg-6 col-xs-12'>
            <p>
              Every innovation has a story to it, and its magical. Mine is no less. On a typical monday, I saw an old
              lady around 70-75 years of age carrying a box of items. All of sudden, she started putting some of the
              items on the ground. After 4-5 mins, a teenage boy came, spoke to her and went away. I saw her leaving
              from that place while the items are still there on the ground. I intercepted her. It seems she didn't
              realize the items were on the ground.
            </p>
          </div>

          <div className='col-lg-6 col-xs-12'>
            <h5>She was a victim of dementia.</h5>
            <p>
              I decided to do something for dementia patients. I started some background research and spoke to a lot of
              doctors. I decided to convert this into a design case study.
            </p>
          </div>
        </div>
        <h1>Contextual Enquiry</h1>
        <div className='row'>
          <div className='col-lg-4'>
            <p>
              I interviewed around 13 family members and 8 people from dementia day care centres including doctors. I
              went to Bengaluru, Jamshedpur and Bhopal for user interviews and also visited 2 dementia day care centers
              in Chennai. It was an eye opening experience. I recorded the gold mine of data, information and the
              extreme range of emotions. I put all the information on a data board, which fetched staggering results.
            </p>
            <p>There are three alarming problems in this area.</p>
          </div>
          <div className='col-lg-8'>
            <ul>
              <li>
                <b>Problem #1</b>
                <p>
                  Family members care about the patients but due to irritation, frustration and reluctant behaviour, the
                  caretakers opt for day care centers.
                </p>
              </li>

              <li>
                <b>Problem #2</b>
                <p>
                  Family members are not able to predict the emotions of the patients. As a result, the empathical
                  connection of emotions is missing.
                </p>
              </li>

              <li>
                <b>Problem #3</b>
                <p>
                  Dementia patients get very easily irritated when they forget petty things. This in turn also
                  frustrates the caretaker.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <i>Two actual interview data of the sage project</i>
        <img src='/images/sage/interview.png' alt='user interview data board sample' />
        <h1>User Persona</h1>
        <div className='row'>
          <div className='col-lg-5'>
            <img src='/images/sage/persona.png' alt='user persona - Responsibility holder' className='persona-img' />
          </div>
          <div className='col-lg-7'>
            <p>
              The data from the contextual enquiry gave me three user personas. One of them is<b> Responsibility holders</b>
            </p>
            <p>
              Responsibility holders are the primary users of this product. They are the people who feel that their
              parents have done enough for them, and it's their turn to give it back. They feel very upset and find
              themselves very guilty when they are not able to take care of their parents.
            </p>
            <blockquote>
              <p>
                &quot;I am always worried and fearful whenever my mother is alone. I keep calling her every one or two
                hours, when I am in my office, Just to make sure she is fine.&quot;
              </p>
              <footer>
                — User interview #5, <cite>Sage app</cite>
              </footer>
            </blockquote>

            <p>
              Most of them are at the love and affection phase, and are seeking for self esteem, power, recognition
              or/and prestige. They are happy because they are with their family and the loved ones, but also paranoid
              because they feel this state won't stay. It will change.
            </p>
          </div>
        </div>
        <h1>Emotion Web</h1>
        <p>
          I create something called an emotion web which allows me to validate the emotion of the app with the actual
          expected emotions from the users.
        </p>
        <img
          src='/images/sage/emoWebRH.png'
          alt='Emotion web - to validate the the emotion of the app with the actual
          expected emotions '
        />
        <h1>Solutioning</h1>
        <div className='row'>
          <div className='col-lg-5 col-xs-12'>
            <p>I categorize solutions into three levels:</p>
            <ul>
              <li>Level - 1 : A similar solution is available in the market.</li>
              <li>Level - 2 : A unique and innovative solution which solves new problems of this world.</li>
              <li>Level - 3 : A Revolutionary idea worthy of a global award.</li>
            </ul>

            <p>
              I put my thoughts related to the solutions on the board and I started with some competitive benchmarking
              and non-logical solutions to the problems. This enables me to increase the solutioning thinking scope. I
              iterated and polished the ideas multiple times and came up with 14 solutions. A bird's eye view of the
              best solutions are mentioned here:
            </p>
          </div>
          <div className='col-lg-7 col-xs-12'>
            <ul>
              <li>Develop a educational app which trains people on dementia (Level 1)</li>
              <li>A dedicated service which is available 24x7 for dementia patients (Level 1)</li>
              <li>An app which trains the patient's brain regularly through interactive games (Level 1)</li>
              <li>A device which detects live emotions of the patient and feeds it to the caretaker (Level 2)</li>
            </ul>
            <p>
              I took the level 2 solution and applied critical thinking for 31 iterations, until a pure satisfaction for
              atleast an MVP. My inner data vampire was triggered and I started researching on how to achieve live
              emotion data from a human body. Stumbled upon a research paper from{' '}
              <i>University of waikato, New Zealand</i> which defines how we can derive emotional data using three
              sensors, a microcontroller and ML K-Means clustering. The clusters formed are the different emotions eg:
              Anxiety, Anger etc. Hence, I came up with the following conceptual model.
            </p>
          </div>
        </div>

        <img src='/images/sage/cm.png' alt='Conceptual model of the sage app' />
        <h1>User flows</h1>
        {
          view === 'l' ? userflows() :
          ''}

        <p>
          You can find all the feature wise user flows {' '}
          <a href='https://miro.com/app/board/o9J_kx73_Uo=/' target='_blank' rel='noopener noreferrer'>
            here
          </a>
        </p>
        <h1>Rapid prototypes</h1>
        <p>
          After completing the feature wise MVP user flows, I started creating the wireframes. Here, I like to put
          emotion web, the user persona, the user flow. For each flow I design wireframes alongwith all the states of
          each screen.
        </p>
        <p className='padding-vertical-20'>
          You can find all of the wireframe screens {' '}
          <a
            href='https://xd.adobe.com/view/cb14fa5c-938f-41db-4af5-5454b2800540-bd25/'
            target='_blank'
            rel='noopener noreferrer'
          >
            here.
          </a>
          {
            view === 'l' ? wires() :
            ''}
        </p>

        <h1>Visual Designs</h1>
        <p>The wireframes got converted into visual designs after a total 76 iterations of 36 screens.</p>
        <p>
          You can find all the visual designs <a href='https://sketch.cloud/s/1epR5'>here.</a>
        </p>
        <img src='/images/sage/vd.png' alt='sage - visual designs' />

        <h1>Usability Testing</h1>

        <div className='row'>
          <div className='col-lg-6 col-xs-12'>
            <h3>The Onboarding flow</h3>
            <img src='/images/sage/onboard-testing.png' alt='onboard testing' />
          </div>
          <div className='col-lg-6 col-xs-12 ut-stats'>
            <ul>
              <li>Success rate - 100%</li>
              <li>Bounce rate - 0.0%</li>
              <li>Average duration - 8.4 secs</li>
              <li>Most of the users found 7 seconds waiting time of the OTP to be too much</li>
              <li>Skip button getting no heat hotspot is a win for the design</li>
            </ul>
          </div>
        </div>

        <div className='row ut-content'>
          <div className='col-lg-6 col-xs-12'>
            <h3>The Reminders</h3>
            <img src='/images/sage/reminder-testing.png' alt='reminder testing' />
          </div>
          <div className='col-lg-6 col-xs-12 ut-stats'>
            <ul>
              <li>Success rate - 88.9%</li>
              <li>Bounce rate - 0.0%</li>
              <li>Average duration - 8.6 secs</li>
              <li>
                Some users drifted towards saving the reminder instead of publishing leading to the misclick rate of
                6.7%
              </li>
              <li>Users struggled or irritated towards setting both start and end time</li>
            </ul>
          </div>
        </div>

        <div className='row ut-content'>
          <div className='col-lg-6 col-xs-12'>
            <h3>The Call flows from notification</h3>
            <img src='/images/sage/call-testing.png' alt='call testings' />
          </div>
          <div className='col-lg-6 col-xs-12 ut-stats'>
            <ul>
              <li>Success rate - 98.3%</li>
              <li>Bounce rate - 0.3%</li>
              <li>Average duration - 8.8 secs</li>
              <li>Most of the users tend to call with recording to save it as a moment for later</li>
              <li>Users didn’t feel violated as the app asks for consent before recording </li>
            </ul>
          </div>
        </div>
      </section>

      <div className='row'>
        <div className='col-lg-6 pull-right'>
          <p>
            I found 41 usability problems which led to enormous changes in the I/A, Task flows, prototypes and respected
            visual designs. Atlast, the project marked closed after 8 months of dedication and perserverance.
          </p>
        </div>
      </div>

      <section className='thanks'>
        <p>Thank you for your time and patience.</p>
        <a href='/projects/planatics'>View next project &#8594;</a>
      </section>
    </div>
  )
}

export default Sage
