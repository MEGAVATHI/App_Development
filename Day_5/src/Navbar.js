import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const dropdownOptions = [
    { label: 'Personalized Gifts', path: '/personalization' },
    { label: 'Category', path: '/category' },
    { label: 'Occasion', path: '/occasion' },
    { label: 'Recipient', path: '/recipient' },
    
  ];

  return (
    <nav className="navbar">
      <div className="dropdown-container">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="dropdown-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {dropdownOptions.map((option, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <Link to={option.path}>{option.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className="logo-container">
        <span className="gift-portal">Happiness</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <LiveHelpIcon />
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <ShoppingCartIcon />
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myaccount" className="nav-link">
            My Account
          </Link>
          <AccountCircleIcon />
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            LogOut
          </Link>
          <HomeIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
