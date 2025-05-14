import { Nav } from './Nav';
import styled from 'styled-components';
import { device } from '../styles/breakpoints'; 
import showHideFunc from '../utilities/showHideFunc';

const HeaderElem = styled.header`
    background: #000;
    padding: 1rem 2rem;
    max-width: 1440px;
    margin: 0 auto 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
`
const MainLink = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: #FFF;
`;
  
const ShowHideBtn = styled.button`
  background: #FFF;
  border: 1px solid #000;
  color: #000;
  padding: 1rem; 
  border-radius: 0.5rem;
  box-shadow: 1px 0 0 2px rgba(242,38,19, 0.75);
  &[aria-expanded="false"] + nav {
    display: none
  }
  &[aria-expanded="true"] + nav {
    display: block;
  }
  @media ${device.md} {
    display: none;
  }
`
export const Header = () => {
    return (
    <HeaderElem>
        <MainLink href="/">Site Name</MainLink>
        <ShowHideBtn aria-expanded="false" onClick={(e)=>{showHideFunc(e)}}>Menu</ShowHideBtn>
        <Nav isLogged={false} userName={null}/>
    </HeaderElem>
  )
}
