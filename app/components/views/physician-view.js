import React, { Component } from 'react'
import Specialties from './specialties-view'

class Physician extends Component {
  render(props) {
    return (
      <div>

        {this.props.physiciansList.map((physician, index) => {

          return (
            <article className="thread" key={index}>
              <div className="thread-header" onClick={() => this.props.togglePhysician('togglePhysician', physician.id, index)}>
                <div className={"thread-header__status" + (physician.isAvailable ? " status-unread" : "")}></div>
                <div className="thread-header__status">{physician.rating}</div>
                <img className="thread-header__avatar" src={physician.avatar} />
                <div className="thread-header__meta">
                  <span className={"thread-header__sender" + (physician.isAvailable ? " sender-unread" : "")}>{physician.sender}</span>
                  <h2 className={"thread-header__subject" + (physician.isAvailable ? " subject-unread" : "")}>{physician.subject}</h2>
                </div>
                {physician.showSpecialties ? <button className="text-button thread-header__close-button" title="Close thread">Close</button> : ''}
              </div>

              {physician.showSpecialties ? <Specialties specialties={physician.specialties} /> : null }
            </article>
          )
        })}

      </div>
    )
  }
}

export default Physician
