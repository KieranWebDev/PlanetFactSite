export default function TitleAndInfoContainer({ planetName, displayedInfo }) {
  console.log(displayedInfo);

  return (
    <div>
      <h1>{planetName}</h1>
      <p>{displayedInfo.planetDecriptionText}</p>
      <p>{displayedInfo.planetWikiLink}</p>
    </div>
  );
}
