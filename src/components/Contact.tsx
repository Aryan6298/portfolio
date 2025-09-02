import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'aryanjanghela.123@gmail.com',
      link: 'mailto:aryanjanghela.123@example.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      content: '+91 6266039350',
      link: 'tel:+916266039350'
    },
    {
      icon: faLocationDot,
      title: 'Location',
      content: 'Bhopal, Madhya Pradesh, India',
      link: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      className="section-padding position-relative"
      style={{
        background: 'linear-gradient(135deg, #2d3436 0%, #1e1e2c 100%)',
        color: '#ffffff'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 0% 0%, rgba(45,91,255,0.1) 0%, rgba(255,255,255,0) 50%)',
        zIndex: 0
      }}></div>
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="badge bg-primary-custom px-3 py-2 mb-3" data-aos="fade-down">
              Get in Touch
            </span>
            <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
              Let's Work
              <span className="text-primary-custom"> Together</span>
            </h2>
            <p className="lead text-light opacity-75 mb-5" data-aos="fade-up" data-aos-delay="100">
              Have a project in mind? Let's discuss how we can collaborate to bring your ideas to life.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={9}>
            <div 
              className="p-4 rounded"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Row className="mb-4">
                {contactInfo.map((info, index) => (
                  <Col md={4} className="mb-4 mb-md-0" key={index}>
                    <a 
                      href={info.link}
                      className="text-decoration-none d-block text-center p-3 rounded h-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        transition: 'transform 0.3s ease'
                      }}
                      data-aos="fade-up"
                      data-aos-delay={100 * (index + 1)}
                    >
                      <div className="icon-circle d-inline-flex align-items-center justify-content-center rounded-circle bg-light bg-opacity-0 p-3 mb-3">
                        <FontAwesomeIcon icon={info.icon} className="text-primary-custom" />
                      </div>
                      <h3 className="h5 text-white mb-2">{info.title}</h3>
                      <p className="text-light object-contain opacity-75 mb-0">{info.content}</p>
                    </a>
                  </Col>
                ))}
              </Row>

              {/* Direct Formspree form */}
              <Form 
                action="https://formspree.io/f/xzzaazqj"
                method="POST"
              >
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group>
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        className="bg-transparent border-light text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(4px)'
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group>
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        className="bg-transparent border-light text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(4px)'
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mb-4">
                    <Form.Group>
                      <Form.Control 
                        type="text" 
                        name="subject"
                        placeholder="Subject" 
                        className="bg-transparent border-light text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(4px)'
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mb-4">
                    <Form.Group>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message"
                        placeholder="Your Message" 
                        className="bg-transparent border-light text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(4px)'
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="text-center">
                    <Button 
                      type="submit"
                      variant="primary" 
                      size="lg" 
                      className="rounded-pill px-5"
                      style={{
                        background: 'var(--primary-color)',
                        border: 'none',
                        boxShadow: '0 5px 15px rgba(45,91,255,0.3)'
                      }}
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
