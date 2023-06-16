import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: space-around;
  ${'' /* height: 50px; */}
  ${'' /* width: 100%; */}
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledButton = styled.button`
  ${'' /* flex-grow: 1; */}
  background-color: transparent;
  border: none;
  border-bottom: 5px solid transparent;
  padding: 25px 0 20px 0;
  ${'' /* color: var(--text-color); */}
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: var(--lg-letter-spacing);
  outline: none;
  ${'' /* letter-spacing: 1.9px; */}

  &:hover,
  &:focus,
  &:active {
    border-bottom: 5px solid red;
    border-bottom-color: ${(props) => `var(--${props.buttonbordercolor})`};
    opacity: 1;
    color: var(--text-color);
  }
`;
const StyledSmallScreenSpan = styled.span`
  @media (min-width: 550px) {
    display: none;
  }
`;

const StyledLgScreenSpan = styled.span`
  display: none;

  @media (min-width: 550px) {
    display: inline;
  }
`;
const NumberSpan = styled.span`
  display: none;

  @media (min-width: 550px) {
    display: inline;
  }
`;

export default function InfoButtonsContainer({
  changeDisplayedInfo,
  buttonBorderColor,
}) {
  // console.log(buttonBorderColor);
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, [buttonBorderColor]);
  return (
    <StyledContainer>
      <StyledButton
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('overview', 'images_planet');
        }}
        ref={buttonRef}
      >
        <StyledSmallScreenSpan>overview</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <NumberSpan>01</NumberSpan>overview
        </StyledLgScreenSpan>
      </StyledButton>

      <StyledButton
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('structure', 'images_internal');
        }}
      >
        <StyledSmallScreenSpan>structure</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <NumberSpan>02</NumberSpan>internal structure
        </StyledLgScreenSpan>
      </StyledButton>

      <StyledButton
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('geology', 'images_geology');
        }}
      >
        <StyledSmallScreenSpan>surface</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <NumberSpan>03</NumberSpan>surface geology
        </StyledLgScreenSpan>
      </StyledButton>
    </StyledContainer>
  );
}
