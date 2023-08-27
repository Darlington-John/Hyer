import React from 'react';
import './FAQs.css';
import { MyAccordion } from '../Accordion/Accordion';

const FAQs = () => {
  return (
    <div className="FAQs">
      <span className="FAQsHeader">Frequently Asked Questions</span>
      <MyAccordion
        AccdFirstBody={
          <div className="AccordionBody">
            <span>Ready to work on your terms?</span>
            <li> You must be 18 years or older </li>
            <li>You must have a valid Social Security Number </li>
            <li>
              You must have access to a smartphone to view, apply to and perform
              tasks
            </li>
            <li>
              You must clear a mandatory background check that includes
              national, state and county record searches
            </li>
          </div>
        }
        AccdFirstHeader={
          <div>
            <span className="AccordionHeader">What are the requirements?</span>
          </div>
        }
        AccdSecondHeader={
          <div>
            <span className="AccordionHeader">
              What kind of task types are available on Hyer?
            </span>
          </div>
        }
        AccdSecondBody={
          <div className="AccordionBody">
            <span>
              Hyer offers a range of task types across multiple industries,
              including:
            </span>
            <li> Stocking</li>
            <li>Event Support </li>
            <li>Merchandising</li>
            <li>Restaurant</li>
            <li>Hospitality </li>
            <li>Delivery</li>
            <li>Warehouse Operations</li>
            <li>Manufacturing</li>
            <li>General Labor</li>
          </div>
        }
        AccdThirdHeader={
          <div>
            <span className="AccordionHeader">How do I get started?</span>
          </div>
        }
        AccdThirdBody={
          <div className="AccordionBody">
            <span>
              Simply head to the App Store (iPhone) or Google Play Store
              (Android) and download the Hyer Job Search App. Open the app and
              follow the sign-up instructions. It only takes a minute!?
            </span>
          </div>
        }
        AccdFourthHeader={
          <div>
            <span className="AccordionHeader">
              How does it all work? How do I get paid?
            </span>
          </div>
        }
        AccdFourthBody={
          <div className="AccordionBody">
            <span>
              Once you’ve downloaded the app, completed your profile and
              background check and set-up your debit card or bank account,
              you’ll be able to browse local tasks posted by customers on the
              app. Our easy to use tech helps you find work that works for you
              and your schedule!
            </span>
            <li>
              {' '}
              Once confirmed for the task, follow instructions to go to the work
              location and perform the task. Use the app to update task status
              (on the way, started working, done) and request payment.
            </li>
            <li>Get paid quickly with instant payouts. </li>
            <li>
              Rate your experiences and get recognized for a job well done.
            </li>
          </div>
        }
        AccdFifthHeader={
          <div>
            <span className="AccordionHeader">Is Hyer in my state?</span>
          </div>
        }
        AccdFifthBody={
          <div className="AccordionBody">
            <span>
              Hyer currently has tasks in 27 states with more in the works!
              (Michigan, Pennsylvania, Ohio, Kentucky, Indiana, Missouri,
              Illinois, Wisconsin, Iowa, Minnesota, Nebraska, North Dakota,
              Colorado, Arizona, Tennessee, Mississippi, Alabama, Georgia,
              Florida, North Carolina, New Jersey, Delaware, Maryland). Learn
              how to search for tasks in your neighborhood.
            </span>
          </div>
        }
      />
    </div>
  );
};

export default FAQs;
