import React, { useState, useEffect } from 'react';
import './HomePageBody.css';
import 'swiper/css';
import 'swiper/css/pagination';
import WareWorkerImg from './../../Assets/Images/WareWorker.png';
import HyerLineImg from './../../Assets/Images/HyerLine.png';
import HyerLineBlackImg from './../../Assets/Images/HyerLineBlack.png';
import PhoneImg from './../../Assets/Images/Phone.svg';
import ActiveImg from './../../Assets/Images/Active.svg';
import ProfileImg from './../../Assets/Images/Profile.svg';
import HighFiveImg from './../../Assets/Images/HighFive.svg';
import GetPaidImg from './../../Assets/Images/GetPaid.svg';
import ChooseTasksImg from './../../Assets/Images/ChooseTasks.svg';
import PlayStoreImg from './../../Assets/Images/PlayStore.png';
import AppStoreImg from './../../Assets/Images/AppStore.png';

import PeopleImg from './../../Assets/Images/People.png';
import LocationImg from './../../Assets/Images/Location.png';
import ClockImg from './../../Assets/Images/Clock.png';
import HighFiveWhiteImg from './../../Assets/Images/HighFiveWhite.png';
import HandsBckgrndImg from './../../Assets/Images/HandsBckgrnd.png';

import FAQImg from './../../Assets/Images/FAQ.svg';
import FAQBlueImg from './../../Assets/Images/FAQBlue.svg';
import StaticLocationImg from './../../Assets/Images/StaticLocation.svg';
import StaticLocationBlueImg from './../../Assets/Images/StaticLocationBlue.svg';
import AnimatedCards from './../../Components/AnimatedCards/AnimatedCards';
import Counter from './../../Components/Counter/Counter';
import FAQs from './../../Components/FAQs/FAQs';
import { IntroSection } from '../../Components/Intro/IntroSection';
import Tasks, {
  AmazingPartners,
  TalkingTaskers,
} from '../../Components/Sliders/Sliders';
export const HomeBody = () => {
  return (
    <div className="HomeBody">
      <IntroSection
        IntroSection="Live the Good Life"
        GradientParagraph="Flexible work that fits your skills, your schedule, your life.
"
        IntroBckgd={WareWorkerImg}
      />
      <BecomeTaskerSection />

      <DownloadHyerSection />
      <Tasks
        TasksBlue="From General to Skilled, Choose from Multiple Task Types!"
        TasksBlueRespnv="From General to Skilled, Choose from Multiple Task Types!"
      />
      <FlexibleWork />
      <Achievements />

      <AmazingPartners PartnersSliderBlue="Amazing Partners" />
      <TalkingTaskers
        TalkingTaskers="Our Taskers are Talking"
        FirstTaskerTalk=" 'I've been using the Hyer app now for a while—it's been a
                     great opportunity to help me get back on my feet! If you're
                     looking for a bit of a side hustle that allows you to go to
                     different locations and meet solid new people while making
                     money, it works out rather well.'"
        FirstTalker="Price Hyer Tasker"
        SecondTalkerTalk="  'I enjoy the flexibility of working through the Hyer App.
                     Being able to create my own schedule has given me the
                     opportunity to remain financially stable and continue to be
                   consistently active in my children’s and family’s lives.'"
        SecondTalker="Christiana / Michigan Tasker"
        ThirdTalkerTalk="   'With Hyer, I am in control of my work life. The flexibility
                     to work where, how and with whom I want is great—making
                     decisions for the lifestyle I want. Hyer has given me the
                     wonderful opportunity to earn as much income as I desire.
                     There is no limit!'"
        ThirdTalker="Alyona / Hyer Tasker"
      />
      <HelpLocation />
      <FAQs />
    </div>
  );
};

export const BecomeTasker = (props) => {
  return (
    <div className="BecomeTaskerSection">
      <span className="BecomeTaskerHeader">{props.TaskerHeader}</span>
      <img src={props.line} />
      <span className="BecomeTaskerParagraph">{props.TaskerParagraph}</span>
    </div>
  );
};

