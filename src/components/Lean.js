import { Component } from 'react'
import showLean from './lean/'

class Lean extends Component {
  render () {
    const { id } = this.props.match.params
    return showLean(id)
  }
}

export default Lean
