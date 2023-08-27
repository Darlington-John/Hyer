import React from 'react';
import './AboutPageBody.css';
import { IntroSection } from '../../Components/Intro/IntroSection';
import TeamShakeImg from './../../Assets/Images/TeamShake.jpg';
import HyerLineImg from './../../Assets/Images/HyerLine.png';
import DaveImg from './../../Assets/Images/Dave.png';
import JenniferImg from './../../Assets/Images/Jennifer.png';
import PankajImg from './../../Assets/Images/Pankaj.png';
import DanImg from './../../Assets/Images/Dan.png';
import JoeyImg from './../../Assets/Images/Joey.png';
import MarioImg from './../../Assets/Images/Mario.png';
import DannyImg from './../../Assets/Images/Danny.png';
import KatieImg from './../../Assets/Images/Katie.png';
import { BecomeTasker } from '../HomePageBody/HomePageBody';
import Cards from '../../Components/Cards/Cards';
import { AmazingPartners } from '../../Components/Sliders/Sliders';
const AboutPageBody = () => {
  return (
    <div className="AboutPageBody">
      <IntroSection
        IntroSection="Hyer Team"
        GradientParagraphShort="Good work is good for us all.
"
        IntroBckgd={TeamShakeImg}
      />

      <BecomeTasker
        TaskerHeader="
Hyer Leadership Team
"
        line={HyerLineImg}
      />
      <div className="FirstTier">
        <Cards
          LeadersCard="Aspiring Long Distance Runner, Steak & Wine Enthusiast
"
          Leader={DaveImg}
          LeaderName="Dave Dempsey"
          LeaderRole="Founder & CEO"
        />
        <Cards
          LeadersCard="Pushing through parenting and work with loud 80’s music.


"
          Leader={JenniferImg}
          LeaderName="Jennifer Solmi"
          LeaderRole="Co-Founder & Chief Information Officer

"
        />
        <Cards
          LeadersCard="Groovy Bass Player & Master Multi-Tasker

"
          Leader={PankajImg}
          LeaderName="Pankaj Kanth"
          LeaderRole="Co-Founder & Chief Technology Officer
"
        />
      </div>
      <div className="FirstTier">
        <Cards
          LeadersCard="Aspiring Golfer, Foodie & Self-Proclaimed Green Thumb

"
          Leader={DanImg}
          LeaderName="Dan Dempsey"
          LeaderRole="Vice President, Operations

"
        />
        <Cards
          LeadersCard="Recreational Sports League Fanatic & Diehard Detroit Lions Fan

"
          Leader={JoeyImg}
          LeaderName="Joey Dempsey"
          LeaderRole="Chief Financial Officer

"
        />
        <Cards
          LeadersCard="Family Man & Golf Enthusiast

"
          Leader={MarioImg}
          LeaderName="Mario Mercurio"
          LeaderRole="Co-Founder & Chief Operations Officer

"
        />
      </div>
      <div className="LastTier">
        <Cards
          LeadersCard="Family Man, Aspiring Pizzaiola, Saved by the Bell Fanatic

"
          Leader={DannyImg}
          LeaderName="Dan DelGiudice"
          LeaderRole="Vice President, Partnerships

"
        />
        <Cards
          LeadersCard="Avid Outdoorswoman, Proud Mama, Espresso Addict

"
          Leader={KatieImg}
          LeaderName="Katie Krogstad"
          LeaderRole="Vice President, Marketing

"
        />
      </div>
      <AmazingPartners PartnersSliderBlue="Amazing Partners" />
    </div>
  );
};

export default AboutPageBody;
