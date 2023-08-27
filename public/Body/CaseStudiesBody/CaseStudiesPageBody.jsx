import React, { useState, useEffect } from 'react';
import './CaseStudiesPageBody.css';
import { IntroSection } from '../../Components/Intro/IntroSection';
import CaseStudyHeroImg from './../../Assets/Images/CaseStudyHero.jpg';
import HyerLineImg from './../../Assets/Images/HyerLine.png';
import BallsFoodLogoImg from './../../Assets/Images/BallsFoodLogo.png';
import SuperMarketImg from './../../Assets/Images/SuperMarket.jpg';
import CreativeLogoImg from './../../Assets/Images/CreativeLogo.png';
import PeopleEatImg from './../../Assets/Images/PeopleEat.jpg';
import BuffaloLogoImg from './../../Assets/Images/BuffaloLogo.png';
import PepsiImg from './../../Assets/Images/Pepsi.jpg';
import IceImg from './../../Assets/Images/Ice.png';
import IceDrinksImg from './../../Assets/Images/IceDrinks.jpg';
import GDILogoImg from './../../Assets/Images/GDILogo.png';
import CovidTidyImg from './../../Assets/Images/CovidTidy.jpg';
import NinoLogoImg from './../../Assets/Images/NinoLogo.png';
import NinoStoreImg from './../../Assets/Images/NinoStore.jpg';
import GoldingLogoImg from './../../Assets/Images/GoldingLogo.png';
import PastesImg from './../../Assets/Images/Pastes.jpg';
import { BecomeTasker } from '../HomePageBody/HomePageBody';
import { Link } from 'react-router-dom';
import { BusinessProfile } from '../HireHelpPageBody/HireHelpPageBody';
import { AmazingPartners } from '../../Components/Sliders/Sliders';
import Footer from '../../Components/Footer/Footer';

