import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-area: buttons;
`;

export default function InfoButtonsContainer({ changeDisplayedInfo }) {
  return (
    <StyledContainer className="buttons-container">
      <button
        onClick={() => {
          changeDisplayedInfo('overview', 'images_planet');
        }}
        className="button"
      >
        01 overview
      </button>
      <button
        onClick={() => {
          changeDisplayedInfo('structure', 'images_internal');
        }}
        className="button"
      >
        02 internal structure
      </button>
      <button
        onClick={() => {
          changeDisplayedInfo('geology', 'images_geology');
        }}
        className="button"
      >
        03 surface geology
      </button>
    </StyledContainer>
  );
}
