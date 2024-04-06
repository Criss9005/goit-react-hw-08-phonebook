import { useState } from 'react'
import styles from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/users/actions'
const Joi = require('joi');


const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    number: Joi.number()
        .integer(),
})


export default function ContactForm() {
  const [name, setName] = useState('')
  const [number, setNumber]= useState('')
  const users = useSelector((state)=> state.users.contacts.items)
  const dispatch = useDispatch()

  const handleUpdateContacts = (e) => { 
    e.preventDefault()
    const form = e.target.form
    
    const { error} = schema.validate({ name: name, number: number });
    if (error) {
      alert(error.message)
    }
    else { 
      if (users.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts.`)
    
      } else {
        dispatch(addContact(name, number))
      }
      
      form.reset()
    
  }



  }

  


  return (
    <form className={ styles.form}>
            <label className={styles.formLabel }>Name</label>
            <input
                className={styles.input}
                type="text"
                name="name"
                required
                onChange={(e)=> setName(e.target.value)}
            />
            <label className={styles.formLabel }>Number</label>
            <input className={styles.input}
                type="tel"
                name="number"
                onChange={(e)=> setNumber(e.target.value)}
                required
            />
          
        <button className={styles.btn} onClick={(e) => {handleUpdateContacts(e)}
        }>Add contact</button>
        </form>
  )
}
