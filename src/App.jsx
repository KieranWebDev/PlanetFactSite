// import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
//components
import Planets from './Pages/Planets';
import PageLayout from './Components/PageLayout';

// superbase
import { createClient } from '@supabase/supabase-js';

// particles
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particleOptions from './Data/particleOptions';

const ParticleContainer = styled.div`
  position: relative;
  z-index: -1;
`;

const projecturl = 'https://zfrqdfdxakyrccertitp.supabase.co';
const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcnFkZmR4YWt5cmNjZXJ0aXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4NDExNDgsImV4cCI6MjAwMjQxNzE0OH0.gozzzkLRMI95d8_sUfF04Z2tXvDxqk4AbvvxMfHvSyg';

const supabase = createClient(projecturl, apiKey);

function App() {
  const [allPlanetsData, setAllPlanetsData] = useState([]);

  // fetch data from supabase
  useEffect(() => {
    getPlanets();
  }, []);

  async function getPlanets() {
    const { data } = await supabase.from('planets').select();
    setAllPlanetsData(data);
    console.log('data fetched');
  }

  // particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async () => {}, []);

  return (
    <>
      <ParticleContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          // loaded={particlesLoaded}
          options={particleOptions}
        />
      </ParticleContainer>
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
