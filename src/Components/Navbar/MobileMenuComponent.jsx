import styled from 'styled-components';
import { Link } from 'react-router-dom';
//icon image
import Chevron from '../../assets/icon-chevron.svg';

// STYLES
const MobileMenuContainer = styled.nav`
  height: 100vh;
  width: 100%;
  z-index: 5;
  position: fixed;
  top: 60px;
  left: 0;
  background-color: var(--background-color);
  display: flex;
  padding: 0 1.5rem;
  padding-top: 30px;
`;

const UlMobile = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const LiMobile = styled.li`
  list-style-type: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: inherit;
  padding: 20px 0;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1.3px;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => `var(${props.circlecolor})`};
`;

const ChevronIcon = styled.img`
  margin-left: auto;
`;
export default function MobileMenuComponent(props) {
  return (
    <MobileMenuContainer>
      <UlMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/mercury">
            <Circle circlecolor={'--mercury'}></Circle> mercury
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/venus">
            <Circle circlecolor={'--venus'}></Circle> venus
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/earth">
            <Circle circlecolor={'--earth'}></Circle> earth
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/mars">
            <Circle circlecolor={'--mars'}></Circle> mars
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/jupiter">
            <Circle circlecolor={'--jupiter'}></Circle> jupiter
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/saturn">
            <Circle circlecolor={'--saturn'}></Circle> saturn
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/uranus">
            <Circle circlecolor={'--uranus'}></Circle> uranus
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/neptune">
            <Circle circlecolor={'--neptune'}></Circle> neptune
            <ChevronIcon src={Chevron} alt="arrow-icon" />
          </StyledLink>
        </LiMobile>
      </UlMobile>
    </MobileMenuContainer>
  );
}
