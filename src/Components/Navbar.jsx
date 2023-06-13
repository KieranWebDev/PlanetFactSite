import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HamburgerIcon from '../assets/icon-hamburger.svg';

// import '../index.css';

// styles

const Header = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);

  @media (min-width: 850px) {
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  @media (min-width: 550px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1em;
    max-width: 1600px;
    margin: 0 auto;
  }

  @media (min-width: 850px) {
    padding: 0 2em;
    justify-content: space-between;
  }
`;
const NavHeading = styled.h2`
  font-weight: 400;
  @media (min-width: 550px) {
    flex-basis: 100%;
    text-align: center;
    padding: 1.5em 0 0.5em 0;
  }

  @media (min-width: 850px) {
    flex-basis: auto;
    font-size: 1.5rem;
    letter-spacing: var(--small-line-spacing);
    padding: 0;
  }
`;

const Ul = styled.ul`
  display: none;
  @media (min-width: 550px) {
    height: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 1em;
  }
`;

const Li = styled.li`
  @media (min-width: 550px) {
    height: 100%;
    box-sizing: border-box;
    border-top: 5px solid transparent;

    text-align: center;
    opacity: 0.75;

    &:hover,
    &:focus,
    &:active {
      border-top: 5px solid red;
      border-top-color: ${(props) => `var(${props.linkcolor})`};
      opacity: 1;
    }
  }
  @media (min-width: 800px) {
    min-width: 70px;
  }
`;

const StyledLink = styled(Link)`
  @media (min-width: 550px) {
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
      opacity: 1;
    }
  }
`;

const HamburgerButton = styled.button`
  background: inherit;
  border: none;
  @media (min-width: 550px) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <Header>
      <HeaderContainer>
        <NavHeading>THE PLANETS</NavHeading>
        <nav>
          <Ul>
            <Li linkcolor={'--mercury'}>
              <StyledLink to="/mercury">MERCURY</StyledLink>
            </Li>
            <Li linkcolor={'--venus'}>
              <StyledLink to="/venus">VENUS</StyledLink>
            </Li>
            <Li linkcolor={'--earth'}>
              <StyledLink to="/earth">EARTH</StyledLink>
            </Li>
            <Li linkcolor={'--mars'}>
              <StyledLink to="/mars">MARS</StyledLink>
            </Li>
            <Li linkcolor={'--jupiter'}>
              <StyledLink to="/jupiter">JUPITER</StyledLink>
            </Li>
            <Li linkcolor={'--saturn'}>
              <StyledLink to="/saturn">SATURN</StyledLink>
            </Li>
            <Li linkcolor={'--uranus'}>
              <StyledLink to="/uranus">URANUS</StyledLink>
            </Li>
            <Li linkcolor={'--neptune'}>
              <StyledLink to="/neptune">NEPTUNE</StyledLink>
            </Li>
          </Ul>

          <HamburgerButton>
            <img src={HamburgerIcon} alt="" />
          </HamburgerButton>
        </nav>
      </HeaderContainer>
    </Header>
  );
}
