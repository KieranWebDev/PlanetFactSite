import styled from 'styled-components';
import { Link } from 'react-router-dom';

// STYLES
const UlDesktop = styled.ul`
  display: none;

  @media (min-width: 550px) {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    gap: 1em;
  }
`;

const LiDesktop = styled.li`
  @media (min-width: 550px) {
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
    text-decoration: none;
    display: block;
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

export default function DesktopMenuComponent() {
  return (
    <UlDesktop>
      <LiDesktop linkcolor={'--mercury'}>
        <StyledLink to="/mercury">MERCURY</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--venus'}>
        <StyledLink to="/venus">VENUS</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--earth'}>
        <StyledLink to="/earth">EARTH</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--mars'}>
        <StyledLink to="/mars">MARS</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--jupiter'}>
        <StyledLink to="/jupiter">JUPITER</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--saturn'}>
        <StyledLink to="/saturn">SATURN</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--uranus'}>
        <StyledLink to="/uranus">URANUS</StyledLink>
      </LiDesktop>
      <LiDesktop linkcolor={'--neptune'}>
        <StyledLink to="/neptune">NEPTUNE</StyledLink>
      </LiDesktop>
    </UlDesktop>
  );
}
