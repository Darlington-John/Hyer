import React from 'react';
import './CommunityPageBody.css';
import { IntroSection } from '../../Components/Intro/IntroSection';
import DiversityImg from './../../Assets/Images/Diversity.jpg';
const CommunityPageBody = () => {
  return (
    <div className="CommunityPageBody">
      <IntroSection
        IntroSection="Diversity and Inclusion"
        GradientParagraph="Good Work for the Greater Good. 
"
        IntroBckgd={DiversityImg}
      />
      <GoodWork />
    </div>
  );
};
export const GoodWork = () => {
  return (
    <div className="GoodWork">
      <p className="GoodWorkHeader">
        Hyer was built with three core principles in mind: to empower people;
        provide opportunities and support the communities we serve.
      </p>
      <p>
        That’s why we focus on providing meaningful ways for people of all
        abilities to make money and make a difference—respecting their unique
        traits—and supporting them in working the way they want.
      </p>
      <p>
        We empower businesses by giving them the ability to fulfill important
        tasks as they arise—and value their distinct contributions to our
        society.
      </p>
      <p>
        We understand that good work can change the world—but it starts by doing
        good work in our own communities.
      </p>
      <p>Dave Dempsey Founder + CEO, Hyer</p>
    </div>
  );
};

export default CommunityPageBody;
