import React from 'react';
import './BlogPageBody.css';
import HyerLifeImg from './../../Assets/Images/HyerLife.png';
import EdwardImg from './../../Assets/Images/Edward.png';
import HumphreyImg from './../../Assets/Images/Humphrey.png';
import RoselynImg from './../../Assets/Images/Roselyn.png';
import JeronImg from './../../Assets/Images/Jeron.png';
import AngelaImg from './../../Assets/Images/Angela.png';
import ChrisImg from './../../Assets/Images/Chris.png';
import LaborImg from './../../Assets/Images/Labor.png';
import AbdorImg from './../../Assets/Images/Abdor.png';
import KathyImg from './../../Assets/Images/Kathy.png';
import KarinImg from './../../Assets/Images/Karin.png';
import CrushImg from './../../Assets/Images/Crush.png';
import MelodyImg from './../../Assets/Images/Melody.png';
import MarkImg from './../../Assets/Images/Mark.png';
import JasonImg from './../../Assets/Images/Jason.png';
import TackleImg from './../../Assets/Images/Tackle.jpg';
import Cards from '../../Components/Cards/Cards';
const BlogPageBody = () => {
  return (
    <div className="BlogPageBody">
      <HyerLife />
      <div className="BlogPageCards">
        <Cards
          Award={EdwardImg}
          AwardDate="July 27, 2023"
          AwardRole="July 2023 Tasker of the Month
"
          AwardsCard="Congrats to Edward, our July Tasker of the Month! Looking for ways to supplement my Social Security income…

"
        />
        <Cards
          Award={HumphreyImg}
          AwardDate="June 28, 2023

"
          AwardRole="June 2023 Tasker of the Month
"
          AwardsCard="Congrats to Humphrey, our June Tasker of the Month! I have been a tasker for a year and…

"
        />
        <Cards
          Award={RoselynImg}
          AwardDate="May 25, 2023



"
          AwardRole="May 2023 Tasker of the Month
"
          AwardsCard="Congrats to Roselynique, our May Tasker of the Month! I chose to become a Tasker 2 years ago…

"
        />
        <Cards
          Award={JeronImg}
          AwardDate="April 27, 2023

"
          AwardRole="April 2023 Tasker of the Month
"
          AwardsCard="Congrats to Jeron, our April Tasker of the Month! I’ve enjoyed being a Hyer Tasker for almost a…

"
        />
        <Cards
          Award={AngelaImg}
          AwardDate="March 27, 2023"
          AwardRole="March 2023 Tasker of the Month
"
          AwardsCard="Congrats to Angela, our March Tasker of the Month! Each month we ask our Tasker of the Month…

"
        />
        <Cards
          Award={ChrisImg}
          AwardDate="February 27, 2023"
          AwardRole="February 2023 Tasker of the Month
"
          AwardsCard="Congrats to Chris, our February Tasker of the Month! We love hearing praises from our customers when it…

"
        />
        <Cards
          Award={LaborImg}
          AwardDate="January 10, 2023

"
          AwardRole="2023 Labor Trends: The Great Transition to Gig
"
          AwardsCard="A new year is upon us. As we look in the rearview mirror, the road has been a…

"
        />
        <Cards
          Award={AbdorImg}
          AwardDate="January 25, 2023



"
          AwardRole="January 2023 Tasker of the Month
"
          AwardsCard="Congrats to Abdur, our January Tasker of the Month! With more than 20 years of retail service experience, …

"
        />
        <Cards
          Award={KathyImg}
          AwardDate="December 20, 2022
"
          AwardRole="December Tasker of the Month
"
          AwardsCard="Congrats to Kathy, our December Tasker of the Month! With 43 years of retail experience, I became a…

"
        />
        <Cards
          Award={KarinImg}
          AwardDate="November 22, 2022


"
          AwardRole="November Tasker of the Month
"
          AwardsCard="Congrats to Karin, our November Tasker of the Month! I became a Hyer Tasker in March of 2020….
"
        />
        <Cards
          Award={CrushImg}
          AwardDate="October 7, 2022


"
          AwardRole="3 Ways to Crush the Holiday Hiring Rush
"
          AwardsCard="‘Tis the season for holiday hiring. Whether you’ve been planning for months–or are just now gearing up for…

"
        />
        <Cards
          Award={MelodyImg}
          AwardDate="October 27, 2022


"
          AwardRole="October Tasker of the Month
"
          AwardsCard="Congrats to Melody, our October Tasker of the Month! I became a Tasker in July 2020.  I had…

"
        />
        <Cards
          Award={MarkImg}
          AwardDate="August 26, 2022




"
          AwardRole="August Tasker of the Month
"
          AwardsCard="Congrats to Mark, our August Tasker of the Month! I became a Tasker in April of 2019. Due…

"
        />
        <Cards
          Award={JasonImg}
          AwardDate="September 26, 2022


"
          AwardRole="September Tasker of the Month
"
          AwardsCard="Congrats to Jason, our September Tasker of the Month! I became a Hyer Tasker in October 2020. The…



"
        />
        <Cards
          Award={TackleImg}
          AwardDate="August 30, 2022




"
          AwardRole="Turnover and the Tale of Two Job Markets
"
          AwardsCard="Turnover and the Tale of Two Job Markets It was the best of times, it was the worst…

"
        />
      </div>
    </div>
  );
};
export const HyerLife = () => {
  return (
    <div className="HyerLife">
      <img src={HyerLifeImg} />
      <span className="LifeBlog">Home / Hire Life Blog</span>
    </div>
  );
};

export default BlogPageBody;
