import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/aryan-pic-hair.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding position-relative" style={{
      background: 'linear-gradient(135deg, #1e1e2c 0%, #2d3436 100%)',
      color: '#ffffff'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 100% 0%, rgba(45,91,255,0.1) 0%, rgba(255,255,255,0) 30%)',
        zIndex: 0
      }}></div>
      <Container className="position-relative">
        <Row className="justify-content-center align-items-center mb-5">
          <Col lg={4} className="text-center mb-4 mb-lg-0" data-aos="fade-right">
            <div className="position-relative d-inline-block">
              <div className="profile-pic-wrapper" style={{
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                padding: '8px',
                background: 'linear-gradient(45deg, rgba(45,91,255,0.4), rgba(45,91,255,0.1))',
                boxShadow: '0 0 20px rgba(45,91,255,0.3)',
                animation: 'borderAnimation 8s ease-in-out infinite alternate'
              }}>
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="img-fluid" 
                  style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    width: '280px',
                    height: '280px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <style>
                {`
                  @keyframes borderAnimation {
                    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                    50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
                    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                  }
                `}
              </style>
            </div>
          </Col>
          <Col lg={8} className="text-center text-lg-start">
            <span className="badge bg-primary-custom px-3 py-2 mb-3" data-aos="fade-down">About Me</span>
            <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
              Crafting Digital
              <span className="text-primary-custom"> Solutions</span>
            </h2>
            <p className="lead text-light opacity-75" data-aos="fade-up" data-aos-delay="100">
              As a Full-Stack Web Developer, I specialize in building robust web applications using the MERN stack.
              My journey in web development has equipped me with a strong foundation in both frontend and backend technologies,
              allowing me to create seamless, user-centric digital experiences.
            </p>
          </Col>
        </Row>
        <Row>
          {[
            {
              icon: faCode,
              title: 'Frontend Development',
              description: 'Creating responsive and interactive user interfaces using React.js, JavaScript, TypeScript, and Bootstrap, with a focus on modern web standards and best practices.',
              delay: 200
            },
            {
              icon: faServer,
              title: 'Backend Development',
              description: 'Building robust server-side applications using Node.js, Express, and MongoDB. Experienced in PHP and WordPress development for content management solutions.',
              delay: 400
            },
            {
              icon: faMobileAlt,
              title: 'Full-Stack Expertise',
              description: 'Proficient in the MERN stack (MongoDB, Express, React, Node.js) for developing scalable web applications, with strong version control using Git.',
              delay: 600
            }
          ].map((service, index) => (
            <Col md={4} className="mb-4 mb-md-0" key={index}>
              <div 
                className="service-card text-center p-4 rounded h-100"
                data-aos="fade-up"
                data-aos-delay={service.delay}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div className="icon-wrapper mb-4">
                  <div className="icon-circle d-inline-flex align-items-center justify-content-center rounded-circle bg-dark  p-4">
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      size="2x" 
                      className="text-primary-custom"
                    />
                  </div>
                </div>
                <h3 className="h4 mb-3 text-white">{service.title}</h3>
                <p className="text-light opacity-75 mb-0">
                  {service.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About; 