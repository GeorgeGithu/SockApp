body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './models/Home';
import Ankle from './models/Ankle';
import Crew from './models/Crew';
import Mid from './models/Mid';
import GalleryModel from './models/GalleryModel';
import CrudPage from './models/CrudPage';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home />} > </Route>
            <Route path='/ankle' element={<Ankle />} > </Route>
            <Route path='/mid' element={<Mid />} > </Route>
            <Route path='/crew' element={<Crew />} > </Route>
            <Route path='/galleryModel' element={<GalleryModel />} > </Route>
            <Route path='/crudPage' element={<CrudPage />} > </Route>
            
        </Routes>
    </BrowserRouter>
)
