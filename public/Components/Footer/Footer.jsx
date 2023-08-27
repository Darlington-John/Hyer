import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import PlayStoreImg from './../../Assets/Images/PlayStore.png';
import AppStoreImg from './../../Assets/Images/AppStore.png';
import Input from '../Inputs/Inputs';
const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="Footer">
        <div className="HyerContent">
          <span className="FooterHeader">Hyer</span>
          <Link to="/AboutPage">Our Story</Link>
          <Link to="/AboutPage">Leadership Team</Link>
          <Link to="/MediaPage">Media</Link>
          <Link to="/BlogPage">Blog</Link>
          <Link to="/HireHelpPage">Careers</Link>
          <Link to="/ContactPage">Contact</Link>
        </div>
        <div className="GetStartedContent">
          <span className="FooterHeader">Get Started</span>
          <Link to="/HireHelpPage">Find Work</Link>
          <Link to="/HireHelpPage">Hire Help</Link>
        </div>
        <div className="CommunityContent">
          <span className="FooterHeader">Community</span>
          <Link to="/DiversityPage">Diversity & Inclusion</Link>
        </div>
        <div className="GetAppContent">
          <span className="FooterHeader">Get the App</span>
          <div className="StoreBadges">
            <img src={AppStoreImg} />
            <img src={PlayStoreImg} />
          </div>
        </div>
        <div className="DontMissContent">
          <span className="FooterHeader">Dont Miss a Thing</span>
          <span>Join our Newsletter for updates, offers, and more.</span>
          <Input InputEmailAddress="Enter Your Email Address" />
        </div>
      </div>
      <div className="FooterBottom">
        <div>© 2023 Frictionless Enterprises Inc.</div>
        <div>Hyer Standard Policy Legal Support</div>
      </div>
    </div>
  );
};

export default Footer;
