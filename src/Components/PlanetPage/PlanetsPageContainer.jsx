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
`;

export default function PlanetsPageContainer({ children }) {
  return <StyledPlanetPageContainer>{children}</StyledPlanetPageContainer>;
}
