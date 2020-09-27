import React from 'react';
import './Footer.css';
import FooterLinks from './footer/FooterLinks';
import SocialMedia from './footer/SocialMedia';
import InputAreas from './footer/InputAreas';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <InputAreas/>
      </section>
      <FooterLinks/>
      <SocialMedia/>
    </div>
  );
}

export default Footer;