import React, { useState, useEffect } from 'react';
import './IntroSection.css';

import Button from '../Buttons/Buttons';

export const IntroSection = (props) => {
  const IntroStyles = {
    background: `url("${props.IntroBckgd}")`,
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
  };
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    setShowSection(true);
  }, []);

  return (
    <div>
      {props.IntroSection && (
        <div
          className={`IntroSection ${showSection ? 'show animated' : ''}`}
          style={IntroStyles}
        >
          <div className="Gradient">
            <div className="GradientContent">
              <span className="GradientHeader">{props.IntroSection}</span>
              {props.GradientParagraph && (
                <span id="GradientParagraph">{props.GradientParagraph}</span>
              )}
              {props.GradientParagraphShort && (
                <span id="GradientParagraphShort">
                  {props.GradientParagraphShort}
                </span>
              )}
              {props.Learn && <Button Learn="Learn More" />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Live the Good Life
// Flexible work that fits your skills, your schedule, your life.
