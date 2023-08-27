import React from 'react';
import './Inputs.css';
import ArrRightIcon from './../../Assets/Icons/ArrRight.svg';

const Input = (props) => {
  return (
    <div className="input">
      {props.InputName && (
        <input
          type="text"
          className="NameInput"
          placeholder={props.InputName}
        />
      )}
      {props.InputEmail && (
        <input
          type="text"
          className="NameInput"
          placeholder={props.InputEmail}
        />
      )}
      {props.InputDetails && (
        <textarea
          type="text"
          className="textarea"
          placeholder={props.InputDetails}
        />
      )}
      {props.InputEmailAddress && (
        <div className="InputAddress">
          <input
            type="text"
            className="Address"
            placeholder={props.InputEmailAddress}
          />
          <span className="SendIcon">
            <img src={ArrRightIcon} />
          </span>
        </div>
      )}
      {props.NoPlaceholderInput && (
        <input
          className="NoPlaceholder"
          placeholder={props.NoPlaceholderInput}
          type="text"
        />
      )}
    </div>
  );
};

export default Input;
