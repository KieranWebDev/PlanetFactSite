import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Chevron from '../../assets/icon-chevron.svg';

const MobileMenuContainer = styled.nav`
  height: 100vh;
  width: 100%;
  z-index: 5;
  position: fixed;
  top: 60px;
  left: 0;
  background-color: var(--background-color);
  ${'' /* background-color: pink; */}
  display: flex;
  ${'' /* align-items: center; */}
  padding: 0 1.5rem;
`;

const UlMobile = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: space-between; */}
  ${'' /* gap: 20px; */}
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
  ${
    '' /* height: 100%;
  width: 100%; */
  }
  color: inherit;
  padding: 20px 0;
  font-weight: 700;
  font-size: 15px;
  ${'' /* line-height: var(--standard-line-height); */}
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
export default function MobileMenu(props) {
  return (
    <MobileMenuContainer>
      <UlMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/mercury">
            <Circle circlecolor={'--mercury'}></Circle> mercury
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/venus">
            <Circle circlecolor={'--venus'}></Circle> venus
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/earth">
            <Circle circlecolor={'--earth'}></Circle> earth
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/mars">
            <Circle circlecolor={'--mars'}></Circle> mars
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/jupiter">
            <Circle circlecolor={'--jupiter'}></Circle> jupiter
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/saturn">
            <Circle circlecolor={'--saturn'}></Circle> saturn
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/uranus">
            <Circle circlecolor={'--uranus'}></Circle> uranus
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>
        <LiMobile>
          <StyledLink onClick={props.toggleMobileMenu} to="/neptune">
            <Circle circlecolor={'--neptune'}></Circle> neptune
            <ChevronIcon src={Chevron} alt="" />
          </StyledLink>
        </LiMobile>

        {/* <LiMobile linkcolor={'--earth'}>
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
        </LiMobile> */}
      </UlMobile>
    </MobileMenuContainer>
  );
}
