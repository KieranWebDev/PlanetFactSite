import styled from 'styled-components';
import { imageSizes } from '../../breakPointAndImgSizes';
import { breakPoints } from '../../breakPointAndImgSizes';

const StyledPlanetContainer = styled.section`
  grid-area: image;
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakPoints.tablet}) {
    height: auto;
    min-height: 450px;
    max-height: 500px;
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  max-height: ${(props) => imageSizes[props.planetid].mobile};
  max-width: ${(props) => imageSizes[props.planetid].mobile};

  @media (min-width: ${breakPoints.tablet}) {
    max-height: ${(props) => imageSizes[props.planetid].tablet};
    max-width: ${(props) => imageSizes[props.planetid].tablet};
  }
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
