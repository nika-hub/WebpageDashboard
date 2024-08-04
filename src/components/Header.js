import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faCog, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faEnvelope} className="icon message-icon" />
        <div className="notification-container">
          <FontAwesomeIcon icon={faBell} className="icon notification-icon" />
          <span className="notification-indicator"></span>
        </div>
        <FontAwesomeIcon icon={faCog} className="icon settings-icon" />
        <FontAwesomeIcon icon={faUser} className="icon profile-icon" />
      </div>
    </header>
  );
};

export default Header;
