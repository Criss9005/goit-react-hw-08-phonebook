import React, {  useState } from 'react'
import axios from 'axios'

export default function Register() {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
   const handleForm = (e) => { 
    e.preventDefault()
    axios.post('https://connections-api.herokuapp.com/users/signup', {
      name: name,
      email: mail,
      password: password
      })
      .then(function (response) {
        alert('Usuario registrado con exito!')
        
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.reset()
  }
  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <input type="text" name='name' placeholder='name' required onChange={(e)=> setName(e.target.value)}/>
        <input type="text" name='mail' placeholder='mail' required onChange={(e)=> setMail(e.target.value)}/>
        <input type="password" name='password' placeholder='Password' required onChange={(e)=> setPassword(e.target.value)}/>
        <button >Login</button>
      </form>
    </div>
  )
}
