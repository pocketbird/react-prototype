import React, { Component } from 'react'

class Specialties extends Component {
  render(props) {
    return (
      <div className="specialties-container">
        <h3>Specialties:</h3>
        <ul className="specialties-list">

          {this.props.specialties.map(specialty => {

            return (
              <li key={specialty.id}>- {specialty.name}</li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

export default Specialties
