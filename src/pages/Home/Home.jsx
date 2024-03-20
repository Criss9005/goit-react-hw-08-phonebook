import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, TextField, OutlinedInput, IconButton, InputLabel, InputAdornment, FormControl } from '@mui/material'
import {VisibilityOff,Visibility  } from '@mui/icons-material';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Home() {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  useEffect(() => { 
    const token = localStorage.getItem("token")
    if (token) { 
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios.get('https://connections-api.herokuapp.com/users/current')
      .then(function (response) {
       setUser(response.data)
      })
      .catch(function (error) {
        console.log(error)
      });

    }
  },[])

  const handleForm = (e) => { 
    e.preventDefault()
    setIsLoading(true)
    axios.post('https://connections-api.herokuapp.com/users/login', {
      email: mail,
      password: password
      })
      .then(function (response) {
        setUser(response.data.user)
        setIsLoading(false)
        localStorage.setItem("token", response.data.token)
      })
      .catch(function (error) {
        setIsLoading(false)
        alert('usuario o contrasena incorrecta')
      });
    e.target.reset()
  }


 
  
  return (
    <div>
      <UserMenu></UserMenu>
      {(user === '') ? <form onSubmit={(e) => handleForm(e)}>
         <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          name='mail'required onChange={(e) => setMail(e.target.value)}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name='password' required onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        
        <Button  type="submit" variant="contained">Login</Button>
      </form>
        : <>
          <h2>Bienvenid@ {user.name}</h2>
          <img src="https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/09/desactivar-datos-moviles-00.jpg" alt="fonde de contactos" />
        </>}
      
      {isLoading && <h1>Loading please wait...</h1> }  
    </div>
  )
}
