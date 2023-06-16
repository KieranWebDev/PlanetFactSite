export default function PlanetImage({ displayedInfo, planetName }) {
  return (
    <div>
      <img src={displayedInfo.picToDisplay} alt={planetName} />
      {displayedInfo.additionalSurfacePic && (
        <img
          src={displayedInfo.additionalSurfacePic}
          alt={planetName + 'surface'}
        />
      )}
    </div>
  );
}
