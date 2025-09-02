import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`${scrolled ? 'scrolled' : ''}`}
      style={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'linear-gradient(to right, #1a1a1a, #2d3436)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className={`fw-bold ${scrolled ? 'text-primary-custom' : 'text-white'}`}
          style={{ fontSize: '1.5rem' }}
        >
          <span className="text-primary-custom">&lt;</span>
          Portfolio
          <span className="text-primary-custom">/&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className={scrolled ? 'text-dark' : 'text-white'}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <Nav.Link
                key={item}
                as={Link}
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className={`mx-2 text-capitalize nav-link ${
                  scrolled ? 'text-dark' : 'text-white'
                } position-relative`}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 