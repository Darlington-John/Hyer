import React from 'react';
import MegaNavbar from './../../Components/MegaNavbar/MegaNavbar';
import Footer from '../../Components/Footer/Footer';
import RetailPageBody from '../../Body/RetailPageBody/RetailPageBody';
import NavAccordion from '../../Components/Accordion/Accordion';
import ArrRightIcon from './../../Assets/Icons/ArrRight.svg';
import AngleDownIcon from './../../Assets/Icons/AngleDown.svg';
import AngleUpIcon from './../../Assets/Icons/AngleUp.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Retail = () => {
  const [currentImageFirst, setCurrentImageFirst] = useState(AngleDownIcon);

  const handleImgClick = () => {
    if (currentImageFirst === AngleDownIcon) {
      setCurrentImageFirst(AngleUpIcon);
    } else {
      setCurrentImageFirst(AngleDownIcon);
    }
  };
  const [currentImageSecond, setCurrentImageSecond] = useState(AngleDownIcon);

  const handleImgClickSecond = () => {
    if (currentImageSecond === AngleDownIcon) {
      setCurrentImageSecond(AngleUpIcon);
    } else {
      setCurrentImageSecond(AngleDownIcon);
    }
  };
  const [currentImageThird, setCurrentImageThird] = useState(AngleDownIcon);

  const handleImgClickThird = () => {
    if (currentImageThird === AngleDownIcon) {
      setCurrentImageThird(AngleUpIcon);
    } else {
      setCurrentImageThird(AngleDownIcon);
    }
  };
  const [currentImageFourth, setCurrentImageFourth] = useState(AngleDownIcon);

  const handleImgClickFourth = () => {
    if (currentImageFourth === AngleDownIcon) {
      setCurrentImageFourth(AngleUpIcon);
    } else {
      setCurrentImageFourth(AngleDownIcon);
    }
  };
  const sections = [
    {
      title: (
        <div className="AccordionHeader HireHelp" onClick={handleImgClick}>
          <h1>Hire Help</h1>
          <img src={currentImageFirst} />
        </div>
      ),
      content: (
        <div className="AccordionLinks HireHelpLinks">
          <Link to="/HireHelpPage">
            <span>Hire Help</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/RetailPage">
            <span>Retail</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/RetailPage">
            <span>Warehouse</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/RetailPage">
            <span>Hospitality</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/CaseStudyPage">
            <span>Case Studies</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/CaseStudyPage">
            <span>Help Centers</span> <img src={ArrRightIcon} />
          </Link>
        </div>
      ),
    },
    {
      title: (
        <div className="AccordionHeader API" onClick={handleImgClick}>
          <h1>
            <Link to="/APIPage">API</Link>
          </h1>
        </div>
      ),
      content: null,
    },
    {
      title: (
        <div className="AccordionHeader About">
          <h1>About</h1>
          <img src={currentImageSecond} onClick={handleImgClickSecond} />
        </div>
      ),
      content: (
        <div className="AccordionLinks AboutLinks ">
          <Link to="/AboutPage">
            <span>Our Story</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/AboutPage">
            <span>Leadership Team</span> <img src={ArrRightIcon} />
          </Link>
        </div>
      ),
    },
    {
      title: (
        <div className="AccordionHeader About">
          <h1>Community</h1>
          <img src={currentImageThird} onClick={handleImgClickThird} />
        </div>
      ),
      content: (
        <div className="AccordionLinks AboutLinks">
          <Link to="/DiversityPage">
            <span>Diversity & Inclusion</span> <img src={ArrRightIcon} />
          </Link>
        </div>
      ),
    },
    {
      title: (
        <div className="AccordionHeader About">
          <h1>Media</h1>
          <img src={currentImageFourth} onClick={handleImgClickFourth} />
        </div>
      ),
      content: (
        <div className="AccordionLinks AboutLinks">
          <Link to="/MediaPage">
            <span>Hyper News Hub</span> <img src={ArrRightIcon} />
          </Link>
          <Link to="/MediaPage">
            <span>Media Kit/Press</span> <img src={ArrRightIcon} />
          </Link>
        </div>
      ),
    },
    {
      title: (
        <div className="AccordionHeader About">
          <h1>
            <Link to="/BlogPage">Blog</Link>
          </h1>
        </div>
      ),
      content: null,
    },
    {
      title: (
        <div className="AccordionHeader About">
          <h1>
            <Link to="/ContactPage">Contact</Link>
          </h1>
        </div>
      ),
      content: null,
    },
  ];
  return (
    <div className="Retail">
      <div className="Overlay" id="myNav">
        <div className="Overlay-content">
          <NavAccordion sections={sections} />
        </div>
      </div>
      <MegaNavbar />
      <RetailPageBody />
      <Footer />
    </div>
  );
};

export default Retail;
