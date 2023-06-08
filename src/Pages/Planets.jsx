import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Planets() {
  const [planetInfo, setPlanetInfo] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`api/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPlanetInfo(data));
  }, [params.id]);

  console.log(planetInfo);

  return (
    <>
      {planetInfo ? (
        <div>
          <h1>{planetInfo.name}</h1>
          <p>overview - {planetInfo.overview.content}</p>
          <p>radius- {planetInfo.radius}</p>
          <p>revolution- {planetInfo.revolution}</p>
          <p>temp- {planetInfo.temperature}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
