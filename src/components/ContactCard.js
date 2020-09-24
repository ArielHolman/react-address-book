import React, { Component } from 'react';
import DetailsBtn from './DetailsBtn'

class ContactCard extends Component {
  state = {
    data: [],
    isShowing:false,
  };
  render() {
    const {picture, name, location, phone, email} = this.props.info;
    const toggleDetails = ()=>{
      this.setState(
        prevState => ({isShowing: !prevState.isShowing }))
    }
    return (
      <div>
        <h2> {name.first} {name.last}</h2>
        <img src={picture.medium} alt="profile" />
        <br />
        <DetailsBtn isShowing={this.state.isShowing} toggleDetails={toggleDetails}/>
        {this.state.isShowing && (
            <div>
                <p> Address: {location.street.number} {location.street.name}</p>
                <p> Phone: {phone}</p>
                <p> Email: {email}</p>
            </div>)}
      </div>
     );
  }
}

export default ContactCard;