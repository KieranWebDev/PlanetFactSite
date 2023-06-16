import styled from 'styled-components';

const StyledContainer = styled.section`
  grid-area: statistics;
`;

export default function StatisticsContainer({ planetInfo }) {
  return (
    <StyledContainer>
      <p>rotation- {planetInfo.rotation}</p>
      <p>radius- {planetInfo.radius}</p>
      <p>revolution- {planetInfo.revolution}</p>
      <p>temp- {planetInfo.temperature}</p>
    </StyledContainer>
  );
}
