import styles from './ContactList.module.css'
import React, { useState } from 'react'

export default function ContactList({ contacts, filteredContacts, filter, handleDelete }) {
  const [deleted, setDeleted] = useState(0)

 
  const listContacts = contacts.map(element => { 
        
        return (<li key={element.id} >{element.name}: {element.number}
          <button className={styles.btn}
            onClick={(e) => { 
              handleDelete(e, element.id)
              setDeleted(deleted+1)
            }}
          >Delete</button>
        </li>)
  })

  const listFiltered = filteredContacts.map(element => { 
        
        return (<li key={element.id} >{element.name}: {element.number}
          <button className={styles.btn}
            onClick={(e) => { 
              handleDelete(e, element.id)
              setDeleted(deleted+1)
            }}
          >Delete</button>
        </li>)
  })


  return (
    <ul>{filter.length <= 0
      ?listContacts
      :listFiltered
      }</ul>
  )
}
