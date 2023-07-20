import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

// import logo1 from 
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo-container">
     

      <span className="gift-portal">
      Happiness</span>
    </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
          <LiveHelpIcon/>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
          <ShoppingCartIcon/>
          Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/myaccount" className="nav-link">
          My Account</Link>
          <AccountCircleIcon/>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          LogOut</Link>
          <HomeIcon/>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
