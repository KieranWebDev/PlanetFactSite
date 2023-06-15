export default function InfoButtonsContainer({ changeDisplayedInfo }) {
  return (
    <div className="buttons-container">
      <button
        onClick={() => {
          changeDisplayedInfo('overview', 'planetFull');
        }}
        className="button"
      >
        01 overview
      </button>
      <button
        onClick={() => {
          changeDisplayedInfo('structure', 'planetInternal');
        }}
        className="button"
      >
        02 internal structure
      </button>
      <button
        onClick={() => {
          changeDisplayedInfo('geology', 'planetGeology');
        }}
        className="button"
      >
        03 surface geology
      </button>
    </div>
  );
}
