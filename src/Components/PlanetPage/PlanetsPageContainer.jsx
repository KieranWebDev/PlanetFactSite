import styled from 'styled-components';
import { breakPoints } from '../../breakPointAndImgSizes';

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
  gap: 1.5rem;

  @media (min-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'image image'
      'titleInfo buttons'
      'statistics statistics';
  }
  @media (min-width: ${breakPoints.desktop}) {
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
