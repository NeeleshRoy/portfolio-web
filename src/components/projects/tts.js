import React from 'react'

function tts () {
  return (
    <div className='tts-study'>
      <h3>Total Tech Support Benchmark - Usability studies</h3>
      <div className='row'>
        <div className='col-lg-6'>
          <img src='/images/tts/total_tech.jpg' alt='total tech hero' width='100%' />
        </div>
        <div className='col-lg-6'>
          <b>Introduction</b>
          <p>
            The Total Tech Support membership of bestbuy is a one time subscription for all your digital support,
            repairs, replacements etc. It was launched online and across markets officially in May FY19. The enterprise,
            while focusing on many priorities, aligned to conduct research and iterate on the digital get support
            experience.
          </p>
          <p>
            This specific research effort focused on the digital get support experience in production and on all
            platforms. User insights and feedback was gathered, and data was synthesized to educate the enterprise and
            direct future iterations.
          </p>

          <p>
            <b>Team:</b>
            <ol>
              <li>Associate Director, UX Research</li>
              <li>Sr. UX Researcher, UX Research</li>
              <li>Assistant Researcher, UX Research</li>
              <li>UX designer</li>
              <li>UX Sr. Manager</li>
              <li>APP Team Associate Director</li>
            </ol>
          </p>

          <p>
            <b>Platforms tested:</b>
            <ol>
              <li>Web Large view</li>
              <li>Web small view</li>
              <li>Bestbuy home app</li>
            </ol>
          </p>
        </div>
      </div>
      <div className='disclaimer'>
        <p>
          To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this
          case study. All information in this case study is my own and does not necessarily reflect the views of
          Bestbuy.
        </p>
      </div>
      <h3>Methodology and Test environment</h3>
      <p>
        Traditional usability testing was conducted by one-on-one sessions and On campus sessions. There were 5 App
        sessions, 5 large view web sessions and 5 small view web sessions. Also, there were some task based scenarios
        which were of 60 minutes each.
      </p>
      <h3>Participant profiles</h3>
      <ol type='1'>
        <li>Age between 18-35: 5</li>
        <li>Age between 36-50: 5</li>
        <li>Age 50+: 7</li>

        <li>Male: 6</li>
        <li>Female: 9</li>
      </ol>
      <h3>Results, Problems and Recommendations</h3>
      <p className='bolded'>Problem - 1</p>
      <div className='row'>
        <div className='col-lg-6'>
          <p>
            There were two user mental models:
            <ol type='1'>
              <li>
                Half the users’ mental model was to find support through the product first. Some were even quick to add
                their product manually.
              </li>
              <li>
                Others were concerned less with the product specifically and searched to find service and support lists
                like a list of what services are included.
              </li>
            </ol>
          </p>
        </div>
        <div className='col-lg-6'>
          <i>Recommendation: </i>Continue to provide multiple ways to find support whether through the product or a long
          list. Consider adding product specific issues with support types on a product page.
        </div>
      </div>

      <p className='bolded heading'>Problem - 2</p>
      <div className='row'>
        <div className='col-lg-6'>
          <p>Many entry points and links were clicked to find the Dashboard</p>
        </div>
        <div className='col-lg-6'>
          <i>Recommendation: </i>Consider adding a one-click entry point to the Dashboard on the header navigation.
          Especially if user is authenticated.
        </div>
      </div>

      <p className='bolded heading'>Problem - 3</p>
      <div className='row'>
        <div className='col-lg-6'>
          <p>
            Starting from the Dashboard, while some participants navigated through their product to try to find support,
            others tried and often went back and forth. Some even stated they would go straight to the chat or call
            link, especially once frustrated.
          </p>
        </div>
        <div className='col-lg-6'>
          <i>Recommendation: </i>For those looking to find support urgently consider separating action links and
          information links. Add action links to the top of the Dashboard landing page.
        </div>
      </div>

      <p className='highlighted'>Problem - 4</p>
      <div className='row'>
        <div className='col-lg-6'>
          <p>
            There were two user mental models:
            <ol type='1'>
              <li>
                Although users were able to locate a list of support and services, they expected to be able to click on
                them.
              </li>
              <li>
                Not only did they desire to take an action (set up), they also had questions about possible in-home or
                in- store appointments.
              </li>
            </ol>
          </p>
        </div>
        <div className='col-lg-6'>
          <i>Recommendation: </i>Add hyperlinks for the support and services listed. Short term, the link could send
          users to a page to learn more. Long term, allow action like scheduling.
        </div>
      </div>

      <h3>Conclusion</h3>

      <p>
        Like this, we found 33 problems and brainstormed their respective recommendations. These study results are being
        currently leveraged by the UX and the product teams to continously design and deliver seamless experiences in
        the total tech support segment.
      </p>

      <section className='thanks'>
        <p>Thank you for your time and patience.</p>
        <a href='/projects/abt'>View next project &#8594;</a>
      </section>
    </div>
  )
}

export default tts
