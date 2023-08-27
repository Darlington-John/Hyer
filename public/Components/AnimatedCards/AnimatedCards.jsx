import React from 'react';
import './AnimatedCards.css';

const AnimatedCards = (props) => {
  return (
    <div className="AnimatedCards">
      {props.AnimeHoverTextImg && (
        <div className="Features">
          <div className="FeaturesImageContainer">
            <img src={props.VisImage} className="VisImage" />
            <img src={props.InvisImage} className="InvisImage" />
          </div>
          <div className="text-container">
            <span className="text">{props.AnimeHoverTextImg}</span>
            <span className="text hover">{props.AnimeHoverTextInvis}</span>
          </div>
        </div>
      )}
      {props.AnimeHoverTextPurple && (
        <div className="Features">
          <div className="FeaturesImageContainer">
            <img src={props.VisImage} className="VisImage" />
            <img src={props.InvisImage} className="InvisImage" />
          </div>
          <div className="text-container">
            <span className="TextPurple">{props.AnimeHoverTextPurple}</span>
            <span className="TextPurple hoverPurple">
              {props.AnimeHoverTextPurpleInvis}
            </span>
          </div>
        </div>
      )}
      {props.AnimeHoverOneTextImg && (
        <div className="Features">
          <div className="FeaturesImageContainer">
            <img src={props.VisImage} className="VisImage" />
            <img src={props.InvisImage} className="InvisImage" />
          </div>
          <div className="text-container">
            {props.AnimeHoverOneTextImg && (
              <span>{props.AnimeHoverOneTextImg}</span>
            )}
          </div>
        </div>
      )}
      {props.AnimeHoverOneTextImgPurple && (
        <div className="Features">
          <div className="FeaturesImageContainer">
            <img src={props.VisImage} className="VisImage" />
            <img src={props.InvisImage} className="InvisImage" />
          </div>
          <div className="text-container">
            {props.AnimeHoverOneTextImgPurple && (
              <span className="AnimeHoverOneTextImgPurple">
                {props.AnimeHoverOneTextImgPurple}
              </span>
            )}
          </div>
        </div>
      )}

      {props.AnimeHoverOneBigTextImg && (
        <div className="BigFeatures">
          <div className="BigFeaturesImageContainer">
            <img src={props.BigVisImage} className="BigVisImage" />
            <img src={props.BigInvisImage} className="BigInvisImage" />
          </div>
          <div className="Bigtext-container">
            <span>{props.AnimeHoverOneBigTextImg}</span>
          </div>
        </div>
      )}
      {props.AnimeBounceOneTextImg && (
        <div className="Achievements">
          <div className="AchievedImgContainer">
            <img src={props.AchievedImg} className="AchievedImg" />
          </div>
          <span className="AchievedNo">{props.AnimeBounceOneTextImg}</span>
          <span className="AchievedItem">{props.AnimeBounceTextTwo}</span>
        </div>
      )}
      {props.ImgCard && (
        <div className="PartnersCard">
          <img src={props.ImgCard} />
        </div>
      )}
    </div>
  );
};

export default AnimatedCards;
