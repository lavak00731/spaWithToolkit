import { Nav } from './Nav';
import styled from 'styled-components';

const HeaderElem = styled.header`
    background: #000;
    padding: 1rem 2rem;
    max-width: 1440px;
    margin: 0 auto 2rem;
`
const MainLink = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: #FFF;
`;
  
export const Header = () => {
    return (
    <HeaderElem>
        <MainLink href="/">Site Name</MainLink>
        <Nav/>
    </HeaderElem>
  )
}
