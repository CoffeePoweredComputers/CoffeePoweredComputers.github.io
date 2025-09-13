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
            <h1 className="sr-only">Teaching - David H Smith IV</h1>
            <section className="teaching-intro mb-4" aria-labelledby="teaching-statement-heading">
              <h2 id="teaching-statement-heading" className="section-title">Teaching Statement</h2>
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
            </section>

            <section className="teaching-experience mb-4" aria-labelledby="teaching-experience-heading">
              <h2 id="teaching-experience-heading" className="section-title">Teaching and Curriculum Design Experience</h2>
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

              <h5 className="university-header">Virginia Tech (Starting Fall 2025)</h5>
              <div className="courses-container">
                {/* VTech Course 1 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/vtech.png" alt="CER Seminar" className="course-icon" />
                      </Col>
                      <Col xs={12} sm={9} md={9} lg={10}>
                        <h5 className="course-title">Computing Education Research Seminar</h5>
                        <p className="course-description">
                          A graduate seminar exploring current research in
                          computing education. Students will engage with recent
                          literature, research methodologies, and emerging
                          trends in the field of computing education. The
                          course will emphasize critical analysis of research
                          papers, development of research questions, and
                          understanding of theoretical frameworks.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

              </div>

              <h5 className="university-header">University of Illinois Urbana-Champaign</h5>
              <div className="courses-container">
                {/* UIUC Course 1 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/illinois.png" alt="Intro to Programming" className="course-icon" />
                      </Col>
                      <Col xs={12} sm={9} md={9} lg={10}>
                        <h5 className="course-title">Introduction to Programming (CS 105)</h5>
                        <p className="course-description">
                          A comprehensive course designed to introduce
                          programming concepts to students without a technical
                          background, focusing on Python programming
                          fundamentals. The course covers basic syntax, control
                          structures, functions, and data manipulation through
                          practical exercises and projects.
                          <a href="https://hamiltonfour.tech/cs-105-summer-21/" target="_blank" rel="noopener noreferrer" className="d-block mt-2">
                            Course Website →
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* UIUC Course 2 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/uni.png" alt="High School Programming" className="course-icon" />
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

                {/* UIUC Course 3 */}
                <Card className="mb-4 course-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12} sm={3} md={3} lg={2} className="text-center mb-3 mb-sm-0">
                        <Image src="assets/illinois_education.png" alt="Data Structures" className="course-icon" />
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

            </section>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
