import { NavLink } from 'react-router-dom';
import styles from './Authnav.module.css'
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration:none;
  &.active {
    color: #1976d2;
  }
`

export const AuthNav = () => {
  return (
      <div className={ styles.navi}>
      <StyledLink  to="/register">
        Register
      </StyledLink>
      <StyledLink  to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
