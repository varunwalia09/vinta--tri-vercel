import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! (See console for data)');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectDetails: '',
    });
  };

  return (
    <>
      {/* 👇 Top heading and paragraph section */}
      <div className="contact-heading-section">
        <h1>LET’S ROAR<br/>INTO THE WILD<br/>TOGETHER.</h1>
        <p>In the wilderness of change, our<br/>
         world's view will roar into a new<br/>
         tomorrow and beyond.</p>
      </div>
      <button className="contact-arrow-btn" onClick={() => { window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }}
  >
   ↓
</button>


      {/* 👇 Contact form section below */}
      <div className="contact-form-container">
        <div className="contact-form-header">
          <div className="contact-form-title">SAY HELLO!</div>
          <div className="contact-form-quote">GET A QUOTE</div>
          <div className="contact-form-time">12:32 PM IST</div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company/Organisation</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Ex. Vintaverse"
              />
            </div>
          </div>

          <div className="form-group-full">
            <label htmlFor="projectDetails">Tell us about your project*</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Ex. Hello, Vintaverse Design. We need help to make this project unique."
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className='contact-botm-h1'>
        <h1>OUR</h1>
        <h2>HIDEWAYS</h2>
      </div>
      <div className="contact-details-section">
      <div className="detail-row">
        <span className="detail-label">Location</span>
        <div className="detail-value location-value">
          <span>TRIONN®</span>
          <span> E-55, Phase-8,</span>
          <span>Mohali-Industrial Area, Sector- 73</span>
          <span>Sahibzada Ajit Singh Nagar, Punjab 160059.</span>
        </div>
      </div>
      <div className="detail-row">
        <span className="detail-label">Email</span>
        <span className="detail-value">hello@vintaverse.com</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Phone</span>
        <span className="detail-value">+91 98241 82099</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Skype</span>
        <span className="detail-value">talk.Vintaverse</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Follow on</span>
        <div className="detail-value social-links">
          <span>Dribbble .</span>
          <span>LinkedIn .</span>
          <span>Instagram .</span>
          <span>Behance .</span>
          <span>Facebook .</span>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default Contact;
