import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useProgressAnimation } from '../hooks/useProgressAnimation';

const Skills = () => {
  const progressRefs = useProgressAnimation();
  const skills = [
    { name: 'HTML/CSS/JavaScript', level: 90, color: '#FF6B6B' },
    { name: 'React.js', level: 85, color: '#61DAFB' },
    { name: 'Node.js', level: 82, color: '#68A063' },
    { name: 'MERN Stack', level: 85, color: '#00D8FF' },
    { name: 'PHP', level: 75, color: '#777BB3' },
    { name: 'MongoDB', level: 80, color: '#4DB33D' },
    { name: 'Git/Version Control', level: 85, color: '#F05032' },
    { name: 'WordPress', level: 78, color: '#21759B' },
    { name: 'Locomotive JS', level: 75, color: '#3178C6' },
    { name: 'Bootstrap', level: 88, color: '#7952B3' }
  ];

  return (
    <section 
      id="skills" 
      className="section-padding position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2d3436 0%, #1e1e2c 100%)',
        color: '#ffffff'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at 0% 100%, rgba(45,91,255,0.1) 0%, rgba(255,255,255,0) 50%)',
        zIndex: 0
      }}></div>
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <span className="badge bg-primary-custom px-3 py-2 mb-3" data-aos="fade-down">
              Technical Expertise
            </span>
            <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
              Skills &
              <span className="text-primary-custom"> Technologies</span>
            </h2>
            <p className="lead text-light opacity-75 mb-5" data-aos="fade-up" data-aos-delay="100">
              Proficient in modern web technologies with expertise in full-stack development,
              focusing on the MERN stack and various supporting technologies.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div 
              className="p-4 rounded"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                      <span className="skill-dot me-2" style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        backgroundColor: skill.color,
                        display: 'inline-block',
                        boxShadow: `0 0 10px ${skill.color}40`
                      }}></span>
                      <span className="fw-bold text-white">{skill.name}</span>
                    </div>
                    <span className="text-light opacity-75 small">{skill.level}%</span>
                  </div>
                  <div className="progress rounded-pill" style={{ 
                    height: '8px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                  }}>
                    <div
                      ref={(el) => {
                        if (progressRefs.current) {
                          progressRefs.current[index] = el;
                        }
                      }}
                      className="progress-bar rounded-pill"
                      role="progressbar"
                      style={{
                        width: '0%',
                        backgroundColor: skill.color,
                        transition: 'width 1.5s ease-in-out',
                        boxShadow: `0 0 10px ${skill.color}40`
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 