import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myImage from './assets/myphoto.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';
import './App.css';

const Home = () => {
  return (
    <div className="navigation">
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

      <div className="main-content">
        <div className='introduction'>
            <h3>Hi I'm <span className='cs-txt'>Lee Richard</span></h3>
            <span className='cs-name'>BSCS STUDENT</span>
            <p>Studying at Naga College Foundation. <br /> Taking Bachelor of Science in Computer Science.</p>
            <Link to="/About">
                <button class="button type1"><span className="btn-txt">Get Started</span></button>
            </Link>
            

        </div>
        <img src={myImage} alt="description" width={300} className='profile-photo' />
      </div>
    </div>
  );
};

export default Home;
