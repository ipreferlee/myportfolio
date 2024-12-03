import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hobbiesImg1 from './assets/hoopcomp.png'; // Use a unique name for each image // Ensure the image names are unique
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import './App.css';


const Hobbies = () => {
  return (
    <div className='hobbies-sec'>
      {/* Navigation Bar */}
      <Navbar id="navBar" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Education">Education</Nav.Link>
              <Nav.Link as={Link} to="/Hobbies">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hobbies Section */}
      <div className="hobbies-container">
        <div className="hobbies-content">
          <h3 className="hobbies-title">My Hobbies</h3>
          <div className="hobbies-text">
            <p>
              Basketball is more than just a game to me. It’s a passion, a way of life, and a source of joy. Ever since I was a young child, I have been drawn to the sport, and as I have grown, so has my love for it. There are countless reasons why I love playing basketball, but there are a few that stand out as the most significant.
            </p>
            <p>
              For me, playing video games is more than simply a pastime—it's a form of entertainment that makes me happy, excited, and creates unforgettable memories. I pursued a Bachelor of Science in Computer Science in part because of this passion for gaming and technology.
            </p>
          </div>
        </div>

        <div className="hobbies-img-container">
          <img src={hobbiesImg1} alt="Basketball" className="hobbies-img" />
        </div>
      
      </div>
    </div>
  );
};

export default Hobbies;
