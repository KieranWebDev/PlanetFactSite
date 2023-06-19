import styled from 'styled-components';

const StyledContainer = styled.section`
  grid-area: statistics;
  padding: 0 1.5em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledStatInfo = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: var(--background-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1.5em;
  padding-bottom: calc(0.8em + 3px);
  text-transform: uppercase;

  & span:first-of-type {
    color: var(--secondary-font-color);
    font-size: 10px;
    letter-spacing: 0.7px;
  }

  & span:nth-of-type(2) {
    font-size: calc(var(--font-size-reg) + 4px);
    font-family: var(--title-font);
  }
`;

export default function StatisticsContainer({ planetInfo }) {
  return (
    <StyledContainer>
      <StyledStatInfo>
        <span>rotation time</span>
        <span>{planetInfo.rotation}</span>
      </StyledStatInfo>
      <StyledStatInfo>
        <span>revolution time</span>
        <span>{planetInfo.revolution}</span>
      </StyledStatInfo>
      <StyledStatInfo>
        <span>radius</span>
        <span>{planetInfo.radius}</span>
      </StyledStatInfo>
      <StyledStatInfo>
        <span>Average temp</span>
        <span>{planetInfo.temperature}</span>
      </StyledStatInfo>

      {/* <StyledStatInfo>radius- {planetInfo.radius}</StyledStatInfo>
      <StyledStatInfo>revolution- {planetInfo.revolution}</StyledStatInfo>
      <StyledStatInfo>temp- {planetInfo.temperature}</StyledStatInfo> */}
    </StyledContainer>
  );
}
