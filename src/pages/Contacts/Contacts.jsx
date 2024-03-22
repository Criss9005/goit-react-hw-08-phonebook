import { filterUser } from '../../redux/users/actions'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getContacts } from '../../redux/users/usersSlice'



export default function App() {
  
  const users = useSelector((state) => state.users.contacts.items)
  const  isLoading = useSelector((state) => state.users.contacts.isLoading)
  const [filteredContact, setFilteredContacts]= useState('')
  const dispatch = useDispatch()
  const [token,setToken]=useState('')

  useEffect(() => { 
    
      dispatch(getContacts())
      setToken(localStorage.getItem("token"))
  
  }, [dispatch])
  
  
  function handleFilter(e){ 
    dispatch(filterUser(e.target.value))
    setFilteredContacts(users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
      )
    
  }

 
return (
  <>{token
    ? <div style={{
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
    {users
      ? (isLoading) ? <h1>Is Loading...</h1> : <ContactList filteredContact={filteredContact } />
      : <h1>No Tienes contactos para mostrar</h1>
    }
    
    </div>

    : <h1>Por favor registrate o inicia Sesion</h1>

  }
    
    </>
  )
}
