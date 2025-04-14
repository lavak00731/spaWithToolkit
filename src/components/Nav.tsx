import { NavLink as BaseNavLink } from 'react-router';
import styled from 'styled-components';
import { device } from '../styles/breakpoints'; 

const NavElement = styled.nav`
  position: absolute; 
  top: 5.5rem;
  right: 0;
  width: 30%;
  @media ${device.md} {
    display: block!important;
    position: static;
    width: 100%;
  }
`
const NavList = styled.ul`
  color: #FFF;
  display: flex;
  flex-direction: column;  
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  list-style: none;
  padding: 1.5rem 2rem;
  gap: 0.75rem;
  align-items: space-between;
  @media ${device.md} {
    flex-direction: row;
    gap: 2rem;
  }
`

const NavListItem = styled.li`
  &:last-of-type {
    @media ${device.md} {
      margin-left: auto;
    }
  }
`

const NavLink = styled(BaseNavLink)`
  color: #FFF;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid #FFF;
  display: block;
  text-align: center;
  border-radius: 0.5rem;
`

interface NavProps {
  isLogged: boolean;
  userName: string | null;
}

export const Nav = ({ isLogged, userName }: NavProps) => {
  if(!isLogged) {
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
  <NavElement>      
    <NavList>
      <NavListItem><NavLink to="/">Home</NavLink></NavListItem>
      <NavListItem><NavLink to="/cart">Cart</NavLink></NavListItem>
      <NavListItem><NavLink to="/favorites">Favourites</NavLink></NavListItem>
      <NavListItem><NavLink to="/user">Hello, {userName}</NavLink></NavListItem>
    </NavList>
  </NavElement>
}
