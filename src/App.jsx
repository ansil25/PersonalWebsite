import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/portfolio";
import Skills from './components/skills';
import Learnings from './components/Learnings';
import Contact from './components/contact';
import Project from './components/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <Portfolio />
      <Skills/>
      <Learnings/>
      <Project/>
      <Contact/>
      
    </>
  );
}
