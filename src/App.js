import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import CertificatePage from './Pages/CertificatePage';
import CVPage from './Pages/CVPage';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      title: 'Rahul Mahajan',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Certificate', path: '/certificate' },
        { title: 'CV', path: '/cv' }
      ],
      home: {
        title: 'Stay Focussed',
        subTitle: 'Over the last few years, I had fun making some projects',
        text: 'See for Yourself!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Connect'
      },
      certificate: {
        title: 'My Certificates',
        text: 'Below I have place my certifications which I have completed during my B.Tech'
      },
      cv: {
        title: 'My CV'
      }
    }
  }

  render() {
    const { home, about, contact, certificate, cv } = this.state  // extraction
    return (
      <Router>
        <Container className='p-0'>
          <Navbar className='border-bottom' bg='tranparent' expand='lg'>
            <Navbar.Brand>Rahul Mahajan </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/certificate'>Certificate</Link>
                <Link className='nav-link' to='/cv'>CV</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />} />
          <Route path='/about' render={() => <AboutPage title={about.title} />} />
          <Route path='/certificate' render={() => <CertificatePage title={certificate.title} text={certificate.text} />} />
          <Route path='/cv' render={() => <CVPage title={cv.title} />} />
          <Route path='/contact' render={() => <ContactPage title={contact.title} />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;