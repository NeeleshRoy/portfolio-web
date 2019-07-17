import { Component } from 'react'
import showProject from './projects/'

class Project extends Component {
  render () {
    const { projectid } = this.props.match.params
    return showProject(projectid)
  }
}

export default Project
