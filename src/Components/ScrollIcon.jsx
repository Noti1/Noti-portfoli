// ScrollIcon.js
import React, { useState, useEffect } from 'react';


const ScrollIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`scroll-icon ${showIcon ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      &#8593;
    </div>
  );
};

export default ScrollIcon;
