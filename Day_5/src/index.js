import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import Navbar from './Navbar';
import HomePage1 from './HomePage1';
import About from './About';
import Terms from './Terms';
import Footer from './Footer';
import Personalization from './Personalization';
import Category from './Category';
import Recipient from './Recipient';
import Occasion from './Occasion';
import OtherPage from './OtherPage';
import PaymentPage from './PaymentPage';
import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import Upi from './Upi';
import { Provider } from 'react-redux';
import store from './store';
import Feedback from './Feedback';
import Details from './Details';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/terms" element={<Terms/>} />
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/personalization" element={<Personalization />} />
        <Route path="/occasion" element={<Occasion/>} />
        <Route path="/category" element={<Category />} />
        <Route path="/recipient" element={<Recipient />} />
        <Route path="/other-page" element={<OtherPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route exact path="/credit-card" component={CreditCard} />
        <Route exact path="/debit-card" component={DebitCard} />
        <Route exact path="/upi" component={Upi} />
        <Route path="/home" element={
            <>
              <Navbar />
             <Footer/>
              <HomePage1 />
            </>
          }
        />
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// <Route path="/terms" element={<TermsAndConditions />} />