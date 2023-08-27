import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import HireHelp from '../Pages/HireHelp/HireHelp';
import Retail from '../Pages/Retail/Retail';
import CaseStudies from '../Pages/CaseStudies/CaseStudies';
import API from '../Pages/API/API';
import LogIn from '../Pages/LogIn/LogIn';
import About from '../Pages/About/About';
import Community from '../Pages/Community/Community';
import Media from '../Pages/Media/Media';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/HireHelpPage" element={<HireHelp />} />{' '}
        <Route path="/RetailPage" element={<Retail />} />{' '}
        <Route path="/CaseStudyPage" element={<CaseStudies />} />{' '}
        <Route path="/APIPage" element={<API />} />{' '}
        <Route path="/LogInPage" element={<LogIn />} />{' '}
        <Route path="/AboutPage" element={<About />} />{' '}
        <Route path="/DiversityPage" element={<Community />} />{' '}
        <Route path="/MediaPage" element={<Media />} />{' '}
        <Route path="/BlogPage" element={<Blog />} />{' '}
        <Route path="/ContactPage" element={<Contact />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
