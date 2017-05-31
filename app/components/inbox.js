import React, { Component } from 'react'
import { Link } from 'react-router'
import Nav from './views/nav'
import MessagesContainer from './containers/messages-container'

class Inbox extends Component {
  render() {
    return (
      <div className="inbox">
        <MessagesContainer />
      </div>
    )
  }
}

export default Inbox
