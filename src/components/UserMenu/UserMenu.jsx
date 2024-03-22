import { logOut } from '../../redux/auth/actions';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

function UserMenu() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  

  return (
    <div className={ styles.usermenu}>
      <p>{ user.name}</p>
      <IconButton className={styles.btn } onClick={()=> dispatch(logOut())}><LogoutIcon/></IconButton>
    </div>
  )
}

export default UserMenu