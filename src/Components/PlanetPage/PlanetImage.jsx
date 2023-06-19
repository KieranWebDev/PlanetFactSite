import styled from 'styled-components';

const imageSizes = {
  mercury: {
    mobile: '111px',
    tablet: '184px',
    desktop: '290px',
  },
  venus: {
    mobile: '154px',
    tablet: '253px',
    desktop: '400px',
  },
  earth: {
    mobile: '173px',
    tablet: '285px',
    desktop: '450px',
  },
  mars: {
    mobile: '129px',
    tablet: '213px',
    desktop: '336px',
  },
  jupiter: {
    mobile: '224px',
    tablet: '369px',
    desktop: '582px',
  },
  saturn: {
    mobile: '256px',
    tablet: '422px',
    desktop: '665px',
  },
  uranus: {
    mobile: '176px',
    tablet: '290px',
    desktop: '458px',
  },
  neptune: {
    mobile: '173px',
    tablet: '285px',
    desktop: '450px',
  },
};

const StyledPlanetContainer = styled.section`
  grid-area: image;
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  position: relative;
  max-height: ${(props) => imageSizes[props.planetid].mobile};
  max-width: ${(props) => imageSizes[props.planetid].mobile};
`;

const StyledImageMain = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledImageSecondary = styled.img`
  height: 75px;
  width: 70px;
  position: absolute;
  left: 50%;

  top: ${(props) => {
    if (props.planetid === 'jupiter') {
      return '95%';
    } else if (props.planetid === 'saturn') {
      return '90%';
    } else {
      return '100%';
    }
  }};
  transform: translate(-50%, -50%);
`;

export default function PlanetImage({ displayedInfo, planetName, planetId }) {
  return (
    <StyledPlanetContainer>
      <StyledImageContainer planetid={planetId}>
        <StyledImageMain src={displayedInfo.picToDisplay} alt={planetName} />
        {displayedInfo.additionalSurfacePic && (
          <StyledImageSecondary
            planetid={planetId}
            src={displayedInfo.additionalSurfacePic}
            alt={planetName + 'surface'}
          />
        )}
      </StyledImageContainer>
    </StyledPlanetContainer>
  );
}
