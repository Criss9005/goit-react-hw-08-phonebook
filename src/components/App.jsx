import { filterUser } from '../redux/actions'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'



export default function App() {
  
  const users = useSelector((state) => state.users.contacts)
  const [filteredContact, setFilteredContacts]= useState('')
  const dispatch = useDispatch()
 
  
  function handleFilter(e){ 
    
    dispatch(filterUser(e.target.value))
    setFilteredContacts(users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
      )
    
  }

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
        <ContactForm />      
        <h2>Contacts</h2>
      <Filter handleFilter={handleFilter}/>
      <ContactList filteredContact={filteredContact } />
      
             
        
      </div>
  )
}
