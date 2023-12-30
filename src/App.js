import React from 'react';
import './App.css';
import { pdfjs } from 'react-pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import {  Redirect } from 'react-router-dom';

import Inicio from './pages/Inicio';
import { Categorias } from './pages/Categorias';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Logout from './pages/Logout';


// Configura la ubicación del worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const App = () => {

  return (
    <Router>
      <div className='app-container'>

        <Sidebar />
        <div className='content-container'>
          <Routes>

            <Route exact path="/">
              {/* <Redirect to="/inicio" />  */}
            </Route>

            <Route path='/inicio' element={<Inicio />} />
            <Route path='/categoria1' element={<Categorias pCategory="category1" />} />
            <Route path='/categoria2' element={<Categorias pCategory="category2" />} />
            <Route path='/categoria3' element={<Categorias pCategory="category3" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
