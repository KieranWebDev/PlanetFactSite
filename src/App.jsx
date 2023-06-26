import { useEffect, useState, useRef, useCallback } from 'react';
// react router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// superbase
import supabase from './Services/superbase';
// particles
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particleOptions from './Data/particleOptions';
//components
import Planets from './Pages/Planets';
import PageLayout from './Components/PageLayout';
import LoadingMessage from './Components/LoadingMessage';
import ErrorMessage from './Components/ErrorMessage';

// Styles
const ParticleContainer = styled.div`
  position: relative;
  z-index: -1;
`;

// env variables
// const projecturl = import.meta.env.VITE_PROJECT_URL;
// const apiKey = import.meta.env.VITE_API_KEY;

// supabase
// const supabase = createClient(projecturl, apiKey);

function App() {
  const [allPlanetsData, setAllPlanetsData] = useState([]);
  const [particleCount, setParticleCount] = useState(200);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const windowWidth = useRef(window.innerWidth);

  // fetch data from supabase
  useEffect(() => {
    getPlanets();
  }, []);

  async function getPlanets() {
    try {
      const { data, error } = await supabase.from('planets').select();
      if (error) {
        throw new Error(error.message);
      }
      setAllPlanetsData(data);
      setLoading(false);
      // console.log('data fetched');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error('Error fetching data:', error);
    }
  }

  // particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Adjust particle count based on window width
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      windowWidth.current = width;
      if (width < 550) {
        setParticleCount(100);
      } else {
        setParticleCount(200);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  const updatedParticleOptions = {
    ...particleOptions,
    particles: {
      ...particleOptions.particles,
      number: {
        ...particleOptions.particles.number,
        value: particleCount,
      },
    },
  };

  return (
    <>
      <ParticleContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={updatedParticleOptions}
        />
      </ParticleContainer>
      {loading && <LoadingMessage />}
      {error && <ErrorMessage />}

      {allPlanetsData.length > 0 && (
        <>
          <BrowserRouter>
            <Routes>
              <Route element={<PageLayout />}>
                <Route index element={<Navigate to="/earth" />} />
                <Route
                  path="/:id"
                  element={<Planets allPlanetsData={allPlanetsData} />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
