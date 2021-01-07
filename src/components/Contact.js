import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-inner">

            <div className="contact-section-container">
            {/* <div className="contact-section-image"></div> */}
            <div className="contact-section-text">
              Pick my<span className="text-italic"> brain </span> and let's get <span className="text-bolder">started</span> on your project
            </div>
            <div className="contact-social-container">
              <div class="contact-social contact-social-email">
                <div className="contact-social-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-social-title">wajahatabbas27@gmail.com</div>
              </div>
            </div>
          </div>

            </div>
            
        </div>
    )
}