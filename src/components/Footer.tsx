import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-4 position-relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="position-absolute top-0 end-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 100% 100%, rgba(45,91,255,0.05) 0%, rgba(255,255,255,0) 50%)',
        zIndex: 0
      }}></div>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <a 
              href="#home" 
              className="text-decoration-none"
            >
              <span className="h5 text-white mb-0">
                <span className="text-primary-custom">&lt;</span>
                Portfolio
                <span className="text-primary-custom">/&gt;</span>
              </span>
            </a>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <p className="text-light opacity-75 mb-0">
              © {currentYear} All rights reserved
            </p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <div className="social-links">
              {[
                { icon: faGithub, link: 'https://github.com/Aryan6298' },
                { icon: faLinkedin, link: 'https://www.linkedin.com/in/aryan-janghela-5b4817335/' },
              
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light opacity-75 ms-3 text-decoration-none"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.color = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.opacity = '0.75';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 