import React, { useState } from 'react'
import { Button, TextField, OutlinedInput, IconButton, InputLabel, InputAdornment, FormControl } from '@mui/material'
import {VisibilityOff,Visibility  } from '@mui/icons-material';
import { useDispatch} from 'react-redux';
import { logIn } from '../../redux/auth/actions';
import style from './Login.module.css'


function Home() {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch()

  const handleForm = (e) => { 
    e.preventDefault()
    dispatch(logIn({ email: mail, password: password }))
    e.target.reset()
  }

  

  return (
    <form className={ style.box} onSubmit={(e) => handleForm(e)}>
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

        
      <Button className={style.btn }type="submit" variant="contained">Login</Button>
      </form>
        
  )
}

export default Home