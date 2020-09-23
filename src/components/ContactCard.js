import React, { Component } from 'react';

class ContactCard extends Component {
  render() {
    const {picture, name} = this.props.info;
    return ( 
      <div>
        <h2>
        {name.first} {name.last}
        </h2>
      <img src={picture.medium} alt="profile" />
      </div>
     );
  }
}

export default ContactCard;