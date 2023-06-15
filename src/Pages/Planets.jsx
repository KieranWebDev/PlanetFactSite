import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// components
import PlanetsPageContainer from '../Components/PlanetPage/PlanetsPageContainer';
import TitleAndInfoContainer from '../Components/PlanetPage/TitleAndInfoContainer';
import InfoButtonsContainer from '../Components/PlanetPage/InfoButtonsContainer';
import PlanetImage from '../Components/PlanetPage/PlanetImage';
import StatisticsContainer from '../Components/PlanetPage/StatisticsContainer';

// import styled from 'styled-components';

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
      });
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
    let planetDecriptionText = '';
    let planetWikiLink = '';
    let picToDisplay = '';
    let additionalSurfacePic = '';

    if (planetInfo && planetInfo[info]) {
      planetDecriptionText = planetInfo[info].content;
      planetWikiLink = planetInfo[info].source;
    }

    if (info === 'geology') {
      picToDisplay = planetImages.planetFull;
      additionalSurfacePic = planetImages[pic];
    } else {
      picToDisplay = planetImages[pic];
    }
    setDisplayedInfo({
      planetDecriptionText: planetDecriptionText,
      planetWikiLink: planetWikiLink,
      picToDisplay: picToDisplay,
      additionalSurfacePic: additionalSurfacePic,
    });
  }

  return (
    <>
      {planetInfo ? (
        <PlanetsPageContainer>
          <TitleAndInfoContainer
            planetName={planetInfo.name}
            displayedInfo={displayedInfo}
          />

          <InfoButtonsContainer changeDisplayedInfo={changeDisplayedInfo} />

          <PlanetImage
            displayedInfo={displayedInfo}
            planetName={planetInfo.name}
          />
          <StatisticsContainer planetInfo={planetInfo} />
        </PlanetsPageContainer>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
