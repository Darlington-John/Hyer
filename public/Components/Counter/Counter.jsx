import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const target = 1000;
  const duration = 1500;
  const interval = duration / target;

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const increment = target / (duration / interval);
          const counterInterval = setInterval(() => {
            setCount((prevCount) => Math.min(prevCount + increment, target));
          }, interval);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(document.querySelector('.counter-container'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="counter-container">
      <div className="counter">{Math.floor(count)}</div>
    </div>
  );
};

export const SmallCounter = () => {
  const [count, setCount] = useState(0);
  const target = 27;
  const duration = 3000;
  const interval = duration / target;

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const increment = target / (duration / interval);
          const counterInterval = setInterval(() => {
            setCount((prevCount) => Math.min(prevCount + increment, target));
          }, interval);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(document.querySelector('.counter-container'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="counter-container">
      <div className="counter">{Math.floor(count)}</div>
    </div>
  );
};
export default Counter;
