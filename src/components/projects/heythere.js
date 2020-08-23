import React from 'react';
import { Link } from 'react-router-dom';

function heythere() {
    return (
        <div className="heythere">
            <div className="row">
                <div className="col-lg-8">
                    <h1>Introduction</h1>
                    <p>
                        Heythere is a software which enables presenters to engage their audience after the presentation. It was ideated by three business analysts during a meetup. They had post-talk questions, which were not addressed by the presenter because there was no way of contacting the audience after the talk. They had to go home with unanswered questions in their minds.
                    </p>
                    <p>
                        My role was of a designer. I took some design decisions and almost 70% design work was to be done according to stakeholders thoughts. Since, the clients were business analysts, they completed all the prerequisites required to design an app. Essentially, they chalked out the journey map and user flows for me to use.
                    </p>
                    <h3>How it works?</h3>
                    <ol>
                        <li>Create a chatroom</li>
                        <li>Share the link to participants</li>
                        <li>Join as host/participant</li>
                        <li>Talk</li>
                    </ol>
                    <p>
                        I was onboarded into the team as a designer to rapidly design and prototype the MVP in 8 days. They provided ideas and some design problems.
                    </p>
                </div>
                <div className="col-lg-4">
                    <div className="secondary">
                        <Link to="/heythere" className="button-secondary">Visit the website</Link>

                        <img src="/images/heythere/heythere-home.png" alt="heythere home screenshot" />
                    </div>
                </div>
            </div>
            <div className="problems">
                <div className="row">
                    <div className="col-xs-12 pull-4 col-lg-8">
                        <h1>Requirements</h1>
                        <ul>
                            <li>Develop a prototype in a week to test how potential customers react to the product</li>
                            <li>Create a temporary branding with a shade of yellow as primary colour</li>
                            <li>Enable hosts to quickly create a chatroom</li>
                            <li>Maximum allowed clicks to create host room is 2</li>
                            <li>Let people know at first glance, what the software does</li>
                            <li>Chat screen should not be "FORMAL".</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="solutions">
                <div className="solution">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <h1>Solutions</h1>
                            <p><b>Mandatory yellow colour problem</b></p>
                            <p>
                                The stakeholders insisted that they want yellow color to be primary. Now, Yellow is a dangerous color. Dark yellow represents caution, decay and death, whereas lighter shades represent sunshine, joy and happiness.
                            </p>
                            <p>Since, light yellow emits positivity, it has to be paired up with a powerful, elegant and formal color. This is obviously black. So, a shade of black is used alongwith +60 and -60 hues of yellow as an accent.</p>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="palettes">
                                <div className="color-palettes">
                                    <div className="palette palette-yellow"></div>
                                    <div className="palette-desc">
                                        <b>Dandelion Yellow</b>
                                        <p>#ffd60a</p>
                                        <p>rgb 255 214 10</p>
                                        <p>Primary</p>
                                    </div>
                                </div>
                                <div className="color-palettes">
                                    <div className="palette palette-black"></div>
                                    <div className="palette-desc">
                                        <b>Dark Black</b>
                                        <p>#1d252c</p>
                                        <p>rgb 29 37 44</p>
                                    </div>
                                </div>
                                <div className="color-palettes">
                                    <div className="palette palette-aqua"></div>
                                    <div className="palette-desc">
                                        <b>Aquamarine</b>
                                        <p>#1df2bd</p>
                                        <p>rgb 29 242 189</p>
                                        <p>Accent 1</p>
                                    </div>
                                </div>
                                <div className="color-palettes">
                                    <div className="palette palette-pink"></div>
                                    <div className="palette-desc">
                                        <b>Pink Purple</b>
                                        <p>#de1df2</p>
                                        <p>rgb 222 29 242</p>
                                        <p>Accent 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solution">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <p><b>Customers should be able to host chatroom as quickly as possible</b></p>
                            <p>
                                Initially, we had the thought of "create chatroom" as a navbar menu feature. This looks like a functional decision but it actually is a design decision.
                            </p>
                            <p>
                                Since, Call to actions are the most prominent attention seekers in a page, we integrated the feature in the homepage itself and converted the link to a touchpoint for hosting sessions. I made use of modals to achieve this.

                                On click of "create a chatroom", a modal window with form params loads and generates a link on successful submission on the modal itself. This also solved the problem of <b>maximum allowed page clicks to two</b>. This doesn't load any extra screens nor there is a navigational change in the app. Everything happens in the same screen.
                            </p>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <img src="/images/heythere/heythere-1.png" alt="solution for hosting chatroom" />
                        </div>
                    </div>
                </div>

                <div className="solution">
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <p><b>Chat screen should emit happiness and bubbly emotions. Users should not be bored.</b></p>
                            <p>
                                This is the sole reason why I suggested two accent colors in the palette. Two opposite hues of primary colour will help us render varied experiences throughout the app. Users won't be bored and won't push against seeing same primary colour and black shades throughout the web app.
                            </p>
                            <p>

                            </p>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <img src="/images/heythere/single-convo.jpg" alt="Bubbly single conversation chat page" />
                        </div>
                    </div>
                </div>
            </div>
            <section className='thanks'>
                <p>Thank you for your time and patience.</p>
                <a href='/projects/mirror'>View next project &#8594;</a>
            </section>
        </div>
    )
}

export default heythere

