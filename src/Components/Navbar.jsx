import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import '../index.css';

// styles

const Header = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);
`;
const NavHeading = styled.h2`
  font-size: 1.5rem;
  letter-spacing: var(--small-line-spacing);
  font-weight: 400;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  max-width: 1600px;
  margin: 0 auto;
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
  opacity: 0.75;
  &:hover {
    border-top: 5px solid red;
    border-top-color: ${(props) => `var(${props.linkColor})`};
    opacity: 1;
  }
`;
const StyledLink = styled(Link)`
  padding: 2em 0;
  ${'' /* padding-top: calc(2em - 5px); */}
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-family: var(--text-font);
  font-size: 14px;
  letter-spacing: 1px;
  line-height: var(--standard-line-height);
  font-weight: 500;

  &:hover {
    ${'' /* color: orange; */}
    opacity: 1;
  }
`;
export default function Navbar() {
  return (
    <Header>
      <HeaderContainer>
        <NavHeading>THE PLANETS</NavHeading>
        <nav>
          <Ul>
            <Li linkColor={'--mercury'}>
              <StyledLink to="/mercury">MERCURY</StyledLink>
            </Li>
            <Li linkColor={'--venus'}>
              <StyledLink to="/venus">VENUS</StyledLink>
            </Li>
            <Li linkColor={'--earth'}>
              <StyledLink to="/earth">EARTH</StyledLink>
            </Li>
            <Li linkColor={'--mars'}>
              <StyledLink to="/mars">MARS</StyledLink>
            </Li>
            <Li linkColor={'--jupiter'}>
              <StyledLink to="/jupiter">JUPITER</StyledLink>
            </Li>
            <Li linkColor={'--saturn'}>
              <StyledLink to="/saturn">SATURN</StyledLink>
            </Li>
            <Li linkColor={'--uranus'}>
              <StyledLink to="/uranus">URANUS</StyledLink>
            </Li>
            <Li linkColor={'--neptune'}>
              <StyledLink to="/neptune">NEPTUNE</StyledLink>
            </Li>
          </Ul>
        </nav>
      </HeaderContainer>
    </Header>
  );
}
