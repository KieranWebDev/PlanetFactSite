import styled from 'styled-components';
import { breakPoints } from '../../breakPointAndImgSizes';

const StyledPlanetPageContainer = styled.main`
  max-width: 1100px;
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

    ${'' /* CHANGE GAP PROPERTY LATER */}
    gap:0;
  }
  @media (min-width: ${breakPoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'image image titleInfo'
      'image image buttons'
      'statistics statistics statistics';
  }
`;

export default function PlanetsPageContainer({ children }) {
  return (
    <StyledPlanetPageContainer
    // key="yo"
    // initial={{ opacity: 0, y: -20 }}
    // animate={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -20 }}
    // transition={{ ease: 'easeOut', duration: 3 }}
    >
      {children}
    </StyledPlanetPageContainer>
  );
}
