import React ,{ useState }from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Terms = () => {
  const [setIconColor] = useState('#333');

  const handleClick = () => {
    setIconColor('red'); 
  };
  return (
    <div  className="container">
    
      <Footer/>
      <h1 style={{ color: 'red', fontSize: '28px', marginBottom: '10px' }}>TERMS AND CONDITIONS</h1>
      <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.5' }}>
      * If users abuse your website or mobile app in any way, you can terminate their account.
        Your "Termination" clause can inform users that their accounts would be terminated if they abuse your service.</p>
      
      
       <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.5' }}>* If users can post content on your website or mobile app (create content and share it on your platform), 
       you can remove any content they created if it infringes copyright. Your Terms and Conditions will inform users that 
       they can only create and/or share content they own rights to. </p>
       <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.5' }}>Similarly, if users can register for an account and choose a username, you can inform users that they are not allowed 
       to choose usernames that may infringe trademarks, i.e. usernames like Google, Facebook, and so on.</p>
       <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.5' }}>* If you sell prnoducts or services, you could 
       cancel specific orders if a product price is incorrect. Your Terms and Conditions can include a clause to inform users that certain orders, at your sole discretion, can be canceled if the products ordered have incorrect prices due to various errors.
        And many more examples.</p>
      
        <div style={{ marginTop: '70px' }}>  
      <Link to="/home" style={{ color: '#333',fontFamily:'cursive', fontSize: '20px',textDecoration: 'none', }}>
     <ArrowBackIosIcon/>Go back</Link>
    </div>
    </div>
  );
};

export default Terms;

