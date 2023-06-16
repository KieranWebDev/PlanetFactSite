import styled from 'styled-components';

const StyledContainer = styled.section`
  grid-area: image;
`;

const StyledImageMain = styled.img`
  height: 150px;
  width: 150px;
`;
const StyledImageSecondary = styled.img``;

export default function PlanetImage({ displayedInfo, planetName }) {
  return (
    <StyledContainer>
      <StyledImageMain src={displayedInfo.picToDisplay} alt={planetName} />
      {displayedInfo.additionalSurfacePic && (
        <StyledImageSecondary
          src={displayedInfo.additionalSurfacePic}
          alt={planetName + 'surface'}
        />
      )}
    </StyledContainer>
  );
}
