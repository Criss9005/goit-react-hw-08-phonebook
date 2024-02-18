import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'
import React, { useEffect, useState } from 'react'

export default function App() {
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  const [filter, setFilter] = useState('')
  const [filteredContacts, setFilteredContacts] = useState([])
  
  function handleUpdateContacts(e, number, name) {
    
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`)

    } else { 
       contacts.push({id:`id-${contacts.length + 1}`, name: name, number:number })
      localStorage.setItem("PHONEBOOK-DATA", JSON.stringify(contacts))
      return setContacts(contacts)

    }
    
  }

  function handleFilter(e) {
    setFilteredContacts(contacts.filter((contact) =>
          contact.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
    )
    setFilter(e.target.value)
    
  }
 
  function handleDelete(e, id) {
    let newContacts = contacts
    //console.log('deleted', id)
    contacts.forEach((contact, index) => { 
      if (contact.id === id) {
        newContacts.splice(index, 1)       
      }
      setContacts(newContacts)
      localStorage.setItem("PHONEBOOK-DATA", JSON.stringify(contacts))
    
    })
    
  }
 
  useEffect(() => { 
    let data = localStorage.getItem("PHONEBOOK-DATA")
         if (JSON.parse(data) !== contacts ) {
        setContacts(JSON.parse(data))        
      }    
  }, [])


  
   

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
        <ContactForm handleUpdateContacts={handleUpdateContacts}
          contact={contacts}
        />      
        <h2>Contacts</h2>
        <Filter filterValue={filter}
          contacts={contacts}
          handleFilter={handleFilter}
        />
        <ContactList contacts={contacts}
          filteredContacts={filteredContacts}
          filter={filter}
          handleDelete={handleDelete}
      />
      
             
        
      </div>
  )
}
