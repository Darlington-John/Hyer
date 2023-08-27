import React from 'react';
import './APIPageBody.css';
import { IntroSection } from '../../Components/Intro/IntroSection';
import APIHeroImg from './../../Assets/Images/APIHero.png';
import HyerLineImg from './../../Assets/Images/HyerLine.png';
import APIFlowImg from './../../Assets/Images/APIFlow.png';
import { BecomeTasker } from '../HomePageBody/HomePageBody';
import AnimatedCards from '../../Components/AnimatedCards/AnimatedCards';
import SeamlessHiringBlueImg from './../../Assets/Images/SeamlessHiringBlue.svg';
import SeamlessHiringImg from './../../Assets/Images/SeamlessHiring.svg';
import NoFeesBlueImg from './../../Assets/Images/NoFeesBlue.svg';
import NoFeesImg from './../../Assets/Images/NoFees.svg';
import PaymentProcessingBlueImg from './../../Assets/Images/PaymentProcessingBlue.svg';
import PaymentProcessingImg from './../../Assets/Images/PaymentProcessing.svg';

import BusinessCommunityBlueImg from './../../Assets/Images/BusinessCommunityBlue.svg';
import BusinessCommunityImg from './../../Assets/Images/BusinessCommunity.svg';
import ScaleWorkforceBlueImg from './../../Assets/Images/ScaleWorkforceBlue.svg';
import ScaleWorkforceImg from './../../Assets/Images/ScaleWorkforce.svg';
import {
  BusinessProfile,
  TeamTalk,
} from '../HireHelpPageBody/HireHelpPageBody';
const APIPageBody = () => {
  return (
    <div className="APIPageBody">
      <IntroSection
        IntroSection="Powering Partnerships with API
"
        GradientParagraphShort="Delivering a simple, seamless way to connect & collaborate.
"
        Learn="Get Started Today"
        IntroBckgd={APIHeroImg}
      />
      <BecomeTasker
        TaskerHeader="
Driving Digital Transformation
"
        line={HyerLineImg}
      />
      <div className="FeaturesContainer">
        <AnimatedCards
          VisImage={SeamlessHiringImg}
          InvisImage={SeamlessHiringBlueImg}
          AnimeHoverTextPurple="
Quickly pick the Taskers you want
"
          AnimeHoverTextPurpleInvis="Giving you full control—you can pick your Taskers."
        />
        <AnimatedCards
          VisImage={PaymentProcessingImg}
          InvisImage={PaymentProcessingBlueImg}
          AnimeHoverTextPurple="No sign-up fees, contrcts, minimums"
          AnimeHoverTextPurpleInvis="Our model is simple-use us only when you need"
        />
        <AnimatedCards
          VisImage={ScaleWorkforceImg}
          InvisImage={ScaleWorkforceBlueImg}
          AnimeHoverTextPurple="
Seamlessly scale your workforce
"
          AnimeHoverTextPurpleInvis="Flexible and fast- you can request on demand labour"
        />
        <AnimatedCards
          AnimeHoverTextPurple="Try to buy, no hiring fees"
          VisImage={NoFeesImg}
          InvisImage={NoFeesBlueImg}
          AnimeHoverTextPurpleInvis="Like a Tasker hire them with no conversion fee"
        />
        <AnimatedCards
          VisImage={BusinessCommunityImg}
          InvisImage={BusinessCommunityBlueImg}
          AnimeHoverTextPurple="3. Work & Pay"
          AnimeHoverTextPurpleInvis="Choose tasks that suit your skills and get paid "
        />
      </div>
      <BusinessProfile
        ProfileHeader="Integrate. Automate. Accelerate.
 All while decreasing costs."
        ProfileParagraph="Time is money. Hyer’s API delivers custom workflows."
        ProfileParagraphNext="  It caters to your unique needs—accelerating
productivity across your organization."
        APIImg={APIFlowImg}
      />
      <TeamTalk
        TeamTalkHeader="
Let's Connect
"
        TeamTalkParagraph="Contact us today and discover how customers grow and connect with hyer"
      />
    </div>
  );
};

export default APIPageBody;
