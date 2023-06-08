import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './server';
import Planets from './Pages/Planets';

function App() {
  return (
    <>
      <h1>blank project</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/earth" />} />

          <Route path="/:id" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
