import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileMenuContainer = styled.nav`
  height: 100vh;
  width: 100%;
  z-index: 5;
  background-color: blue;
  position: fixed;
  top: 60px;
  left: 0;
`;

const UlMobile = styled.ul`
  color: var(--);
`;
const LiMobile = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export default function MobileMenu() {
  return (
    <MobileMenuContainer>
      <UlMobile>
        <LiMobile linkcolor={'--mercury'}>
          <StyledLink to="/mercury">MERCURY</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--venus'}>
          <StyledLink to="/venus">VENUS</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--earth'}>
          <StyledLink to="/earth">EARTH</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--mars'}>
          <StyledLink to="/mars">MARS</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--jupiter'}>
          <StyledLink to="/jupiter">JUPITER</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--saturn'}>
          <StyledLink to="/saturn">SATURN</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--uranus'}>
          <StyledLink to="/uranus">URANUS</StyledLink>
        </LiMobile>
        <LiMobile linkcolor={'--neptune'}>
          <StyledLink to="/neptune">NEPTUNE</StyledLink>
        </LiMobile>
      </UlMobile>
    </MobileMenuContainer>
  );
}
