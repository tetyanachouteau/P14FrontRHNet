
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Dashboard from "./pages/dashboard";
import Erreur from "./pages/erreur"

import Layout from './components/Layout';
import Formulaire from './pages/formulaire';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="formulaire" element={<Formulaire />} />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}


export default App;    