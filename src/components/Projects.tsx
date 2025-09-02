import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projectloco from '../assets/project-loco.png';
import projectamay from '../assets/project-amay.png';
import projectgeocon from '../assets/project-geocon.png';
import projectsom from '../assets/project-som.png';

const Projects = () => {
  const projects = [
    {
      title: 'Responsive Frontend Website',
      description: 'A modern, fully responsive frontend website showcasing sleek UI design and animations.',
      image: projectgeocon,
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      live: 'https://www.geoconservices.com'
    },
    {
      title: 'Full-Stack Form Validation Website',
      description: 'A complete full-stack website with form validation and secure backend integration.',
      image: projectamay,
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      live: 'https://www.amayfoundation.com'
    },
    {
      title: 'Creative Frontend Website',
      description: 'A responsive frontend project with interactive UI elements and smooth user experience.',
      image: projectsom,
      tags: ['React', 'CSS', 'Animations'],
      live: 'https://www.systemomanage.com'
    },
    {
      title: 'Homepage with Locomotive.js',
      description: 'A visually appealing homepage design using Locomotive.js for smooth scrolling and effects.',
      image: projectloco,
      tags: ['HTML', 'CSS', 'JavaScript', 'Locomotive.js'],
      live: 'https://aryan6298.github.io/client-project72-loco-/'
    }
  ];

  return (
    <section 
      id="projects" 
      className="section-padding position-relative"
      style={{
        background: 'linear-gradient(135deg, #1e1e2c 0%, #2d3436 100%)',
        color: '#ffffff'
      }}
    >
      <div className="position-absolute top-0 end-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 100% 50%, rgba(45,91,255,0.1) 0%, rgba(255,255,255,0) 50%)',
        zIndex: 0
      }}></div>
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="badge bg-primary-custom px-3 py-2 mb-3" data-aos="fade-down">
              My Work
            </span>
            <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
              Featured
              <span className="text-primary-custom"> Projects</span>
            </h2>
            <p className="lead text-light opacity-75 mb-5" data-aos="fade-up" data-aos-delay="100">
              Here are some of my responsive and full-stack projects, including a homepage design with smooth scroll effects.
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <Card 
                className="h-100 border-0" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    className="w-100 h-100"
                    style={{ objectFit: 'contain', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="h4 text-white mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-light opacity-75 mb-3">
                    {project.description}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="badge"
                        style={{
                          backgroundColor: 'rgba(45,91,255,0.1)',
                          color: 'var(--primary-color)',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(45,91,255,0.2)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-3 mt-3">
               
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-4"
                    >
                      Visit Site
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
