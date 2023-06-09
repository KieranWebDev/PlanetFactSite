import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// temporary imports - images will be fetched from api
import MercuryPlanet from '../assets/planet-mercury.svg';
import MercuryInternal from '../assets/planet-mercury-internal.svg';
import MercuryGeology from '../assets/geology-mercury.png';
import VenusPlanet from '../assets/planet-venus.svg';
import VenusInternal from '../assets/planet-venus-internal.svg';
import VenusGeology from '../assets/geology-venus.png';
import EarthPlanet from '../assets/planet-earth.svg';
import EarthInternal from '../assets/planet-earth-internal.svg';
import EarthGeology from '../assets/geology-earth.png';
import MarsPlanet from '../assets/planet-mars.svg';
import MarsInternal from '../assets/planet-mars-internal.svg';
import MarsGeology from '../assets/geology-mars.png';
import JupiterPlanet from '../assets/planet-jupiter.svg';
import JupiterInternal from '../assets/planet-jupiter-internal.svg';
import JupiterGeology from '../assets/geology-jupiter.png';
import SaturnPlanet from '../assets/planet-saturn.svg';
import SaturnInternal from '../assets/planet-saturn-internal.svg';
import SaturnGeology from '../assets/geology-saturn.png';
import UranusPlanet from '../assets/planet-uranus.svg';
import UranusInternal from '../assets/planet-uranus-internal.svg';
import UranusGeology from '../assets/geology-uranus.png';
import NeptunePlanet from '../assets/planet-neptune.svg';
import NeptuneInternal from '../assets/planet-neptune-internal.svg';
import NeptuneGeology from '../assets/geology-neptune.png';

export default function Planets() {
  const [planetInfo, setPlanetInfo] = useState(null);
  const [planetImages, setPlanetImages] = useState({});
  const [displayedInfo, setDisplayedInfo] = useState({ text: '', pic: '' });

  const params = useParams();

  useEffect(() => {
    fetch(`api/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlanetInfo(data);
        setPlanetImages(getPicsForDisplay(data));
        // console.log(changeDisplayedInfo('overview', 'planetFull'));
        // changeDisplayedInfo('overview', 'planetFull');
        // return data;
      });
    // .then((data) => {
    // });
  }, [params.id]);

  useEffect(() => {
    changeDisplayedInfo('overview', 'planetFull');
    // if (planetInfo) {
    // }
  }, [planetInfo]);

  function getPicsForDisplay(data) {
    const planetImages = {
      planetFull: '',
      planetInternal: '',
      planetGeology: '',
    };

    switch (data.name) {
      case 'Mercury':
        planetImages.planetFull = MercuryPlanet;
        planetImages.planetInternal = MercuryInternal;
        planetImages.planetGeology = MercuryGeology;
        break;
      case 'Venus':
        planetImages.planetFull = VenusPlanet;
        planetImages.planetInternal = VenusInternal;
        planetImages.planetGeology = VenusGeology;
        break;
      case 'Earth':
        planetImages.planetFull = EarthPlanet;
        planetImages.planetInternal = EarthInternal;
        planetImages.planetGeology = EarthGeology;
        break;
      case 'Mars':
        planetImages.planetFull = MarsPlanet;
        planetImages.planetInternal = MarsInternal;
        planetImages.planetGeology = MarsGeology;
        break;
      case 'Jupiter':
        planetImages.planetFull = JupiterPlanet;
        planetImages.planetInternal = JupiterInternal;
        planetImages.planetGeology = JupiterGeology;
        break;
      case 'Saturn':
        planetImages.planetFull = SaturnPlanet;
        planetImages.planetInternal = SaturnInternal;
        planetImages.planetGeology = SaturnGeology;
        break;
      case 'Uranus':
        planetImages.planetFull = UranusPlanet;
        planetImages.planetInternal = UranusInternal;
        planetImages.planetGeology = UranusGeology;
        break;
      case 'Neptune':
        planetImages.planetFull = NeptunePlanet;
        planetImages.planetInternal = NeptuneInternal;
        planetImages.planetGeology = NeptuneGeology;
        break;
      default:
        break;
    }

    return planetImages;
  }

  console.log(planetInfo);
  // console.log(planetImages);

  function changeDisplayedInfo(info, pic) {
    let textToDisplay = '';
    let picToDisplay = '';

    if (planetInfo && planetInfo[info]) {
      textToDisplay = (
        <>
          <p> - {planetInfo[info].content}</p>
          <p>
            Source -
            <a target="_blank" rel="noreferrer" href={planetInfo[info].source}>
              Wikipedia
            </a>
          </p>
        </>
      );
      if (info === 'geology') {
        picToDisplay = (
          <>
            <img src={planetImages[pic]} alt={planetInfo.name} />
            <img src={planetImages.planetFull} alt={planetInfo.name} />
          </>
        );
      } else {
        picToDisplay = <img src={planetImages[pic]} alt={planetInfo.name} />;
      }
    }
    // else {
    //   textToDisplay = (
    //     <>
    //       <p>overview - {planetInfo.overview.content}</p>
    //       <p>
    //         Source -{' '}
    //         <a
    //           target="_blank"
    //           rel="noreferrer"
    //           href={planetInfo.overview.source}
    //         >
    //           Wikipedia
    //         </a>
    //       </p>
    //     </>
    //   );

    //   picToDisplay = (
    //     <img src={planetImages.planetFull} alt={planetInfo.name} />
    //   );
    // }

    setDisplayedInfo({ text: textToDisplay, pic: picToDisplay });
  }

  //   const picString = `..${planetInfo.images.planet.substring(1)}`;
  //   console.log(picString);
  return (
    <>
      {planetInfo ? (
        <div>
          <h1>{planetInfo.name}</h1>
          {/* <p>overview - {planetInfo.overview.content}</p>
          <p>
            Source -{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href={planetInfo.overview.source}
            >
              Wikipedia
            </a>
          </p> */}
          {displayedInfo.text}

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

          <p>rotation- {planetInfo.rotation}</p>
          <p>radius- {planetInfo.radius}</p>
          <p>revolution- {planetInfo.revolution}</p>
          <p>temp- {planetInfo.temperature}</p>
          <p>{`${planetInfo.name}Planet`}</p>
          {displayedInfo.pic}
          {/* <img src={planetImages.planetFull} alt={planetInfo.name} />
          <img src={planetImages.planetInternal} alt={planetInfo.name} />
          <img src={planetImages.planetGeology} alt={planetInfo.name} /> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
