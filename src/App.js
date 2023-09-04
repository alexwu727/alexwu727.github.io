import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
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
import { ThemeProvider, createTheme, CssBaseline, Container } from "@mui/material"
import darkTheme from "./theme/dark"
import lightTheme from "./theme/light"
import ColorContext from './ColorContext';


function App() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  )

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <div className="App" style={{ background: theme.palette.primary.mainGradient }}>
              <Container maxWidth="lg" sx={{ minHeight: "100vh", paddingBottom: "100px" }}>
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
              </Container>
            </div>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
