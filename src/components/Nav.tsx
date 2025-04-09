import { NavLink as BaseNavLink } from 'react-router';
import styled from 'styled-components';

const NavElement = styled.nav`
  position: absolute; 
  top: 5.5rem;
  left: 0;
  width: 100%;
`
const NavList = styled.ul`
  color: #FFF;
  display: flex;
  flex-direction: column;  
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  list-style: none;
  padding: 1.5rem 2rem;
`

const NavListItem = styled.li`
  margin: 0 0 0.5rem;
  &:last-of-type {
    margin: 0;
  }
`

const NavLink = styled(BaseNavLink)`
  color: #FFF;
`

export const Nav = () => {

  return (
    <NavElement>      
      <NavList>
        <NavListItem><NavLink to="/">Home</NavLink></NavListItem>
        <NavListItem><NavLink to="/cart">Cart</NavLink></NavListItem>
        <NavListItem><NavLink to="/register">Register</NavLink></NavListItem>
        <NavListItem><NavLink to="/login">Login</NavLink></NavListItem>
      </NavList>
    </NavElement>
  )
}
