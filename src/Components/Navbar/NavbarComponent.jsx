import { useState } from 'react';
import styled from 'styled-components';
// device breakpoints
import { breakPoints } from '../../breakPointAndImgSizes';
// icons
import HamburgerIcon from '../../assets/icon-hamburger.svg';
// components
import MobileMenuComponent from './MobileMenuComponent';
import DesktopMenuComponent from './DesktopMenuComponent';

// STYLES

const Header = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);
  ${'' /* fixes navbar in place when mobile menu displays  */}
  position: ${(props) => (props.mobilemenu === 'true' ? 'fixed' : 'initial')};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  width: 100%;
  top: 0;
  left: 0;
  @media (min-width: ${breakPoints.tablet}) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1em;
    max-width: 1600px;
    margin: 0 auto;
  }

  @media (min-width: ${breakPoints.navDesktop}) {
    padding: 0 2em;
    justify-content: space-between;
  }
`;
const NavHeading = styled.h2`
  font-weight: 400;
  font-size: 28px;
  @media (min-width: ${breakPoints.tablet}) {
    flex-basis: 100%;
    text-align: center;
    padding: 1em 0 0.5em 0;
  }

  @media (min-width: ${breakPoints.navDesktop}) {
    flex-basis: auto;
    font-size: 1.5rem;
    letter-spacing: var(--small-line-spacing);
    padding: 0;
  }
`;

const HamburgerButton = styled.button`
  background: inherit;
  border: none;
  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`;

export default function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenu((prev) => !prev);
  }

  return (
    <>
      <Header mobilemenu={isMobileMenu.toString()}>
        <HeaderContainer>
          <NavHeading>THE PLANETS</NavHeading>
          <nav>
            <DesktopMenuComponent />
            <HamburgerButton onClick={toggleMobileMenu}>
              <img src={HamburgerIcon} alt="" />
            </HamburgerButton>
          </nav>
        </HeaderContainer>
      </Header>
      {isMobileMenu && (
        <MobileMenuComponent toggleMobileMenu={toggleMobileMenu} />
      )}
    </>
  );
}
