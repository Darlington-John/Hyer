import React, { useState } from 'react';
import './Accordion.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';

const NavAccordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleNavAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div className="accordion-section" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleNavAccordion(index)}
          >
            {section.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export const MyAccordion = (props) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="AccdHeader">{props.AccdFirstHeader}</span>
        </Accordion.Header>
        <Accordion.Body>
          <span className="AccdBody">{props.AccdFirstBody}</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span className="AccdHeader">{props.AccdSecondHeader}</span>
        </Accordion.Header>
        <Accordion.Body>
          <span className="AccdBody">{props.AccdSecondBody}</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span className="AccdHeader">{props.AccdThirdHeader}</span>
        </Accordion.Header>
        <Accordion.Body>
          <span className="AccdBody">{props.AccdThirdBody}</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <span className="AccdHeader">{props.AccdFourthHeader}</span>
        </Accordion.Header>
        <Accordion.Body>
          <span className="AccdBody">{props.AccdFourthBody}</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <span className="AccdHeader">{props.AccdFifthHeader}</span>
        </Accordion.Header>
        <Accordion.Body>
          <span className="AccdBody">{props.AccdFifthBody}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default NavAccordion;
