import React, { Component } from 'react';

class Checkbox extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    }

    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  toggleCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked
    })

    this.props.handleCheckboxChange(this.props.label)
  }

  render() {
    return (
      <div className={this.props.className}>
        <input id={this.props.id} type="checkbox"
          value={this.props.label}
          checked={this.state.isChecked}
          onChange={this.toggleCheckbox} />
        <label htmlFor={this.props.id}>
          {this.props.children}
        </label>
      </div>
    )
  }
}

export default Checkbox
