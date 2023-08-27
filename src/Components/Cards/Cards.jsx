import React from 'react';
import './Cards.css';

const Cards = (props) => {
  return (
    <div>
      {props.LeadersCard && (
        <div className="LeadersCard">
          <img className="Leader" src={props.Leader} />
          <span className="LeaderName">{props.LeaderName}</span>
          <span className="LeaderRole">{props.LeaderRole}</span>
          <span className="Note">{props.LeadersCard}</span>
        </div>
      )}
      {props.AwardsCard && (
        <div className="AwardsCard">
          <img className="Award" src={props.Award} />
          <span className="AwardDate">{props.AwardDate}</span>
          <span className="AwardRole">{props.AwardRole}</span>
          <span className="Congrats">{props.AwardsCard}</span>
        </div>
      )}
    </div>
  );
};

export default Cards;
