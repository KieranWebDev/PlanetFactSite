import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { breakPoints } from '../../breakPointAndImgSizes';

// STYLES
const UlDesktop = styled.ul`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    gap: 1em;
  }
`;

const LiDesktop = styled.li`
  @media (min-width: ${breakPoints.tablet}) {
    ${'' /* border-top: 5px solid transparent; */}
    text-align: center;
    ${'' /* opacity: 0.75; */}

    ${
      '' /* &:hover,
    &:focus,
    &:active {
      border-top: 5px solid red;
      border-top-color: ${(props) => `var(${props.linkcolor})`};
      opacity: 1;
    } */
    }
  }

  @media (min-width: ${breakPoints.navDesktop}) {
    min-width: 70px;
  }
`;

const StyledLink = styled(Link)`
  @media (min-width: ${breakPoints.tablet}) {
    text-transform: uppercase;
    border-top: 5px solid transparent;
    padding: 2em 0;
    text-decoration: none;
    display: block;
    color: inherit;
    font-family: var(--text-font);
    font-size: 14px;
    letter-spacing: 1px;
    line-height: var(--standard-line-height);
    font-weight: 500;
    opacity: 0.75;

    &:hover {
      opacity: 1;
      border-top-color: ${(props) => `var(${props.linkcolor})`};
      transition: all 0.25s ease-in-out;
    }

    &.active {
      border-top: 5px solid red;
      border-top-color: ${(props) => `var(${props.linkcolor})`};
      opacity: 1;
    }
  }
`;

export default function DesktopMenuComponent() {
  const location = useLocation();

  return (
    <UlDesktop>
      <LiDesktop>
        <StyledLink
          to="/mercury"
          linkcolor={'--mercury'}
          className={location.pathname === '/mercury' ? 'active' : ''}
        >
          mercury
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/venus"
          linkcolor={'--venus'}
          className={location.pathname === '/venus' ? 'active' : ''}
        >
          Venus
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/earth"
          linkcolor={'--earth'}
          className={location.pathname === '/earth' ? 'active' : ''}
        >
          Earth
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/mars"
          linkcolor={'--mars'}
          className={location.pathname === '/mars' ? 'active' : ''}
        >
          Mars
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/jupiter"
          linkcolor={'--jupiter'}
          className={location.pathname === '/jupiter' ? 'active' : ''}
        >
          Jupiter
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/saturn"
          linkcolor={'--saturn'}
          className={location.pathname === '/saturn' ? 'active' : ''}
        >
          Saturn
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/uranus"
          linkcolor={'--uranus'}
          className={location.pathname === '/uranus' ? 'active' : ''}
        >
          Uranus
        </StyledLink>
      </LiDesktop>

      <LiDesktop>
        <StyledLink
          to="/neptune"
          linkcolor={'--neptune'}
          className={location.pathname === '/neptune' ? 'active' : ''}
        >
          Neptune
        </StyledLink>
      </LiDesktop>

      {/* 
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
      </LiDesktop> */}
    </UlDesktop>
  );
}
