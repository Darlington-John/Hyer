import React from 'react';
import './LogInPageBody.css';
import MiniNavbar from '../../Components/MiniNavbar/MiniNavbar';
import HyerLogo from './../../Assets/Images/HyerLogo.png';
import Input from '../../Components/Inputs/Inputs';
import { Link } from 'react-router-dom';
import Button from '../../Components/Buttons/Buttons';
import { Autoplay, Pagination } from 'swiper/modules';

const LogInPageBody = () => {
  return (
    <div className="LogInPageBody">
      <Welcome />
    </div>
  );
};
export const Welcome = () => {
  return (
    <div className="WelcomeContainer">
      <div className="Welcome">
        <div className="WelcomeContent">
          <img src={HyerLogo} className="HyerLogos" />
          <div className="WelcomeHeader">
            <span>Welcome to Hyer.</span>
            <span>
              {' '}
              Please enter your email address and password to proceed.
            </span>
          </div>
          <div className="InputsContainer">
            <div className="EmailContainer">
              <span>Email</span>
              <Input NoPlaceholderInput=" " />
            </div>
            <div className="PasswordContainer">
              <div className="PasswordContent">
                <span>Password</span>

                <Link>
                  <span>Forgot your password</span>
                </Link>
              </div>
              <Input NoPlaceholderInput=" " />
            </div>
            <div className="EmailContainer">
              <Button LogIn=" Log In" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPageBody;
