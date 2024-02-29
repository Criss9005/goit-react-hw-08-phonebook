import styles from './ContactForm.module.css'
import React, { useState } from 'react'

export default function ContactForm({ handleUpdateContacts }) {
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  

  function handleAddNameNumber(e, param) {
    param === 'name'?  setName(e.target.value) : setNumber(e.target.value)
  }

 
  return (
    <form className={ styles.form}>
            <label className={styles.formLabel }>Name</label>
            <input
                className={styles.input}
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={(e)=> handleAddNameNumber(e, 'name')}
                required
            />
            <label className={styles.formLabel }>Number</label>
            <input className={styles.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={(e)=> handleAddNameNumber(e, 'number')}
                required
            />
          
        <button className={styles.btn} onClick={(e) => {
          handleUpdateContacts(e, number, name)
          
        }
        }>Add contact</button>
        </form>
  )
}
