import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/actions'
import { Button, TextField, OutlinedInput, IconButton, InputLabel, InputAdornment, FormControl } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import style from './Register.module.css'

export default function Register() {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  
   const handleForm = (e) => { 
    e.preventDefault()
     dispatch(register({
       email: mail,
       password: password,
       name: name
     }))
     e.target.reset()
     
  }

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      

      <form className={style.box} onSubmit={(e) => handleForm(e)}>
        <TextField
          label="Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '30ch' }}
          name='name'required onChange={(e) => setName(e.target.value)}
        />
         <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '30ch' }}
          name='email'required onChange={(e) => setMail(e.target.value)}
        />
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
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








    </div>
  )
}


