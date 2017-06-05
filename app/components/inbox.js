import React, { Component } from 'react'
import { Link } from 'react-router'
import Nav from './views/nav'
import PhysiciansContainer from './containers/physicians-container'

class Inbox extends Component {
  render() {
    return (
      <div className="inbox">
        <PhysiciansContainer />
      </div>
    )
  }
}

export default Inbox
