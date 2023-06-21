import { breakPoints } from '../../Data/breakPointAndImgSizes';
import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: ${breakPoints.tablet}) {
    padding-right: 1.5em;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    border-bottom: none;
  }
  @media (min-width: ${breakPoints.desktop}) {
    padding-right: 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1em;
    border-bottom: none;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 5px solid transparent;
  padding: 25px 0 20px 0;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: var(--lg-letter-spacing);
  outline: none;

  &.overview {
    border-bottom-color: ${(props) =>
      props.infocategory === 'overview'
        ? `var(--${props.buttonbordercolor})`
        : 'none'};
  }

  &.structure {
    border-bottom-color: ${(props) =>
      props.infocategory === 'structure'
        ? `var(--${props.buttonbordercolor})`
        : 'none'};
  }

  &.geology {
    border-bottom-color: ${(props) =>
      props.infocategory === 'geology'
        ? `var(--${props.buttonbordercolor})`
        : 'none'};
  }

  @media (min-width: ${breakPoints.tablet}) {
    width: 85%;
    align-self: flex-end;
    padding: 1.5em 2em;
    text-align: left;
    color: var(--font-color);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      transition: all 0.25s ease-in-out;
    }

    &.overview {
      background-color: ${(props) =>
        props.infocategory === 'overview'
          ? `var(--${props.buttonbordercolor})`
          : 'inherit'};
      &:hover {
        background-color: ${(props) =>
          props.infocategory === 'overview'
            ? `var(--${props.buttonbordercolor})`
            : 'var(--button-hover)'};
      }
    }

    &.structure {
      background-color: ${(props) =>
        props.infocategory === 'structure'
          ? `var(--${props.buttonbordercolor})`
          : 'inherit'};
      &:hover {
        background-color: ${(props) =>
          props.infocategory === 'structure'
            ? `var(--${props.buttonbordercolor})`
            : 'var(--button-hover)'};
      }
    }

    &.geology {
      background-color: ${(props) =>
        props.infocategory === 'geology'
          ? `var(--${props.buttonbordercolor})`
          : 'inherit'};
      &:hover {
        background-color: ${(props) =>
          props.infocategory === 'geology'
            ? `var(--${props.buttonbordercolor})`
            : 'var(--button-hover)'};
      }
    }
  }

  @media (min-width: ${breakPoints.desktop}) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;
const StyledSmallScreenSpan = styled.span`
  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`;

const StyledLgScreenSpan = styled.span`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    display: inline;
  }
`;
const NumberSpan = styled.span`
  display: none;

  @media (min-width: ${breakPoints.tablet}) {
    display: inline;
    margin-right: 1.5em;
  }
`;

export default function InfoButtonsContainer({
  changeDisplayedInfo,
  displayedInfo,
  buttonBorderColor,
}) {
  return (
    <StyledContainer>
      <StyledButton
        className="overview"
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('overview', 'images_planet');
        }}
        infocategory={displayedInfo.infoCategory}
      >
        <StyledSmallScreenSpan>overview</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <NumberSpan>01</NumberSpan>overview
        </StyledLgScreenSpan>
      </StyledButton>

      <StyledButton
        className="structure"
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('structure', 'images_internal');
        }}
        infocategory={displayedInfo.infoCategory}
      >
        <StyledSmallScreenSpan>structure</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <NumberSpan>02</NumberSpan>internal structure
        </StyledLgScreenSpan>
      </StyledButton>

      <StyledButton
        className="geology"
        buttonbordercolor={buttonBorderColor}
        onClick={() => {
          changeDisplayedInfo('geology', 'images_geology');
        }}
        infocategory={displayedInfo.infoCategory}
      >
        <StyledSmallScreenSpan>surface</StyledSmallScreenSpan>
        <StyledLgScreenSpan>
          <NumberSpan>03</NumberSpan>surface geology
        </StyledLgScreenSpan>
      </StyledButton>
    </StyledContainer>
  );
}
