import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="about" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
              <Route path="experiences" element={<Experiences />} />
              <Route path="projects" element={<Projects />} />
              <Route path="/*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
