import React from 'react';
import { Router, Routes, Route, useRoutes, Navigate, } from 'react-router-dom';
import Home from './Home';
import Projects from './projects/Projects';
import Project from './projects/Project';
import Contact from './Contact';

const routes = [
  { path: "", element: <Home /> },
  { path: "projects", element: <Projects /> },
  { path: "project/:id", element: <Project /> },
  { path: "contact", element: <Contact /> }
];


function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;



