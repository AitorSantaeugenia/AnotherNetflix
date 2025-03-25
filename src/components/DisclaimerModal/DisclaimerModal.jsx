import React from 'react';
import './DisclaimerModal.css';
import { IoMdClose } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';

const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="disclaimer-modal-overlay">
      <div className="disclaimer-modal">
        <button onClick={onClose} className="modal-close-button">
          <IoMdClose />
        </button>
        <div className="modal-content">
          <h2>⚠️ Important Disclaimer</h2>
          <div className="disclaimer-text">
            <p className="main-disclaimer">
              This is a <strong>portfolio project</strong> created for educational and demonstration purposes only.
            </p>
            <div className="disclaimer-details">
              <p>Please note:</p>
              <ul>
                <li>This is <strong>not</strong> the real Netflix platform</li>
                <li>No commercial features are implemented</li>
                <li>No real payment processing is involved</li>
                <li>All content is for demonstration purposes only</li>
              </ul>
            </div>
            <div className="project-info">
              <p>This project was built to demonstrate skills in:</p>
              <ul>
                <li>React.js Development</li>
                <li>Firebase Integration</li>
                <li>Responsive Design</li>
                <li>Modern UI Implementation</li>
              </ul>
            </div>
            <div className="github-section">
              <a 
                href="https://github.com/AitorSantaeugenia/AnotherNetflix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-button"
              >
                <FaGithub /> View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal; 