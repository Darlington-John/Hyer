import React, { useState, useEffect } from 'react';

import MarketWorkerImg from './../../Assets/Images/MarketWorker.jpeg';
import './HireHelpPageBody.css';
import { IntroSection } from '../../Components/Intro/IntroSection';
import { BecomeTasker } from '../../Body/HomePageBody/HomePageBody';
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
import PeopleImg from './../../Assets/Images/People.png';
import LocationImg from './../../Assets/Images/Location.png';
import ClockImg from './../../Assets/Images/Clock.png';
import HighFiveWhiteImg from './../../Assets/Images/HighFiveWhite.png';
import HandsBckdPurpleImg from './../../Assets/Images/HandsBckdPurple.png';
import FAQPurpleImg from './../../Assets/Images/FAQPurple.jpg';
import FAQPurpleFilledImg from './../../Assets/Images/FAQPurpleFilled.jpg';
import CaseStudyPurpleImg from './../../Assets/Images/CaseStudyPurple.jpg';
import CaseStudyImg from './../../Assets/Images/CaseStudy.jpg';
import LocationPurpleImg from './../../Assets/Images/LocationPurple.jpg';
import LocationPurpleFilledImg from './../../Assets/Images/LocationPurpleFilled.jpg';
import HelpersImg from './../../Assets/Images/Helpers.svg';
import HelpersPurpleImg from './../../Assets/Images/HelpersPurple.svg';
import ProfilePurpleImg from './../../Assets/Images/ProfilePurple.svg';
import ProfilePurpleFilledImg from './../../Assets/Images/ProfilePurpleFilled.svg';
import PhonePurpleImg from './../../Assets/Images/PhonePurple.svg';
import PhonePurpleFilledImg from './../../Assets/Images/PhonePurpleFilled.svg';
import Counter, {
  BigCounter,
  SmallCounter,
} from './../../Components/Counter/Counter';
import Tasks, {
  AmazingPartners,
  TalkingTaskers,
} from '../../Components/Sliders/Sliders';
import Button from '../../Components/Buttons/Buttons';
import Input from '../../Components/Inputs/Inputs';
import FAQs from '../../Components/FAQs/FAQs';
import Footer from '../../Components/Footer/Footer';
const HireHelpBody = () => {
  return (
    <div className="HireHelpBody">
      <IntroSection
        IntroSection="Hire Help, On Demand."
        GradientParagraphShort="Short staffed? Get the help you need,
when & where you need it.
"
        Learn="Learn More"
        IntroBckgd={MarketWorkerImg}
      />
      <BecomeTasker
        TaskerHeader="
Real-Time Help is Here
"
        TaskerParagraph="Helping you build a flexible, resilient workforce—Hyer quickly connects you to pool of
independent workers that are pre-vetted and ready to work. All through a simple app."
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
          AnimeHoverTextPurple="Insurance Coverage"
          AnimeHoverTextPurpleInvis="Hyer has general liability & accidental insurance."
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
      <TalentPool />
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
        ProfileHeader="Create a Business Profile"
        ProfileParagraph="Discover how easy it is to get the help you need."
        ProfileParagraphNext="Create your free business profile today, only pay once your task is
      completed."
      />
      <CaseLocation />
      <FAQs />
      <Footer />
    </div>
  );
};
export const TalentPool = () => {
  return (
    <div className="TalentPoolContainer">
      <div className="TalentPool">
        <div className="VideoContainer">
          <video controls>
            <source
              src="https://gohyer.com/wp-content/uploads/2023/01/DanDelGiudice_Hyer_ReinventingHowWorkGetsDone.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="Pool">
          <span className="PoolHeader">Tap Into a New Pool of Talent </span>
          <span className="PoolParagraph">
            With 50% of businesses already leveraging the gig economy to get the
            help they need, there’s never been a better time than now to try a
            new way to work. Delivering on-demand labor when and where you need
            it, Hyer connects you to a large pool of independent contractors
            that are pre-approved and ready to work. All through a simple app.
          </span>
          <Button Learn="Get Started Today" />
        </div>
      </div>
    </div>
  );
};
export const AchievementsPurple = (props) => {
  const PurpleAchievementsStyles = {
    background: `url("${HandsBckdPurpleImg}")`,
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
  };
  return (
    <div>
      <div className="AchievementsContainer" style={PurpleAchievementsStyles}>
        <AnimatedCards
          AnimeBounceOneTextImg="350,000"
          AnimeBounceTextTwo="Happy Taskers"
          AchievedImg={PeopleImg}
        />
        <AnimatedCards
          AnimeBounceOneTextImg={<SmallCounter />}
          AnimeBounceTextTwo="States Served"
          AchievedImg={LocationImg}
        />
        <AnimatedCards
          AnimeBounceOneTextImg="3,200,000"
          AnimeBounceTextTwo="Hours worked"
          AchievedImg={ClockImg}
        />
        <AnimatedCards
          AnimeBounceOneTextImg={'450,000'}
          AnimeBounceTextTwo="Tasked Completed"
          AchievedImg={HighFiveWhiteImg}
        />
      </div>
    </div>
  );
};

