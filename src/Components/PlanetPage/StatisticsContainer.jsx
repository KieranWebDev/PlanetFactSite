export default function StatisticsContainer({ planetInfo }) {
  return (
    <div>
      <p>rotation- {planetInfo.rotation}</p>
      <p>radius- {planetInfo.radius}</p>
      <p>revolution- {planetInfo.revolution}</p>
      <p>temp- {planetInfo.temperature}</p>
    </div>
  );
}
