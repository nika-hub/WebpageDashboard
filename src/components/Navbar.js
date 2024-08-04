import React from 'react';
import { FaHome, FaReceipt, FaChartLine, FaUtensils, FaWallet, FaTh } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => (
  <div className="navcontainer">
    <div className="navbar">
    <div className="navdash">
    < FaTh className="dashicon" />
    </div>
      <div className="navItem">
        <FaHome className="icon" />
        <span className="iconName">Home</span>
      </div>
      <div className="navItem">
        <FaReceipt className="icon" />
        <span className="iconName">Receipt</span>
      </div>
      <div className="navItem">
        <FaChartLine className="icon" />
        <span className="iconName">Chart</span>
      </div>
      <div className="navItem">
        <FaUtensils className="icon" />
        <span className="iconName">Utensils</span>
      </div>
      <div className="navItem">
        <FaWallet className="icon" />
        <span className="iconName">Wallet</span>
      </div>
    </div>
  </div>
);

export default Navbar;
