import React from 'react';
import './Buttons.css';
const Button = (props) => {
  return (
    <div className="Buttons">
      {props.PillBorderBlack && (
        <button className="PillBorderBlack">{props.PillBorderBlack}</button>
      )}
      {props.Learn && <button id="Learn">{props.Learn}</button>}
      {props.LogIn && <button id="LogIn">{props.LogIn}</button>}
    </div>
  );
};

export default Button;
