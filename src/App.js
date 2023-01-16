import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Error from './pages/Error';
import ProjectsLayout from './pages/ProjectsLayout';
import ExperiencesLayout from './pages/ExperiencesLayout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AboutMe />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
              <Route path="experiences" element={<ExperiencesLayout />}>
                <Route index element={<Experiences />} />
                <Route path=":experienceId" element={<Experience />} />
              </Route>
              <Route path="projects" element={<ProjectsLayout />}>
                <Route index element={<Projects />} />
                <Route path=":projectId" element={<Project />} />
              </Route>
              <Route path="/*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
