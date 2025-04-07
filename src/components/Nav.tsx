import { NavLink as BaseNavLink } from 'react-router';
import styled from 'styled-components';

const NavElement = styled.nav`
  position: relative;
`

const NavList = styled.ul`
  color: #FFF;
  display: flex;
  flex-direction: column;
  position: absolute; 
  top: 1rem;
  left: -2rem;
  background: rgba(0, 0, 0, 0.8);
  width: calc( 100% + 4rem );
  list-style: none;
  padding: 1.5rem 2rem;
`
const NavLink = styled(BaseNavLink)`
  color: #FFF;
`
export const Nav = () => {

  return (
    <NavElement>
      <NavList>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </NavList>
    </NavElement>
  )
}
