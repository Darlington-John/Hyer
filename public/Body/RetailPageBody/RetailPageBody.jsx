import React from 'react';
import './RetailPageBody.css';
import RetailHeroImg from './../../Assets/Images/RetailHero.jpg';
import { IntroSection } from '../../Components/Intro/IntroSection';
import { BecomeTasker } from '../HomePageBody/HomePageBody';
import HyerLineImg from './../../Assets/Images/HyerLine.png';
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
import Tasks, {
  AmazingPartners,
  TalkingTaskers,
} from '../../Components/Sliders/Sliders';
import {
  AchievementsPurple,
  BusinessProfile,
  CaseLocation,
  TeamTalk,
  TryOut,
} from '../HireHelpPageBody/HireHelpPageBody';
import FAQs from '../../Components/FAQs/FAQs';
const RetailPageBody = () => {
  return (
    <div className="RetailPageBody">
      <IntroSection
        IntroSection="Delivering Real-Time
Help to Retailers"
        GradientParagraphShort="Hyer quickly connects retailers to a pool of independent
workers that are pre-vetted & ready to work
"
        Learn="Sign Up Today"
        IntroBckgd={RetailHeroImg}
      />

      <BecomeTasker
        TaskerHeader="

Hire Help, On-Demand

"
        TaskerParagraph="Hyer is an easy-to-use app that connects retailers and brands to on-demand labor in the tap of an app"
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
      <AmazingPartners PartnersSliderPurple="Amazing Partners" />
      <TalkingTaskers
        TalkingTaskers="What Our Customers Say"
        FirstTaskerTalk=" “Where we have implemented, Hyer and the Hyer Taskers are doing a remarkable job. The rate on requested jobs is well over 90%. The Hyer team has been a great partner—a blessing as we manage our
way through these unusual times”"
        FirstTalker="National Retailer"
        SecondTalkerTalk="  “Leveraging Hyer we’ve seen a sizable sales lift of 40% compared to stores where we were not using Hyer. In addition, using Hyer Taskers drove unit sales up 84%. Of the 10 stores, 70% saw between a 100% to 375% increase in unit sales. A WIN-WIN-WIN for the books!”"
        SecondTalker="National Beverage Company"
        ThirdTalkerTalk="   “It used to take us one to two weeks to get someone in the door. Once we started using Hyer, we were able to post a job and within 30-minutes we would have Taskers applying. I love that I can post a task and have someone here working within a couple of hours.”"
        ThirdTalker="Leading Manufacturer "
      />

      <Tasks
        TasksPurple="From General to Skilled, Choose from Multiple Task Types!"
        TasksPurpleRespnv="From General to Skilled, Choose from Multiple Task Types!"
      />
      <AchievementsPurple />
      <TeamTalk
        TeamTalkHeader="
Talk With Our Team
"
        TeamTalkParagraph="Contact us today and discover how you can build a flexible, resilient workforce."
      />
      <TryOut
        TryOutHeader="Ready to Try it Out?
"
        TryOutParagraph="Start scaling your workforce on-demand. Just follow these three easy steps to get up and running in 24-hours! Once vetted—posting tasks is fast, simple and affordable! "
      />
      <BusinessProfile
        ProfileHeader="Tap Into a New Pool of Talent"
        ProfileParagraph="Last year, retailers lost more than $63 billion in sales due to labor challenges. 

"
        ProfileParagraphNext="With 50% of businesses leveraging the economy to get help there’s never been a better time than now to work."
      />
      <CaseLocation />
      <FAQs />
    </div>
  );
};

export default RetailPageBody;
