import emailjs, { init } from 'emailjs-com';
import React from 'react';
import MediumHeading from '../../../UI/MediumHeading';
import SmallHeading from '../../../UI/SmallHeading';
import "./Contact.css";
init("user_MgysUjAltD4A31wHjHZQF");
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_fh3zilo', 'template_r9ky9nj', e.target, 'user_MgysUjAltD4A31wHjHZQF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
    e.target.reset()
  }
  return (
    <section className="container py-5 mt-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <SmallHeading text="Contact"></SmallHeading>
          <MediumHeading text="Get In Touch"></MediumHeading>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-8 m-auto">
          <form id="contact-form" name="myForm" className="form" onSubmit={sendEmail} method="POST">
            <div className="form-group">
              <label className="form-label text-light ml-1" id="nameLabel" htmlFor="name">Name</label>
              <input type="text" className="form-control p-4 col-sm-12" id="name" name="name" placeholder="Your name" tabIndex="1" />
            </div>
            <div className="form-group">
              <label className="form-label text-light ml-1" id="emailLabel" htmlFor="email">Email</label>
              <input type="email" className="form-control p-4" id="email" name="email" placeholder="Your Email" tabIndex="2" />
            </div>
            <div className="form-group">
              <label className="form-label text-light ml-1" id="subjectLabel" htmlFor="sublect">Subject</label>
              <input type="text" className="form-control p-4" id="subject" name="subject" placeholder="Subject" tabIndex="3" />
            </div>
            <div className="form-group">
              <label className="form-label text-light ml-1" id="messageLabel" htmlFor="message">Message</label>
              <textarea rows="7" cols="60" name="message" className="form-control pt-2" id="message" placeholder="Your message" tabIndex="4"></textarea>
            </div>
            <div className="text-center margin-top-25">
              <button type="submit" className="btn btn-mod btn-border btn-large">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;