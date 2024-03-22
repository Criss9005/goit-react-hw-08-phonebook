import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import styles from './Navigation.module.css'
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration:none;
  &.active {
    color: #1976d2;
  }
`

export default function NavBar() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <nav className={styles.nav}>
      <StyledLink  to="/">Home</StyledLink >
      {isLoggedIn
        ? <div className={styles.contact }>
          <StyledLink style={{paddingTop:10}} to="/contacts">Contacts</StyledLink >
          <UserMenu/>
          </div>
        : <AuthNav/>
       }
    </nav>
      
      
  )
}
