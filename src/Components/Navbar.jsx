import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles

const NavHeading = styled.h2`
  font-size: 1.5rem;
`;

const Header = styled.div`
  border-bottom: 1px solid black;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;
const Ul = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1em;
`;

const Li = styled.li`
  height: 100%;
  box-sizing: border-box;
  border-top: 5px solid transparent;
  min-width: 70px;
  text-align: center;
  &:hover {
    border-top: 5px solid red;
    border-top-color: ${(props) => props.linkColor};
  }
`;
const StyledLink = styled(Link)`
  padding: 2em 0;
  padding-top: padding: calc(2em - 5px);
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;

  &:hover {
    color: orange;
  }
`;
export default function Navbar() {
  return (
    <Header>
      <HeaderContainer>
        <NavHeading>THE PLANETS</NavHeading>
        <nav>
          <Ul>
            <Li linkColor={'blue'}>
              <StyledLink to="/mercury">Mercury</StyledLink>
            </Li>
            <Li linkColor={'red'}>
              <StyledLink to="/venus">Venus</StyledLink>
            </Li>
            <Li linkColor={'green'}>
              <StyledLink to="/earth">Earth</StyledLink>
            </Li>
            <Li linkColor={'yellow'}>
              <StyledLink to="/mars">Mars</StyledLink>
            </Li>
            <Li linkColor={'purple'}>
              <StyledLink to="/jupiter">Jupiter</StyledLink>
            </Li>
            <Li linkColor={'black'}>
              <StyledLink to="/saturn">Saturn</StyledLink>
            </Li>
            <Li linkColor={'orange'}>
              <StyledLink to="/uranus">Uranus</StyledLink>
            </Li>
            <Li linkColor={'pink'}>
              <StyledLink to="/neptune">Neptune</StyledLink>
            </Li>
          </Ul>
        </nav>
      </HeaderContainer>
    </Header>
  );
}
