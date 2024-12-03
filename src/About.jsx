import React from 'react';
import myImage from './assets/Person-Assets.png';  // Assuming you want to use this image
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';  // Import Link for routing
import './App.jsx';  // Assuming you're importing your CSS here

const About = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navigation">
        <Navbar id="navBar" expand="lg" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav" className="justify-content-center">
              <Nav className="mx-auto">
                <Nav.Link href="#" to="/">Home</Nav.Link>
                 <Nav.Link href="#about" to="/">About</Nav.Link>
                 <Nav.Link href="#education" to="/">Education</Nav.Link>
                 <Nav.Link href="#hobbies" to="/">Hobbies</Nav.Link>
                 <Nav.Link href="#contact" to="/">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* About Section */}
      <div
        style={{
          padding: "50px 20px",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "backgroundChange 10s infinite alternate", // Ensure backgroundChange is defined in CSS
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", // Corrected gradient syntax
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.6)",
            maxWidth: "800px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              color: "#FFD700",
              marginBottom: "20px",
              fontWeight: "bold",
              textTransform: "uppercase",
              textShadow: "2px 2px 4px rgba(255, 255, 255, 0.1)",
            }}
          >
            About Me
          </h1>

          {/* Image Section */}
          <img 
            src={myImage} 
            alt="My Image"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              marginBottom: "20px",
              objectFit: "cover",
              border: "5px solid #FFD700", // Optional styling for the image border
            }}
          />

          <p
            style={{
              fontSize: "18px",
              color: "#e0e0e0",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            My name is Lee Richard Ochoada. I am a 3rd-year college student pursuing a Computer Science degree. Born on December 8, 2000, I currently reside in Villa Obiedo, Cararayan, Naga City.
            <br />
            I enjoy playing basketball, online games, and driving, each providing a unique way for me to unwind and challenge myself. Basketball keeps me active, strengthens my teamwork skills, and lets me experience the excitement of competition. Online games offer me a chance to immerse myself in different worlds, exercise my strategic thinking, and connect with people worldwide. Driving offers me freedom, independence, and relaxation, whether it's a long journey or just a short cruise.
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "#c0c0c0",
              lineHeight: "1.8",
            }}
          >
            As a dedicated student, I am passionate about learning new technologies and solving complex problems. I look forward to applying my knowledge to real-world projects and furthering my career in technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
