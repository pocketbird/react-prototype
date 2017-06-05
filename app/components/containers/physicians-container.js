import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import SearchBar from '../views/search-view'
import Checkbox from '../views/checkbox-view'
import Physician from '../views/physician-view'
import * as physiciansApi from '../../api/physicians-api'

class MessagesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      PhysiciansList: [],
      search: '',
      // isStarredOnly: false,
      isAvailableOnly: false
      // isSentOnly: false
    }

    this.updatePhysician = this.updatePhysician.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  componentWillMount() {
    this.selectedCheckboxes = new Set()
  }

  componentDidMount() {
    // physiciansApi.getPhysiciansList().then(PhysiciansList => {
    //   this.setState({PhysiciansList: PhysiciansList})
    // })
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)})

    if (event.target.value.substr(0) === '') {
      this.setState({PhysiciansList: []})
    } else {
      physiciansApi.getPhysiciansList().then(PhysiciansList => {
        this.setState({PhysiciansList: PhysiciansList})
      })
    }
  }

  toggleCheckbox(label) {
    switch(label) {
      case "Available":
        // console.log('label: ' + label)
        this.setState({
          isAvailableOnly: !this.state.isAvailableOnly
        })
        break
      // case "Starred":
      //   console.log('label: ' + label)
      //   this.setState({
      //     isStarredOnly: !this.state.isStarredOnly
      //   })
      //   break
      // case "Sent":
      //   console.log('label: ' + label)
      //   this.setState({
      //     isSentOnly: !this.state.isSentOnly
      //   })
      //   break
      default:
        // console.log('no checkboxes selected')
    }
  }

  togglePhysician(sender, physicianId, index) {
    // console.log('TOGGLE MESSAGES: sender: ' + sender)
    this.updatePhysician(physicianId, index)
  }

  updatePhysician(physicianId, index) {
    // let toggleValue = this.state.PhysiciansList[index]['showSpecialties']
    // console.log('toggleValue ' + toggleValue)
    // console.log('physicianId: ' + physicianId)
    this.state.PhysiciansList[index]['showSpecialties'] = !this.state.PhysiciansList[index]['showSpecialties']
    console.log('toggleValue ' + this.state.PhysiciansList[index]['showSpecialties'])
    console.log('updatePhysician: ' + index + ', showSpecialties: ' + this.state.PhysiciansList[index]['showSpecialties'])
    // this.setState(this.state.PhysiciansList)
    physiciansApi.updatePhysician('1', this.state.PhysiciansList[index]['showSpecialties']).then(PhysiciansList => {
      this.setState(this.state.PhysiciansList)
    })
  }

  deletePhysician(physicianId) {
    // console.log('deleting physician with id: ' + physicianId)
    // physiciansApi.deletePhysician(physicianId).then(PhysiciansList => {
    //   const newPhysiciansList = _.filter(this.state.PhysiciansList, physician => physician.id != physicianId)
    //   this.setState({PhysiciansList: newPhysiciansList})
    // })
  }

  render() {
    // console.log('render')
    let filteredPhysiciansList = this.state.PhysiciansList.filter(
      (physician) => {
        let specialtyText = ''
        for (let i = 0; i < physician.specialties.length; i++) {
          specialtyText = specialtyText.concat(physician.specialties[i].name + ' ')
        }

        let searchText = physician.body + ' ' + physician.recipient + ' ' + physician.sender + ' ' + physician.subject + ' ' + physician.rating + ' ' + physician.isAvailable + ' ' + specialtyText
        physician.search = searchText.toLowerCase()

        return physician.search.indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )

    var physicianItems = [];

    filteredPhysiciansList.forEach((physician) => {
      if (!physician.isAvailable && this.state.isAvailableOnly) {
        return
      }
      // if (!physician.isStarred && this.state.isStarredOnly) {
      //   return
      // }
      // if (!(physician.specialties[0].sender === 'You') && this.state.isSentOnly) {
      //   return
      // }
      physicianItems.push(physician)
    })

    return (
      <div className="message-threads">
        <form className="filters">
          <SearchBar className="search-bar" onChange={this.updateSearch.bind(this)} inputValue={this.state.search} />
          {/*<Checkbox className="checkbox" label="Unread" handleCheckboxChange={this.toggleCheckbox} isStarredOnly={this.state.isStarredOnly} key="Unread">Unread</Checkbox>*/}
          {/*<Checkbox className="checkbox" label="Starred" handleCheckboxChange={this.toggleCheckbox} key="Starred">Flagged</Checkbox>*/}
          <Checkbox className="checkbox" label="Available" handleCheckboxChange={this.toggleCheckbox} key="Available">Has Available Appointments</Checkbox>
          {/*<button className="compose-button"><span className="icon icon-message-send"></span> Compose</button>*/}
        </form>

        <Physician physiciansList={physicianItems} togglePhysician={this.updatePhysician} />
      </div>
    )
  }
}

export default MessagesContainer
