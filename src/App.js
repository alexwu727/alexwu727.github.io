import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Error from './pages/Error';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="admin" element={<AboutMe />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
              <Route path="experiences" element={<Experiences />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectId" element={<Project />} />
              <Route path="/*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
