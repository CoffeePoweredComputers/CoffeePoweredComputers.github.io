import React, { useEffect } from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import "./Teaching.css";

export default function Teaching() {
  useEffect(() => {
    document.title = "David H Smith IV | Teaching";
  }, []);

  const courses = [
    {
      institution: "Virginia Tech",
      courses: [
        {
          title: "Computing Education Research Seminar",
          code: "CS 6XXX",
          level: "Graduate",
          role: "Instructor",
          semester: "Spring 2026",
          description: "Graduate seminar exploring current research in computing education, emphasizing critical analysis of research papers and theoretical frameworks."
        }
      ]
    },
    {
      institution: "University of Illinois Urbana-Champaign",
      courses: [
        {
          title: "Introduction to Programming",
          code: "CS 105",
          level: "Undergraduate",
          role: "Instructor",
          semester: "Summer 2021",
          enrollment: "400-700 students",
          website: "https://hamiltonfour.tech/cs-105-summer-21/",
          description: "Large-scale introductory Python course for non-technical majors."
        },
        {
          title: "Introduction to Programming (High School)",
          code: "University High School",
          level: "High School",
          role: "Lead Instructor",
          semester: "Fall 2021",
          enrollment: "15 students",
          website: "https://hamiltonfour.tech/uni-high-fall-21/",
          description: "Semester-long introductory programming course emphasizing hands-on projects and peer instruction."
        },
        {
          title: "Data Structures for CS Teachers",
          code: "CS 487",
          level: "Graduate",
          role: "Instructor",
          semester: "Summer 2022",
          enrollment: "14 students",
          website: "https://hamiltonfour.tech/487-data-structures/",
          description: "Specialized course for in-service K-12 teachers covering Java programming and data structures."
        }
      ]
    }
  ];

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case 'Graduate': return 'purple';
      case 'Undergraduate': return 'primary';
      case 'High School': return 'success';
      default: return 'secondary';
    }
  };

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Instructor': return 'danger';
      case 'Lead Instructor': return 'danger';
      case 'Co-instructor': return 'warning';
      case 'Teaching Assistant': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <Container fluid>
      <section className="p-3 p-md-5 mb-4 bg-light rounded-3">
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <h1 className="sr-only">Teaching - David H Smith IV</h1>
            
            {/* Teaching Philosophy */}
            <div className="teaching-intro mb-4">
              <h2 className="teaching-title">Teaching Philosophy</h2>
              <p style={{ fontSize: 'var(--font-size-md)', lineHeight: '1.6' }}>
                A call to teaching first inspired me to pursue a Ph.D. in Computer Science and shaped my focus on Computer Science Education research. 
                Much of my work stems from a desire to systematically improve the practices in the classes I have taught. 
                However, there is a tension between science and practice that exists in the realm of education, 
                a tension noted by Josiah Royce, a prominent philosopher from the latter half of the 19th century.
              </p>
              <blockquote className="blockquote-text">
                I have always felt unwilling to apply so pretentious and comforting a name as 'Science' to any exposition of the laborious and problematic art of the educator.
                <em>— Josiah Royce</em>
              </blockquote>
              <p style={{ fontSize: 'var(--font-size-md)', lineHeight: '1.6' }}>
                This sentiment suggests to me that my endeavors as an educational researcher serve only to suggest what <em>may</em> serve as best practices. 
                It is then upon me, as the instructor, to evaluate, integrate, and adapt these practices to best suit their given context. 
                This makes effective pedagogy, in my estimation, <strong>where the <em>science</em> of education meets the <em>art and engineering</em> that is teaching and curriculum design</strong>.
              </p>
            </div>

            {/* Courses */}
            {courses.map((inst, instIndex) => (
              <div key={instIndex} className="institution-section mb-5">
                <h3 className="institution-header mb-4">{inst.institution}</h3>
                
                <Row className="g-4">
                  {inst.courses.map((course, courseIndex) => (
                    <Col key={courseIndex} xs={12} lg={6}>
                      <Card className="course-card h-100">
                        <Card.Body>
                          <div className="course-card-header">
                            <h5 className="course-title">
                              {course.title}
                            </h5>
                            {course.code && (
                              <span className="course-code">{course.code}</span>
                            )}
                          </div>
                          
                          <div className="course-meta mb-3">
                            <Badge bg={getLevelBadgeColor(course.level)} className="me-2">
                              {course.level}
                            </Badge>
                            <Badge bg={getRoleBadgeColor(course.role)} className="me-2">
                              {course.role}
                            </Badge>
                            <Badge bg="secondary">
                              {course.semester}
                            </Badge>
                          </div>
                          
                          <p className="course-description">
                            {course.description}
                          </p>
                          
                          <div className="course-footer">
                            {course.enrollment && (
                              <span className="course-enrollment">
                                <i className="bi bi-people-fill"></i> {course.enrollment}
                              </span>
                            )}
                            {course.website && (
                              <a 
                                href={course.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="course-link"
                              >
                                View Course <i className="bi bi-arrow-right"></i>
                              </a>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}


          </Col>
        </Row>
      </section>
    </Container>
  );
}