import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myImage from './assets/Person-Assets.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="navigation">
      <Navbar id="navBar" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link id='nav-link' href="/">Home</Nav.Link>
              <Nav.Link id='nav-link' href="/about">About</Nav.Link>
              <Nav.Link id='nav-link' href="/education">Education</Nav.Link>
              <Nav.Link id='nav-link' href="/hobbies">Hobbies</Nav.Link>
              <Nav.Link id='nav-link' href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-content">
        <div className='introduction'>
            <h3>Hi I'm <span className='cs-txt'>Lee Richard</span></h3>
            <span className='cs-name'>BSCS STUDENT</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Accusantium cumque nisi libero magnam minima fugit sins ad possimus officiis qui?</p>
            <Link to="/About">
                <button class="button type1"><span className="btn-txt">Get Started</span></button>
            </Link>
            

        </div>
        <img src={myImage} alt="description" width={300} />
      </div>
    </div>
  );
};

export default Home;