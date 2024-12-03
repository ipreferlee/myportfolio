import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from './assets/Person-Assets.png';
import ncfLogo from './assets/NCF-LOGO.png';
import angelesLogo from './assets/angeles.jpg';
import systemPlus from './assets/systemplus.jpg';
import { Link } from 'react-router-dom';

const Education = () => {
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
      <div>
      <h3 className='myeduc'><u>My Education</u></h3>
      </div>

            <div id='cards' className='education-container'>
        <div className="row align-items-start">
          <div className="col">
            <Card style={{ width: '18rem' }} id='card-body' >
            <Card.Img id='educ-img' variant="top" src={angelesLogo} />
            <Card.Body>
              <Card.Title className='text-center'>Junior High</Card.Title>
              <Card.Text style={{ textAlign:'justify' }}>
                Angeles City National High School located in Angeles City, Pampanga, is one of the most prominent and established high schools in the region. It has a rich history that spans several decades, evolving from a small educational institution to a highly regarded secondary school in Central Luzon.                                                                                                                                                                      
              </Card.Text>
              <Button variant="success">Visit Page</Button>
            </Card.Body>
          </Card>
          </div>
          
          <div className="col">
          <Card style={{ width: '18rem' }}>
          <Card.Img id='educ-img' variant="top" src={systemPlus} />
          <Card.Body>
            <Card.Title className='text-center'>Senior High</Card.Title>
            <Card.Text style={{ textAlign:'justify' }}>
              System Plus College Foundation,  located in Angeles City, Pampanga, is one of the prominent educational institutions in the region. It has a long history of providing quality education, offering a range of programs that cater to different levels of academic and technical training.
            </Card.Text>
            <Button variant="success">Visit Page</Button>
          </Card.Body>
        </Card>
          </div>
          <div className="col">
          <Card style={{ width: '18rem' }}>
          <Card.Img id='educ-img' variant="top" src={ncfLogo} />
          <Card.Body>
            <Card.Title className='text-center'>Naga College</Card.Title>
            <Card.Text style={{ textAlign:'justify' }}>
              Naga College Foundation Inc. Providing quality education and contributing to the region’s economic. From its founding in 1947 to its current status as one of the top educational institutions, NCF has remained dedicated to empowering students through academic excellence, skills training.
            </Card.Text>
            <Button variant="success">Visit Page</Button>
          </Card.Body>
        </Card>
          </div>
        </div>
        

      
          



        

      </div>



   </div>
      
  )
}

export default Education
