import React from 'react';
import './MegaNavbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HyerLogo from './../../Assets/Images/HyerLogo.png';
import ArrDownIcon from './../../Assets/Icons/ArrDown.png';
import ArrRightIcon from './../../Assets/Icons/ArrRight.svg';
import BarsIcon from './../../Assets/Icons/Bars.svg';
import XmarkIcon from './../../Assets/Icons/Xmark.svg';
import { toggleNav } from './../../JavaScript.js';

const MegaNavbar = (props) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(BarsIcon);

  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
  };
  return (
    <div className="MegaNavbar">
      <div className="HyerLogo">
        <Link exact to="/">
          <img src={HyerLogo} />
        </Link>
      </div>
      <div className="MegaNavbarRight">
        <div className="MegaNavbarRespnv2">
          <div className="Work">
            <Link to="#">
              Find Work <img src={ArrDownIcon} />
            </Link>
            <div className="DropDown">
              <div className="DropDownContent">
                <Link to="/HireHelpPage">
                  <span>Become Tasker</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/HireHelpPage">
                  <span>Shop Swag</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/HireHelpPage">
                  <span>Perks and Discounts</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/HireHelpPage">
                  <span>Help Center</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/HireHelpPage">
                  <span>Higher skill Hub</span> <img src={ArrRightIcon} />
                </Link>
              </div>
            </div>
          </div>

          <div className="BarsIcon">
            <Link to="#" onClick={handleToggleNav}>
              <img id="barsIcon" src={icon} />
            </Link>
          </div>
        </div>
        <div className="MegaNavbarRespnv">
          <div className="Help">
            <Link>
              Hire Help <img src={ArrDownIcon} />
            </Link>
            <div className="HelpDropDown">
              <div className="HelpDropDownContent">
                <Link to="/HireHelpPage">
                  <span>Hire Help</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/RetailPage">
                  <span>Retail</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/CaseStudyPage">
                  <span>Warehouse</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/RetailPage">
                  <span>Hospitality</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/CaseStudyPage">
                  <span>Case Studies</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="#">
                  <span>Help Centers</span> <img src={ArrRightIcon} />
                </Link>
              </div>
            </div>
          </div>

          <Link to="/APIPage">API</Link>
        </div>
      </div>
    </div>
  );
};

export default MegaNavbar;
