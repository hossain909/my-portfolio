import React from 'react';
import MediumHeading from '../../../UI/MediumHeading';
import SmallHeading from '../../../UI/SmallHeading';
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container mb-5  py-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <SmallHeading text="Contact"></SmallHeading>
          <MediumHeading text="Get In Touch"></MediumHeading>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form id="contact-form" name="myForm" className="form" action="#" method="POST">
            <div className="form-group">
              <label className="form-label" id="nameLabel" for="name"></label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Your name" tabindex="1" />
            </div>
            <div className="form-group">
              <label className="form-label" id="emailLabel" for="email"></label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" />
            </div>
            <div className="form-group">
              <label className="form-label" id="subjectLabel" for="sublect"></label>
              <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3" />
            </div>
            <div className="form-group">
              <label className="form-label" id="messageLabel" for="message"></label>
              <textarea rows="6" cols="60" name="message" className="form-control" id="message" placeholder="Your message" tabindex="4"></textarea>
            </div>
            <div className="text-center margin-top-25">
              <button type="submit" className="btn btn-mod btn-border btn-large">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;