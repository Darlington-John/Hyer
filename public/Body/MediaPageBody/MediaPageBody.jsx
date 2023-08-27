import React from 'react';
import './MediaPageBody.css';
import { IntroSection } from '../../Components/Intro/IntroSection';
import HyerDeskImg from './../../Assets/Images/HyerDesk.jpg';
import HyerLineImg from './../../Assets/Images/HyerLine.png';
import GradientLogoImg from './../../Assets/Images/GradientLogo.png';
import BlackLogoImg from './../../Assets/Images/BlackLogo.png';
import PurpleLogoImg from './../../Assets/Images/PurpleLogo.png';
import HyerAppImg from './../../Assets/Images/HyerApp.png';
import PurpleAppImg from './../../Assets/Images/PurpleApp.png';
import TrioPhoneImg from './../../Assets/Images/TrioPhone.png';
import MailIcon from './../../Assets/Icons/mail.png';
import { BecomeTasker } from '../HomePageBody/HomePageBody';
import { Link } from 'react-router-dom';
const MediaPageBody = () => {
  return (
    <div className="MediaPageBody">
      <IntroSection IntroSection="Media Resources" IntroBckgd={HyerDeskImg} />
      <BecomeTasker
        TaskerHeader="
Hyer Logos
"
        line={HyerLineImg}
      />
      <HyerLogos
        LogoOne={GradientLogoImg}
        LogoTwo={BlackLogoImg}
        LogoThree={PurpleLogoImg}
      />
      <BecomeTasker
        TaskerHeader="
App Shots
"
        line={HyerLineImg}
      />
      <HyerPhones
        PhoneOne={HyerAppImg}
        PhoneTwo={TrioPhoneImg}
        PhoneThree={PurpleAppImg}
      />
      <Inquires />
    </div>
  );
};

export const HyerLogos = (props) => {
  return (
    <div className="HyerLogosk">
      <div className="HyerLogoh">
        <img src={props.LogoOne}></img>
      </div>
      <div className="HyerLogoh">
        <img src={props.LogoTwo} className="LogoTwo"></img>
      </div>
      <div className="HyerLogoh">
        <img src={props.LogoThree}></img>
      </div>
    </div>
  );
};
export const HyerPhones = (props) => {
  return (
    <div className="HyerPhonesk">
      <div className="HyerPhoneh">
        <img src={props.PhoneOne}></img>
      </div>
      {/* <div className="HyerPhoneh">
        <img src={props.PhoneTwo} className="PhoneTwo"></img>
      </div> */}
      <div className="HyerPhoneh">
        <img src={props.PhoneThree}></img>
      </div>
    </div>
  );
};

export const Inquires = () => {
  return (
    <div className="Inquires">
      <img src={MailIcon} />
      <span className="InquiresHeader">Media Inquires</span>
      <span className="InquiresParagraph">
        Need additional information? Contact us at{' '}
        <Link to="/">press@gohyer.com</Link>
      </span>
    </div>
  );
};

export default MediaPageBody;