export const TeamTalk = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.TeamTalkContainer')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true); // Trigger the animation
          setAnimationTriggered(true); // Set the flag to indicate animation has been triggered
          window.removeEventListener('scroll', handleScroll); // Remove scroll listener after animation is triggered
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div className={`TeamTalkContainer ${showSection ? 'show animated' : ''}`}>
      <div className="TeamTalk">
        <div className="TeamTalkIntro">
          <span className="TeamTalkHeader">{props.TeamTalkHeader}</span>
          <span className="TeamTalkParagraph">{props.TeamTalkParagraph}</span>
        </div>
        <div className="TeamTalkInputs">
          <div className="TeamTalkInputNameContainer">
            <div className="TeamTalkInputsName">
              <Input InputName="Name*" />
            </div>

            <div className="TeamTalkInputsName">
              <Input InputEmail="Business Email*" />
            </div>
          </div>
          <div className="TeamTalkInputNameContainer">
            <div className="TeamTalkInputsName">
              <Input InputName="Company" />
            </div>

            <div className="TeamTalkInputsName">
              <Input InputEmail="Phone Number" />
            </div>
          </div>

          <div className="TeamTalkInputsCompany">
            <Input InputDetails="Additional Details (Optional)" />
          </div>
        </div>
      </div>
      <Button PillBorderBlack="Submit" />
    </div>
  );
};

export const TryOut = (props) => {
  return (
    <div className="TryOutContainer">
      <div className="TryOut">
        <span className="TryOutHeader">{props.TryOutHeader}</span>
        <span className="TryOutParagraph">{props.TryOutParagraph}</span>
      </div>
      <div className="FeaturesContainer">
        <AnimatedCards
          AnimeHoverTextPurple="1. Get the App"
          VisImage={PhonePurpleImg}
          InvisImage={PhonePurpleFilledImg}
          AnimeHoverTextPurpleInvis="Control your schedule— work when and where you want!"
        />
        <AnimatedCards
          AnimeHoverTextPurple="2. Create a Profile"
          VisImage={ProfilePurpleImg}
          InvisImage={ProfilePurpleFilledImg}
          AnimeHoverTextPurpleInvis="Complete a background check and start working today. (virtual
                HyeFive!)"
        />
        <AnimatedCards
          AnimeHoverTextPurple="
3. Hire Help
"
          VisImage={HelpersImg}
          InvisImage={HelpersPurpleImg}
          AnimeHoverTextPurpleInvis="Get qualified, vetted Taskers within minutes of posting a task"
        />
      </div>
    </div>
  );
};

export const BusinessProfile = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.BusinessProfile')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true); // Trigger the animation
          setAnimationTriggered(true); // Set the flag to indicate animation has been triggered
          window.removeEventListener('scroll', handleScroll); // Remove scroll listener after animation is triggered
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div className="BusinessProfileContainer">
      <div className={`BusinessProfile ${showSection ? 'show animated' : ''}`}>
        <span className="BusinessProfileHeader">{props.ProfileHeader}</span>
        <div className="BusinessProfileParagraphContainer">
          <span className="BusinessProfileParagraph">
            {props.ProfileParagraph}
          </span>
          <span className="BusinessProfileParagraph">
            {props.ProfileParagraphNext}
          </span>
        </div>
        <Button PillBorderBlack="Get Started" />
        {props.APIImg && <img className="APIImg" src={props.APIImg} />}
      </div>
    </div>
  );
};
export const CaseLocation = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.CaseLocationContainer')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true); // Trigger the animation
          setAnimationTriggered(true); // Set the flag to indicate animation has been triggered
          window.removeEventListener('scroll', handleScroll); // Remove scroll listener after animation is triggered
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div
      className={`CaseLocationContainer ${showSection ? 'show animated' : ''}`}
    >
      <div className="CaseContent">
        <AnimatedCards
          AnimeHoverOneBigTextImg="Read our case studies and learn why businesses are partnering with Hyer!"
          BigVisImage={CaseStudyImg}
          BigInvisImage={CaseStudyPurpleImg}
          AnimeHoverTextInvis={null}
        />
      </div>
      <div className="DividerGrey"></div>

      <div className="CaseLocationContent">
        <AnimatedCards
          AnimeHoverOneBigTextImg="Questions? We’re here to help!
Hyer FAQs and support right this way"
          BigVisImage={FAQPurpleImg}
          BigInvisImage={FAQPurpleFilledImg}
          AnimeHoverTextInvis={null}
        />
      </div>

      <div className="DividerGrey"></div>
      <div className="LocationCaseContent">
        <AnimatedCards
          AnimeHoverOneBigTextImg="With more than 350,000 Taskers in 27 states, find workers near you."
          BigVisImage={LocationPurpleImg}
          BigInvisImage={LocationPurpleFilledImg}
          AnimeHoverTextInvis={null}
        />
      </div>
    </div>
  );
};

export default HireHelpBody;
