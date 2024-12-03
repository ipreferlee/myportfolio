import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here (e.g., send to an API)
    console.log(formData);
  };

  return (
    <div className="contact-sec">
      {/* Navbar */}
      <Navbar id="navBar" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Form Section */}
      <section id="section-wrapper">
        <div className="box-wrapper">
          <div className="info-wrap">
            <h2 className="info-title">Contact Information</h2>
            <h3 className="info-sub-title">
              Fill up the form and our Team will get back to you within 24 hours
            </h3>
            <ul className="info-details">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span> <a href="tel:+1235235598">+639196416156</a>
              </li>
              <li>
                <i className="fas fa-paper-plane"></i>
                <span>Email:</span> <a href="mailto:lrochoada@gbox.ncf.edu.ph">lrochoada@gbox.ncf.edu.ph</a>
              </li>
              <li>
                <i className="fas fa-instagram"></i>
                <span>Instagram:</span> <a href="https://www.instagram.com/leerichardddddddd/">leerichardddddddd</a>
              </li>
            </ul>
          </div>

          <div className="form-wrap">
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Send us a message</h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleInputChange}
                    className="fname"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleInputChange}
                    className="lname"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
