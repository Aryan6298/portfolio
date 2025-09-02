import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profilePic from '../assets/Aryan-pic-uniform.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center position-relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
        color: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div className="position-absolute w-100 h-100" style={{ overflow: 'hidden' }}>
        <div
          className="position-absolute"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(45,91,255,0.15) 0%, rgba(45,91,255,0) 70%)',
            top: '-300px',
            right: '-300px',
            borderRadius: '50%'
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(66,153,225,0.1) 0%, rgba(66,153,225,0) 70%)',
            bottom: '-250px',
            left: '-250px',
            borderRadius: '50%'
          }}
        ></div>
      </div>

      <Container className="position-relative" style={{marginTop: '5rem'}}>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-3 order-2">
            <div data-aos="fade-right" data-aos-delay="200">
              <span className="badge bg-primary-custom mb-3 px-3 py-2">Welcome to my Portfolio</span>
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm <span className="text-primary-custom position-relative">
                  Aryan Janghela
                  <svg className="position-absolute start-0 bottom-0" style={{ width: '100%', height: '30%' }}>
                    <path
                      d="M0,0 Q50,20 100,0"
                      fill="none"
                      stroke="var(--primary-color)"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>
              <h2 className="h3 mb-4 text-light opacity-75">Full-Stack Web Developer</h2>
              <p className="lead mb-4 text-light opacity-75">
                Transforming innovative ideas into seamless digital experiences. Specializing in modern web technologies 
                and creating scalable, user-centric applications that make a difference.
              </p>
              <div className="d-flex gap-3 mb-4">
                <Button
                  as={Link}
                  to="contact"
                  smooth={true}
                  duration={500}
                  variant="primary"
                  size="lg"
                  className="rounded-pill"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Get In Touch
                </Button>
                <Button
                  as={Link}
                  to="projects"
                  smooth={true}
                  duration={500}
                  variant="outline-light"
                  size="lg"
                  className="rounded-pill"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  View Projects
                </Button>
              </div>
              <div className="social-links" data-aos="fade-up" data-aos-delay="800">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4 text-white"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 mb-5 mb-lg-0">
            <div className="text-center" data-aos="fade-left" data-aos-delay="400">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <div 
                    className="position-absolute top-50 start-50 translate-middle" 
                    style={{ 
                      width: '150%', 
                      height: '150%', 
                      background: 'radial-gradient(circle, rgba(45,91,255,0.1) 0%, rgba(255,255,255,0) 60%)', 
                      zIndex: -1 
                    }}
                  ></div>
                </div>
                <img
                  src={profilePic}
                  alt="Profile"
                  className="img-fluid rounded-circle shadow-lg floating"
                  style={{ 
                    maxWidth: '400px',
                    border: '4px solid rgba(255,255,255,0.1)'
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 