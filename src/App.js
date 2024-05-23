
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Accueil from "./pages/accueil";
import Dashboard from "./pages/dashboard";
import Erreur from "./pages/erreur"

import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}


export default App;    