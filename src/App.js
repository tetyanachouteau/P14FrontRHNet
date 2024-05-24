
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import List from "./pages/List";
import Error from "./pages/Error"

import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}


export default App;    