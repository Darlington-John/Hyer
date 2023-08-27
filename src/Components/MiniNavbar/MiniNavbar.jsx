import React from 'react';
import './MiniNavbar.css';
import { Link } from 'react-router-dom';
import ArrRightIcon from './../../Assets/Icons/ArrRight.svg';
import Button from '../Buttons/Buttons';
import ArrDownIcon from './../../Assets/Icons/ArrDown.png';

const MiniNavbar = (props) => {
  return (
    <div className="MiniNavbar">
      <div className="Login">
        <Link to="/LogInPage">
          <Button PillBorderBlack="Customer Login" />
        </Link>
      </div>
      <div className="MiniNavbarRight">
        <div className="MiniNavbarRespnv2">
          <div className="Work">
            <Link to="#">About</Link>
            <div className="DropDown">
              <div className="DropDownContent">
                <Link to="/AboutPage">
                  <span>Our Story</span> <img src={ArrRightIcon} />
                </Link>
                <Link to="/AboutPage">
                  <span>Leadership Team</span> <img src={ArrRightIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="MiniNavbarRespnv">
          <div className="Work">
            <Link to="#">Community</Link>
            <div className="DropDown">
              <div className="DropDownContent">
                <Link to="/DiversityPage">
                  <span>Diversity and Inclusion</span>{' '}
                  <img src={ArrRightIcon} />
                </Link>
              </div>
            </div>
          </div>

          <div className="Help">
            <Link to="#">Media</Link>
            <div className="HelpDropDown">
              <div className="HelpDropDownContent">
                <Link to="/MediaPage">
                  <span>Media Resources</span> <img src={ArrRightIcon} />
                </Link>
              </div>
            </div>
          </div>
          <Link to="/BlogPage" id="HoverLink">
            Blog
          </Link>
          <Link to="/ContactPage" id="HoverLink">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
