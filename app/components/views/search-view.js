import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <input
          type="text"
          placeholder="Search by name, location, specialty, rating..."
          value={this.props.filterText}
          ref={this.props.inputValue}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default SearchBar
