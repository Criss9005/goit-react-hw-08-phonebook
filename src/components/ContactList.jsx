import React, { Component } from 'react'
import styles from './ContactList.module.css'
export default class ContactList extends Component {
    render() {
        const { contacts, filteredContacts, filter, handleDelete}= this.props
    return (
      <ul>
        {filter.length <=0 ?
          contacts.map((contact) => (
            <li key={contact.id} >{contact.name}: {contact.number}
              <button className={styles.btn}
                onClick={(e) => handleDelete(e, contact.id)}
              >Delete</button>
            </li>
          ))
          : filteredContacts.map((contact) => (
            <li key={contact.id} >{contact.name}: {contact.number}
              <button className={styles.btn}
                onClick={(e) => handleDelete(e, contact.id)}
              >Delete</button>
            </li>
          ))
        }
        
      </ul>
      
    )
  }
}
