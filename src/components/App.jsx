import React, { Component } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'
export default class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    filteredContacts: [],
          
  };

  handleUpdateContacts = (e, number, name) => {
    e.preventDefault();
       
      this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
        ? alert(`${name} is already in contacts.`)
        : this.setState(prevState => ({ contacts: [...prevState.contacts, { id: `id-${this.state.contacts.length + 1}`, name: name, number: number }] }),() => { 
      localStorage.setItem("PHONEBOOK-DATA", JSON.stringify(this.state.contacts))
    } );
    
    
  };
 
  handleFilter = (e) => {
    this.setState({
      filteredContacts:
        this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
    })
    
    this.setState({ filter: e.target.value })
    
  }
    
  handleDelete = (e, id) => { 
    let newContacts = this.state.contacts
    //console.log('deleted', id)
    this.state.contacts.forEach((contact, index) => { 
      if (contact.id === id) {
        newContacts.splice(index, 1)
        console.log(newContacts)
        
      }
      this.setState({contacts: newContacts}, () => { 
      localStorage.setItem("PHONEBOOK-DATA", JSON.stringify(this.state.contacts))
    })
    })
    
 
  }

  componentDidMount() { 
    const data = localStorage.getItem("PHONEBOOK-DATA")
    if(data){ 
      this.setState({ contacts: JSON.parse(data)})
    }
  }

  render() {
    
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
        paddingLeft: 40
      }}>
        <h1>Phonebook</h1>
        <ContactForm handleUpdateContacts={this.handleUpdateContacts}
          contact={this.state.contacts}
        />      
        <h2>Contacts</h2>
        <Filter filterValue={this.filter}
          contacts={this.state.contacts}
          handleFilter={this.handleFilter}
        />
        <ContactList contacts={this.state.contacts}
          filteredContacts={this.state.filteredContacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete }
        />
             
        
      </div>
    )
  }
}
