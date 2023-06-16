import styled from 'styled-components';

const StyledPlanetPageContainer = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'buttons'
    'image'
    'titleInfo'
    'statistics';
  gap: 2rem;

  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'image image'
      'titleInfo buttons'
      'statistics statistics';
  }
  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'image titleInfo'
      'image buttons'
      'statistics statistics';
  }
`;

export default function PlanetsPageContainer({ children }) {
  return <StyledPlanetPageContainer>{children}</StyledPlanetPageContainer>;
}
