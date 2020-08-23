import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Project from './Project'
import About from './About'
import Lean from './Lean'

const Main = () => (
  <main>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/projects/:projectid' component={Project} />
      <Route path='/about' exact component={About} />
      <Route path='/lean/:id' component={Lean} />
      <Route path='/heythere' component={() => {
        window.location.href = 'https://www.heythere.in';
        return null;
      }} />
    </Switch>
  </main>
)

export default Main
