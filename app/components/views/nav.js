import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a className="link--alt" href="mailto:colin@codefashioned.com">Contact Me</a></li>
          <li><a className="link--alt" href="http://github.com/pocketbird">GitHub</a></li>
          <li><Link className="link--alt" to="/portfolio">Recent Work</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
