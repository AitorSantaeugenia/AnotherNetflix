import React, { useState } from 'react';
import './PortfolioBanner.css';
import { IoMdClose } from 'react-icons/io';

const PortfolioBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="portfolio-banner">
      <div className="banner-content">
        <p>
          <span className="font-bold">🎓 Portfolio Project:</span> This is a demo application built for educational purposes only.
          <a href="https://github.com/AitorSantaeugenia/AnotherNetflix" target="_blank" rel="noopener noreferrer" className="github-link">
            View on GitHub
          </a>
        </p>
        <button onClick={() => setIsVisible(false)} className="close-button" aria-label="Close banner">
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default PortfolioBanner; 