export const BecomeTaskerSection = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.BecomeTaskerSectionContainer')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [[animationTriggered]]);
  return (
    <div
      className={`BecomeTaskerSectionContainer ${
        showSection ? 'show animated' : ''
      }`}
    >
      <BecomeTasker
        TaskerHeader="Become a Tasker"
        TaskerParagraph="Finally, flexible gig work that works for you. Where all you have to
          do is pick your task, pick your time and make a good living on your
          terms. All in the tap of an app!"
        line={HyerLineImg}
      />
      <div className="SimpleUseContainer">
        <div className="SimpleUse">
          <span className="SimpleUseHeader">Hyer is Simple to Use:</span>
          <span className="SimpleUseParagraph">
            It connects people (like you) to work opportunities (you like).
          </span>
        </div>
        <div className="FeaturesContainer">
          <AnimatedCards
            AnimeHoverTextImg="1. Get the App"
            VisImage={PhoneImg}
            InvisImage={ActiveImg}
            AnimeHoverTextInvis="Control your schedule— work when and where you want!"
          />
          <AnimatedCards
            AnimeHoverTextImg="2. Create a Profile"
            VisImage={ProfileImg}
            InvisImage={HighFiveImg}
            AnimeHoverTextInvis="Complete a background check and start working today. (virtual
                HyeFive!)"
          />
          <AnimatedCards
            AnimeHoverTextImg="3. Work & Pay"
            VisImage={GetPaidImg}
            InvisImage={ChooseTasksImg}
            AnimeHoverTextInvis="Choose tasks that suit your skills and get paid (Hyer
                Instant Payout)"
          />
        </div>
      </div>
    </div>
  );
};
const DownLoadHyer = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.DownloadHyerSection')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
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
      className={`DownloadHyerSection ${showSection ? 'show animated' : ''}`}
    >
      <div>
        <span className="DownloadHyerHeader"> Download Hyer Today!</span>
      </div>
      <div className="DownloadHyerBadges">
        <div className="AppStore">
          <img src={AppStoreImg} />
        </div>
        <div className="PlayStore">
          <img src={PlayStoreImg} />
        </div>
      </div>
    </div>
  );
};

export const DownloadHyerSection = () => {
  return (
    <div className="DownloadHyerContainer">
      <DownLoadHyer />
    </div>
  );
};

export const FlexibleWork = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.flexibleWork')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div className={`flexibleWork ${showSection ? 'show animated' : ''}`}>
      <BecomeTasker
        TaskerHeader="Find Flexible Work at Your Fingertips"
        line={HyerLineImg}
        TaskerParagraph="Look, a typical 9 to 5 job isn’t for everyone.

And who likes jumping from one job search app to another? 

We’re all seeing how the world of work is changing all around us. (Heyo: Gig Economy, anyone?)

People want more flexibility and control over their schedules. To spend more time with family. 

To pick up tasks when it makes sense. To apply different sets of skills in different places.

Already, Hyer Taskers are finding thousands of flexible opportunities every single day. 

Download the app today and discover how Hyer can work for the way you work and live."
      />
    </div>
  );
};

export const Achievements = (props) => {
  const AchievementsStyles = {
    background: `url("${HandsBckgrndImg}")`,
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
  };
  return (
    <div>
      <div className="AchievementsContainer" style={AchievementsStyles}>
        <AnimatedCards
          AnimeBounceOneTextImg="350,000"
          AnimeBounceTextTwo="Happy Taskers"
          AchievedImg={PeopleImg}
        />
        <AnimatedCards
          AnimeBounceOneTextImg="27"
          AnimeBounceTextTwo="States Served"
          AchievedImg={LocationImg}
        />
        <AnimatedCards
          AnimeBounceOneTextImg={<Counter />}
          AnimeBounceTextTwo="Daily Tasks"
          AchievedImg={ClockImg}
        />
        <AnimatedCards
          AnimeBounceOneTextImg={'520,000'}
          AnimeBounceTextTwo="Virtual Hye Five"
          AchievedImg={HighFiveWhiteImg}
        />
      </div>
      <DownLoadHyer />
    </div>
  );
};

export const HelpLocation = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.HelpLocationContainer')
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
      className={`HelpLocationContainer ${showSection ? 'show animated' : ''}`}
    >
      <div className="HelpContent">
        <AnimatedCards
          AnimeHoverOneBigTextImg="Questions? We’re here to help!
Hyer FAQs and support right this way"
          BigVisImage={FAQImg}
          BigInvisImage={FAQBlueImg}
          AnimeHoverTextInvis={null}
        />
      </div>
      <div className="Divider"></div>
      <div className="LocationContent">
        <AnimatedCards
          AnimeHoverOneBigTextImg="Download the app today and find tasks across 27 states. (With more...)"
          BigVisImage={StaticLocationImg}
          BigInvisImage={StaticLocationBlueImg}
          AnimeHoverTextInvis={null}
        />
      </div>
    </div>
  );
};
