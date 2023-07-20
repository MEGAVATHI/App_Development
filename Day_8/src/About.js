import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const About = () => {
  return (
    <div  className="container">
    <Navbar/>
      <h1>About Us </h1>
      <p>
      A gift shop is a store primarily selling souvenirs relating to a particular topic or theme.
       Items sold include kitchenware, toys, T-shirts, postcards and handmade collections. 
       Gift shops are often found in tourist areas, although this is not always the case.
       A personalised gift is made exclusively for a person by having their name or picture 
       engraved or imprinted on a cushion, photo frame, mug, keyring or pen. 
       It lets the recipient know that this gift is specifically made and selected for t
       hem after putting much thought and effort.
      </p>
      <div style={{ marginTop: '70px' }}>  
      <Link to="/home" style={{ color: '#333',fontFamily:'cursive', fontSize: '20px',textDecoration: 'none', }}>
     <ArrowBackIosIcon/>Go back</Link>
    </div>
    </div>
  );
};

export default About;

