import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

const ScrollAnimationComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const a = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = a.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the element is in view
      if (rect.top >= 0 && rect.bottom <= viewportHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  ref={a} className={isVisible ? 'animate__animated animate__fadeInUp' : ''}>
      <div>I will animate each time you scroll into view</div>
    </div>
  );
};

export default ScrollAnimationComponent;
