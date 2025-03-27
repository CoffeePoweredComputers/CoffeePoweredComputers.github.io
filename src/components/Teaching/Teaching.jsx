import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./Teaching.css";

export default function Teaching() {
  useEffect(() => {
    document.title = "David H Smith IV | Teaching";
  }, []);

  return (
    <Container fluid>
      <div className="p-3 p-md-5 mb-4 bg-light rounded-3">
        <Row className="justify-content-center">
          <Col xs={12} lg={10} className="teaching-content px-3 px-md-4">
            <div className="teaching-intro mb-4">
              <h4 className="section-title">Teaching Statement</h4>
              <p className="teaching-text">
                A call to teaching first inspired me to pursue a Ph.D. in
                Computer Science and shaped my focus on Computer Science
                Education research. Much of my work stems from a desire to
                systematically improve the practices in the classes I have
                taught. However, there is a tension between science and practice
                that exists in the realm of education. A tension noted by Josiah
                Royce, a prominent philosopher from the latter half of the 19th
                century.
              </p>
              <blockquote className="blockquote-text">
                <em>
                  I have always felt unwilling to apply so pretentious and comforting a name as "Science" to any exposition of the laborious and problematic art of the educator. - Josiah Royce
                </em>
              </blockquote>
              <p className="teaching-text">
                This sentiment suggests to me that my endeavors as an educational
                researcher serve only to suggest what <em>may</em> serve as best
                practices. It is then upon me, as the instructor, to evaluate,
                integrate, and adapt these practices to best suit their given
                context. This makes effective pedagogy, in my estimation, 
                <b> where the <em>science</em> of education meets <em>art and
                engineering</em> that is teaching and curriculum design</b>. It
                is under this broader philosophy that I frame my general approach
                to teaching best practices and their implementation, as
                demonstrated through my experiences as a teaching assistant and
                instructor.
              </p>
            </div>

            <div className="teaching-experience mb-4">
              <h4 className="section-title">Teaching and Curriculum Design Experience</h4>
              <p className="teaching-text">
                <strong>I have served in a variety of teaching roles including as
                a teaching assistant, co-instructor, and instructor of
                record.</strong> These include a large introductory Python course
                for non-technical majors (400-700 students), a semester-long
                high-school introductory programming course (15 students), and a
                data structures course for in-service K-12 teachers (14
                students). I had the opportunity to teach these courses as the
                primary instructor and was given significant freedom in
                designing, implementing, and teaching them.
              </p>

              <div className="courses-container">
                {/* Course 1 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/comped.png" alt="Intro to Programming" className="course-icon" />
                      </Col>
                      <Col xs={12} sm={9} md={9} lg={10}>
                        <h5 className="course-title">Introduction to Programming (CS 105)</h5>
                        <p className="course-description">
                          A comprehensive course designed to introduce programming
                          concepts to students without a technical background,
                          focusing on Python programming fundamentals. The course covers basic syntax, 
                          control structures, functions, and data manipulation through practical exercises and projects.
                          <a href="https://hamiltonfour.tech/cs-105-summer-21/" target="_blank" rel="noopener noreferrer" className="d-block mt-2">
                            Course Website →
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* Course 2 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/prof.png" alt="High School Programming" className="course-icon" />
                      </Col>
                      <Col xs={12} sm={9} md={9} lg={10}>
                        <h5 className="course-title">Introduction to Programming (High School)</h5>
                        <p className="course-description">
                          An introductory course for high school students,
                          emphasizing hands-on projects and peer instruction to
                          foster a collaborative learning environment. Students develop programming 
                          skills through engaging activities and real-world problem-solving exercises.
                          <a href="https://hamiltonfour.tech/uni-high-fall-21/" target="_blank" rel="noopener noreferrer" className="d-block mt-2">
                            Course Website →
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* Course 3 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/textbook.png" alt="Data Structures" className="course-icon" />
                      </Col>
                      <Col xs={12} sm={9} md={9} lg={10}>
                        <h5 className="course-title">Data Structures for CS Teachers</h5>
                        <p className="course-description">
                          A specialized course tailored for in-service
                          K-12 teachers, focusing on Java programming fundamentals
                          and the principles of data structures. The curriculum includes practical 
                          implementations and pedagogical approaches for teaching these concepts.
                          <a href="https://hamiltonfour.tech/487-data-structures/" target="_blank" rel="noopener noreferrer" className="d-block mt-2">
                            Course Website →
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </div>
            
            <div className="teaching-philosophy mb-4">
              <h4 className="section-title">Teaching Philosophy</h4>
              <p className="teaching-text">
                My teaching philosophy centers on creating an inclusive, engaging, and supportive learning environment 
                that acknowledges the diverse backgrounds and learning styles of students. I believe in integrating 
                research-backed practices with practical applications to provide a well-rounded educational experience.
              </p>
              
              <p className="teaching-text">
                <strong>Key principles that guide my teaching approach:</strong>
              </p>
              
              <ul className="philosophy-list">
                <li>
                  <strong>Active Learning:</strong> Incorporating hands-on activities and collaborative problem-solving to enhance student engagement and understanding.
                </li>
                <li>
                  <strong>Scaffolded Instruction:</strong> Providing appropriate levels of support and gradually increasing complexity to build confidence and competence.
                </li>
                <li>
                  <strong>Inclusive Pedagogy:</strong> Creating accessible learning experiences that address diverse backgrounds, learning styles, and needs.
                </li>
                <li>
                  <strong>Formative Assessment:</strong> Using frequent, low-stakes assessments to provide timely feedback and guide instructional decisions.
                </li>
                <li>
                  <strong>Authentic Applications:</strong> Connecting theoretical concepts to real-world applications to enhance relevance and motivation.
                </li>
              </ul>
              
              <p className="teaching-text">
                For a more comprehensive overview of my teaching approach and educational research, 
                please refer to my <a href="/#/cv">CV</a> and <a href="/#/research">research statement</a>.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}