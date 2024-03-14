import { filterUser } from '../redux/actions'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getContacts } from '../redux/usersSlice'






export default function App() {
  
  const users = useSelector((state) => state.users.contacts.items)
  const  isLoading = useSelector((state) => state.users.contacts.isLoading)
  const [filteredContact, setFilteredContacts]= useState('')
  const dispatch = useDispatch()
  
  useEffect(() => { 
    dispatch(getContacts())
  },[dispatch])
  
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
     <Filter handleFilter={handleFilter} />
     { (isLoading)? <h1>Is Loading...</h1>: <ContactList filteredContact={filteredContact } />}
    </div>
  )
}
