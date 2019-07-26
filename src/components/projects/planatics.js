import React from 'react'

function Planatics () {
  return (
    <div className="planatics-app">
      <div className="project-heading">Planatics</div>
      <section className="story">
        <div className="row">
          <div className="col-lg-6">
            <img src="/images/planatics/planatics_cta_final.jpg" alt="Planatics main" className="elevate-3" />
          </div>
          <div className="col-lg-6">
            <div className="project-details">
              <ul>
                <li>
                  <p>
                    <b>Description</b>
                  </p>This project is about a financial dashboard which is used by the top and mid management associates
                  in TCS. Users can manage resource counts, calculate costs, perform cost modelling and use planners to
                  streamline and forecast resourcing and project billables.
                </li>

                <li>
                  <p>
                    <b>Team</b>
                  </p>
                  Total 36 associates. Three stakeholders and two tech teams.
                </li>

                <li>
                  <p>
                    <b>Time</b>
                  </p>
                  5 months
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="padding-vertical-20">
          When I joined the project, there was already some documentation and resources available for me to use. I
          started by reading those documents and got a feeling of the project. After having a bird's eye view of the
          project, I conducted a stakeholder interview. I gathered all the requirements and placed them on the board.
        </p>
        <p>
          There were three primary problems of the product that they wanted to be addressed through design:
          <ul>
            <li>They wanted to ease the way people uploaded data though the portal.</li>

            <li>
              They wanted a better view of the table, according to role of the user logged into the application. But, it
              should not render problematic situations and confusions with the usual experience.
            </li>

            <li>A total rebranded and revamped version of the application. </li>
          </ul>
        </p>

        <h3>Ethnographic studies</h3>
        <p>
          I decided that for problems 1 and 2, I need to do Ethnographic studies. The team facilitated the environment
          and I did the studies for 1 whole week.
        </p>
        <p>
          It led to the following conclusions:
          <ul>
            <li>
              The associates who use the data upload, open two excel sheets. One is a template and the other one is the
              data source. They match columns, copy data cell by cell. Some people do not even copy, they see the cell
              and enter it manually to the template excel sheet cell. They do it because it avoids the possibility of
              changing cell data while ctrl + c' ing the cell.
            </li>

            <li>
              The top level management like the head of Retail need not see the whole data. He just cares about the
              totals. Associates who are below that hierarchy need to see the trend and the totals, because they use the
              planners vehemently.
            </li>

            <li>
              The weekly status page has a messed up data entry and data view features. The users have to download excel
              sheets everytime they want to see and confirm the data they have entered. They also have to download a
              template excel to enter the data. This renders a cobweb of excel sheets which are very difficult to
              manage.
            </li>

            <li>Users are accustomed to excel, irrespective of painful file management experience.</li>

            <li>
              There is a planner in cost modelling feature, that comes after 5 steps of consecutive dropdown selections,
              which is irritating and time consuming.
            </li>

            <li>
              There is a need for a constant fixed planner as a widget as it is the most frequently used feature in the
              module.
            </li>
          </ul>
        </p>

        <h3>Heuristics Evaluation</h3>
        <div className="row">
          <div className="col-lg-7">
            <img src="/images/planatics/planatics_heuristics.png" alt="planatics heuristics" />
          </div>
          <div className="col-lg-5">
            <p>
              I figured out that this is a very big change. There were a plethora of usabilty problems popping up. So, I
              decided to perform a heuristics evaluation of the app.
            </p>
            <p>It allowed me focus on most problematic modules starting with WSR in this case.</p>
          </div>
        </div>

        <h3>Prioritization matrix</h3>

        <div className="row">
          <div className="col-lg-5">
            <p>
              The team also provided analytics data. I saw the metrics and trends for each page listed in the heuristics
              evaluation. Amidst of the clicks, page visits, heat maps and other psychological data, there were a few
              relationships forming between the usability and the frequency of the problems. I already had the usability
              problems listed out while doing the heuristics evaluation. So, I decided to make a prioritization matrix
              to decide which problems to tackle first.
            </p>
            <p>
              for each page and a respective user flow, I got the <b>'what &#38; when' from analytics</b> and{' '}
              <b>'how &#38; why' from heuristics.</b>
            </p>
            <p>I sat down with the stakeholders and plotted the problems into the quadrants.</p>
          </div>
          <div className="col-lg-7">
            <img src="/images/planatics/prioritization-matrix.png" alt="prioritization matrix" />
          </div>
        </div>

        <h3>Wireframes and visual design</h3>
        <p>
          I summarised all the data and designed the wireframes and the end visual designs after around 34 iterations.
          Here are some of the wireframes and their respective visual designs
        </p>
        <div className="row">
          <div className="col-lg-5 border">
            <img src="/images/planatics/Homepage.png" alt="Planatics - Homepage wireframe" />
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-5 border">
            <img src="/images/planatics/Login-vd.png" alt="Planatics - Homepage visual design" />
          </div>
        </div>

        <div className="row padding-vertical-20">
          <div className="col-lg-5 border">
            <img src="/images/planatics/ISU.png" alt="Planatics - ISU wireframe" />
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-5 border">
            <img src="/images/planatics/ISU-vd.png" alt="Planatics - ISU visual design" />
          </div>
        </div>

        <div className="row padding-vertical-20">
          <div className="col-lg-5 border">
            <img src="/images/planatics/Menu.png" alt="Planatics - Menu wireframe" />
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-5 border">
            <img src="/images/planatics/Menu-vd.png" alt="Planatics - Menu visual design" />
          </div>
        </div>

        <div className="row padding-vertical-20">
          <div className="col-lg-5 border">
            <img src="/images/planatics/Sub-IOU.png" alt="Planatics - Sub IOU wireframe" />
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-5 border">
            <img src="/images/planatics/Sub-IOU-vd.png" alt="Planatics - Sub IOU visual design" />
          </div>
        </div>
      </section>
      <section className="thanks">
        <p>Thank you for your time and patience.</p>
        <a href="/projects/tts">View next project &#8594;</a>
      </section>
    </div>
  )
}

export default Planatics
