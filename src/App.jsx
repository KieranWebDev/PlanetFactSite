import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './server';
import Planets from './Pages/Planets';
import PageLayout from './Components/PageLayout';

// superbase
import { createClient } from '@supabase/supabase-js';

const projecturl = 'https://zfrqdfdxakyrccertitp.supabase.co';
const apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcnFkZmR4YWt5cmNjZXJ0aXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4NDExNDgsImV4cCI6MjAwMjQxNzE0OH0.gozzzkLRMI95d8_sUfF04Z2tXvDxqk4AbvvxMfHvSyg';

const supabase = createClient(projecturl, apiKey);

function App() {
  const [allPlanetsData, setAllPlanetsData] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  // useEffect(() => {
  //   console.log(planets);
  // }, [planets]);

  async function getPlanets() {
    const { data } = await supabase.from('planets').select();
    setAllPlanetsData(data);
    console.log('data fetched');
    // console.log(planets);
  }
  {
    /* <ul>
  {planets.map((planet) => ( 
    <li key={planet.name}>{planet.name}</li>
  ))}
      </ul> */
  }
  return (
    <>
      {/* {planets.length > 0 && (
        <>
          <h1>{planets[0].name}</h1>
          <img src={planets[0].images_planet} alt="" />
        </>
      )} */}
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
  );
}

export default App;
