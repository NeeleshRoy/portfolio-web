import React from 'react'

function abt () {
  return (
    <div className='abt'>
      <h1>Background and Introduction</h1>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <img src='/images/abt/abt-intro.jpg' alt='ab testing introduction' />
        </div>
        <div className='col-lg-6 col-xs-12'>
          <p>
            I was a part of a team called digital experimentation and customer experience optimization. I used a tool
            called optimizely to set up A/B and A/B/N tests throughout DOTCOM. At First, I used to set up the
            experiments, collect the metrics data and share it to the stakeholders. Later on, I dived into developing
            hypothesis for the experimentation program.
          </p>
          <p>
            We used a tool called optimizely to set up all the experiments. Optimizely is also integrated with Adobe
            analytics (Custom) to take care of all the primary metrics.
          </p>
          <p>
            My experiments and implementations has led to 27% recipe wins in Large view and 24% recipe wins in small
            view web in the FY-2019. I have delivered 80+ experiments till now.
          </p>
          <p>
            Some of the experiments are mentioned below alongwith the target, results and hypothesis. Please understand
            that some data points are faked for the sake of confidentiality and non-disclosure agreement.
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
      <h3>Homepage experiments</h3>
      <section>
        <div className='experiment-card'>
          <h5>Last item viewed toast message</h5>
          <p>
            Hypothesis: By drawing the customer attention to the last item they viewed and Shopping History to see all
            their Recently Viewed items, we deliver a friction-free experience that will result in higher conversion.
          </p>
          <p>Target: Entire site except cart and after, in the funnel</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Does not have a toast message</li>
              <li>Recipe B: Toast message with only text</li>
              <li>Recipe C: Toast message with text and product images</li>
            </ul>
          </p>

          <p>
            Result: Increase in shopping history engagement and the uber menu engagement. But, none of them actually
            lifted the purchase conversion, or RPV etc. So, either of them could be implemented.
          </p>
        </div>

        <div className='experiment-card'>
          <h5>Small view web - primary carousel presentation</h5>
          <p>
            Hypothesis: By enhancing the small view presentation of the primary message we can increase engagement and
            overall performance.
          </p>
          <p>Target: Web small view, homepage only</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Existing carousel</li>
              <li>Recipe B: Carousel with manual swipe</li>
              <li>Recipe C: No swipes, All the slides are stacked</li>
            </ul>
          </p>

          <p>
            Result: Increase in carousel engagements in B and C. But, All the primary metrics were inconclusive like
            Revenue. So, the recommendation was to remain with control.
          </p>
        </div>
      </section>

      <h3>Product listing page experiments</h3>
      <section>
        <div className='experiment-card'>
          <h5>Sponsored Listings in List pages</h5>
          <p>
            Hypothesis: The addition of auction-based paid listings in Browse PLPs will result in higher overall RPV
            when ad revenue is included
          </p>
          <p>Target: Product list pages</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Current state, no sponsored ad</li>
              <li>Recipe B: With sponsored Ads</li>
            </ul>
          </p>

          <p>Result: RPV was higher when ad revenue and product margin were included</p>
        </div>

        <div className='experiment-card'>
          <h5>3 SKU banner copy</h5>
          <p>
            Hypothesis: Label updated to "Promoted Products" from "Featured Products" on the 3-SKU Banner will not
            negatively impact revenue.
          </p>
          <p>Target: Product listing page</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Banner labeled "Featured Products"</li>
              <li>Recipe B: Banner labeled "Promoted Products"</li>
            </ul>
          </p>

          <p>
            Result: The hypothesis proved true, there was no impact to revenue when changing the banner at the top of
            the list page. It was recommended that the stakeholders make the change from "Featured Products" to
            "Promoted Products" because there was no detriment in the primary metrics.
          </p>
        </div>

        <div className='experiment-card'>
          <h5>Enhanced list page filtering for Product listing page</h5>
          <p>
            Hypothesis: An enhanced filtering solution on the “Laptop list page" will assist users in easily finding
            products that meet their needs, increasing product display page views from the list page.
          </p>
          <p>Target: Large view web, Small view web, List page</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Old experience</li>
              <li>Recipe B: New filtering experience of the product list</li>
            </ul>
          </p>

          <p>Result: Hypothesis is true for SV, inconclusive for LV.</p>
        </div>
      </section>

      <h3>Product display page experiments</h3>
      <section>
        <div className='experiment-card'>
          <h5>PDP sticky add to cart</h5>
          <p>
            Hypothesis: By adding a sticky add to cart on bottom of the small view, customers will add to cart more
            frequently.
          </p>
          <p>Target: Product display page, small view</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Current experience</li>
              <li>
                Recipe B: Sticky banner at the bottom of the view that will appear upon page load and stick when
                scrolling{' '}
              </li>
            </ul>
          </p>

          <p>
            Result: Sticky add to cart could be implemented as it saw an increase in add to carts of product display
            pages. There was no positive or negative impact on purchase conversion or RPV.
          </p>
        </div>

        <div className='experiment-card'>
          <h5>YouTube Content User Generated Videos</h5>
          <p>
            Hypothesis: Adding User Generated Video to PDPs will increase overall engagement of video content without
            impacting Purchase Conversion and RPV.
          </p>
          <p>Target: Product display page, Large view</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Current experience</li>
              <li>Recipe B: New section below the existing Media Gallery. Videos sourced from Youtube </li>
            </ul>
          </p>

          <p>
            Result: The hypothesis was correct for Large View. Adding User Generated Video (YouTube) increased overall
            engagement of video content without impacting Purchase Conversion and RPV. Small View was inconclusive.
          </p>
        </div>

        <div className='experiment-card'>
          <h5>Story express video test</h5>
          <p>
            Hypothesis: By adding StoryXpress Feature Product Videos to PDPs we will drive incremental engagement of the
            videos
          </p>
          <p>Target: Product display page, Large view</p>
          <p>
            Recipes:
            <ul>
              <li>Control: Media gallery current experience</li>
              <li>Recipe B: Media Gallery with a StoryXpress product video </li>
            </ul>
          </p>

          <p>
            Result: Our hypothesis was correct. Adding StoryExpress Feature Product Videos to PDPs drove incremental
            engagement of the videos
          </p>
        </div>
      </section>

      <div className='thanks'>
        <p>Thank you for your time and patience.</p>
        <a href='/projects/sage'>View next project &#8594;</a>
      </div>
    </div>
  )
}

export default abt