const CaseStudiesBody = () => {
  return (
    <div className="CaseStudiesBody">
      <IntroSection IntroSection="Case Studies" IntroBckgd={CaseStudyHeroImg} />
      <BecomeTasker
        TaskerHeader="
Delivering On-Demand Help
"
        TaskerParagraph="Discover how Hyer is helping businesses quickly meet their labor demands with the tap of an app."
        line={HyerLineImg}
      />
      <div className="BallsFood">
        <FlexLeft
          TextContent="Balls Foods, like many other businesses in the grocery and retail sector, has encountered a multitude of labor challenges in the wake of the COVID-19 pandemic. Despite being a prominent employer for 100 years across 27 supermarkets in the greater Kansas City area, the company has faced increasing difficulties recruiting and retaining talent. The shifting priorities of the modern workforce, which prioritize work-life balance and flexibility, have posed obstacles when it comes to staffing."
          ImgHeader={BallsFoodLogoImg}
          SecondText="Learn how using Hyer has helped the Balls Foods team quickly tap into on-demand talent to ramp up staffing needs across multiple locations."
          TextLink="Click here to view the case study"
        />
        <FlexRight ImgContent={SuperMarketImg} />
      </div>
      <div className="BallsFood">
        <FlexRight ImgContent={PeopleEatImg} />
        <FlexLeft
          TextContent="Named among the top 50 hospitality management companies by Food Management Magazine, Creative Dining Services partners with colleges, universities, Fortune 100 companies, full-service senior living communities, conference centers, and K-12 schools and camps to provide a different kind of hospitality and facility management services experience.
"
          ImgHeader={CreativeLogoImg}
          SecondText="Discover how their partnership with Hyer has enabled them to better meet the needs of their customers."
          TextLink="Click here to view the case study"
        />
      </div>
      <div className="BallsFood">
        <FlexLeftTwo
          TextContent="With over 120 years of experience in the beverage industry, Pepsi Buffalo Rock is the largest single-family owned Pepsi bottler in the United States.
 "
          ImgHeader={BuffaloLogoImg}
          SecondText="Looking to explore new and different ways of hiring mid-way through the pandemic, Buffalo Rock was challenged with finding a way to develop a workforce of the future. Learn how partnering with Hyer has helped strategically position them for long-term success. 
"
          TextLink="Click here to view the case study"
        />
        <FlexRightTwo ImgContent={PepsiImg} />
      </div>
      <div className="BallsFood">
        <FlexRightThree ImgContent={IceDrinksImg} />
        <FlexLeftThree
          TextContent="Talking Rain Beverage Company®, the makers of Sparkling Ice®, is a Washington-based beverage company that has been an industry leader for more than 30 years.
"
          ImgHeader={IceImg}
          SecondText="Last year,  they were looking for ways to increase their speed and service levels in-store, but without permanent display space, it was challenging. Discover the difference that was made after partnering with Hyer. "
          TextLink="Click here to view the case study"
        />
      </div>
      <AmazingPartners PartnersSliderPurple="Amazing Partners" />
      <div className="BallsFood">
        <FlexLeftFour
          TextContent="GDI is leading commercial facility services company with more than 20,000 employees serving of a variety of facility types throughout the United States and Canada.
 "
          ImgHeader={GDILogoImg}
          SecondText="During COVID-19, requests for facility cleaning services offered by them hit a high. Leaning on outside staffing agencies came to a halt as they too were experiencing similar staffing shortages. Discover what happened when they turned to Hyer. 
"
          TextLink="Click here to view the case study"
        />
        <FlexRightFour ImgContent={CovidTidyImg} />
      </div>
      <div className="BallsFood">
        <FlexRightFive ImgContent={NinoStoreImg} />
        <FlexLeftFive
          TextContent="Nino Salvaggio International Marketplace is a family-owned specialty grocery store chain that has been serving Southeast Michigan since 1978.
"
          ImgHeader={NinoLogoImg}
          SecondText="Struggling to meet seasonal demands, Nino’s looked to traditional staffing agencies to help with immediate labor needs, but the results they were getting couldn’t fill their gaps fast enough. Discover how Hyer helped them not just meet demand, but create a steady pool of on-demand talent."
          TextLink="Click here to view the case study"
        />
      </div>

      <div className="BallsFood">
        <FlexLeftSix
          TextContent="A leading manufacturer of private label, branded and co-manufactured sauces and condiments, Golding Farms Foods serves a wide range of end markets and product categories throughout the United States.
"
          ImgHeader={GoldingLogoImg}
          SecondText="In early 2020, after adding a third shift to meet increased production demands, they were faced with a labor shortage. Learn how Hyer helped them quickly scale their workforce to meet demand."
          TextLink="Click here to view the case study"
        />
        <FlexRightSix ImgContent={PastesImg} />
      </div>
      <BusinessProfile
        ProfileHeader="Create a Business Profile"
        ProfileParagraph="Discover how easy it is to get the help you need."
        ProfileParagraphNext="Create your free business profile today, only pay once your task is
      completed."
      />
      <Footer />
    </div>
  );
};
export const FlexLeft = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 0.5;
        const sectionOffset = document
          .querySelector('.FlexLeftContainer')
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
    <div className={`FlexLeftContainer ${showSection ? 'show animated' : ''}`}>
      {props.TextContent && (
        <div className="TextContent">
          <img src={props.ImgHeader} />
          <div className="FirstText">
            <span>{props.TextContent}</span>
          </div>
          <div className="SecondText">
            <span>{props.SecondText}</span>
          </div>
          <div className="LinkText">
            <Link to="#">{props.TextLink}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const FlexRight = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.Kelvin')
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
      className={`FlexRightContainer Kelvin ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.ImgContent && (
        <div className="ImgContent">
          <img src={props.ImgContent} />
        </div>
      )}
    </div>
  );
};
export const FlexLeftTwo = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexLeftContainerTwo')
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
      className={`FlexLeftContainer FlexLeftContainerTwo ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.TextContent && (
        <div className="TextContent">
          <img src={props.ImgHeader} />
          <div className="FirstText">
            <span>{props.TextContent}</span>
          </div>
          <div className="SecondText">
            <span>{props.SecondText}</span>
          </div>
          <div className="LinkText">
            <Link to="#">{props.TextLink}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const FlexRightTwo = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexRightTwo')
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
      className={`FlexRightContainer FlexRightTwo ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.ImgContent && (
        <div className="ImgContent">
          <img src={props.ImgContent} />
        </div>
      )}
    </div>
  );
};
export const FlexLeftThree = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexLeftThree')
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
      className={`FlexLeftContainer FlexLeftThree ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.TextContent && (
        <div className="TextContent">
          <img src={props.ImgHeader} />
          <div className="FirstText">
            <span>{props.TextContent}</span>
          </div>
          <div className="SecondText">
            <span>{props.SecondText}</span>
          </div>
          <div className="LinkText">
            <Link to="#">{props.TextLink}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const FlexRightThree = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexRightThree')
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
      className={`FlexRightContainer FlexRightThree ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.ImgContent && (
        <div className="ImgContent">
          <img src={props.ImgContent} />
        </div>
      )}
    </div>
  );
};
export const FlexLeftFour = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexLeftFour')
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
      className={`FlexLeftContainer FlexLeftFour ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.TextContent && (
        <div className="TextContent">
          <img src={props.ImgHeader} />
          <div className="FirstText">
            <span>{props.TextContent}</span>
          </div>
          <div className="SecondText">
            <span>{props.SecondText}</span>
          </div>
          <div className="LinkText">
            <Link to="#">{props.TextLink}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const FlexRightFour = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexRightFour')
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
      className={`FlexRightContainer FlexRightFour ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.ImgContent && (
        <div className="ImgContent">
          <img src={props.ImgContent} />
        </div>
      )}
    </div>
  );
};
export const FlexLeftFive = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexLeftFive')
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
      className={`FlexLeftContainer FlexLeftFive ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.TextContent && (
        <div className="TextContent">
          <img src={props.ImgHeader} />
          <div className="FirstText">
            <span>{props.TextContent}</span>
          </div>
          <div className="SecondText">
            <span>{props.SecondText}</span>
          </div>
          <div className="LinkText">
            <Link to="#">{props.TextLink}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const FlexRightFive = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexRightFive')
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
      className={`FlexRightContainer FlexRightFive ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.ImgContent && (
        <div className="ImgContent">
          <img src={props.ImgContent} />
        </div>
      )}
    </div>
  );
};
export const FlexLeftSix = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexLeftSix')
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
      className={`FlexLeftContainer FlexLeftSix ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.TextContent && (
        <div className="TextContent">
          <img src={props.ImgHeader} />
          <div className="FirstText">
            <span>{props.TextContent}</span>
          </div>
          <div className="SecondText">
            <span>{props.SecondText}</span>
          </div>
          <div className="LinkText">
            <Link to="#">{props.TextLink}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const FlexRightSix = (props) => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.FlexRightSix')
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
      className={`FlexRightContainer FlexRightSix ${
        showSection ? 'show animated' : ''
      }`}
    >
      {props.ImgContent && (
        <div className="ImgContent">
          <img src={props.ImgContent} />
        </div>
      )}
    </div>
  );
};
export default CaseStudiesBody;
