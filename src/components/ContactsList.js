import React, { Component } from 'react';
import ContactCard from './ContactCard'

class ContactsList extends Component {
  state = {
    contacts: []
  }

  contactsList = () => {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({contacts: data.results})
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.contactsList}>List Contacts</button>
        {this.state.contacts.map((contact) => {return <ContactCard key={contact.phone}info={contact}/>;
        })}
      </div>
    );
  }
}

export default ContactsList;