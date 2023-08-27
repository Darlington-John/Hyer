import React from 'react';
import './ContactPageBody.css';
import ContactHeroImg from './../../Assets/Images/ContactHero.jpg';
import { IntroSection } from '../../Components/Intro/IntroSection';
import { TeamTalk } from '../HireHelpPageBody/HireHelpPageBody';
const ContactPageBody = () => {
  return (
    <div>
      <IntroSection
        IntroSection="Let's Work Together"
        IntroBckgd={ContactHeroImg}
      />
      <TeamTalk
        TeamTalkHeader="
Questions? We'd love to hear from you!

"
      />
    </div>
  );
};

export default ContactPageBody;
