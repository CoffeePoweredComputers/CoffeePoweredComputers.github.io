import React, { Component } from 'react'
import { Container, Row, Col, Image, Button, ListGroup, Card} from 'react-bootstrap';
import "./Teaching.css";

export default class Teaching extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Research";
  }

  render() {

    return (

      <Container fluid className="p-4 mb-4 bg-light rounded">
        <div className="teaching-container">
          <Col>
            <div class="section"> Teaching Statement </div>
            <p className="mb-3" style={{ marginLeft: '1.5em' }}>
              A call to teaching first inspired me to pursue a Ph.D. in
              Computer Science and shaped my focus on Computer Science
              Education research. Much of my work stems from a desire to
              systematically improve the practices in the classes I have
              taught. However, there is a tension between science and practice
              that exists in the realm of education. A tension noted by Josiah
              Royce, a prominent philosopher from the latter half of the 19th
              century.
            </p>
            <blockquote class="blockquote-text">
              <em>
                I have always felt unwilling to apply so pretentious and comforting a name as "Science" to any exposition of the laborious and problematic art of the educator. - Josiah Royce
              </em>
            </blockquote>
            <p className="mb-3" style={{ marginLeft: '1.5em' }}>
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

            <div class="subsection">Teaching and Curriculum Design Experience</div>
            <p className="mb-3" style={{ marginLeft: '1.5em' }}>
              <strong>I have served in a variety of teaching roles including as
              a teaching assistant, co-instructor, and instructor of
              record.</strong> These include a large introductory Python course
              for non-technical majors (400-700 students), a semester-long
              high-school introductory programming course (15 students), and a
              data structures course for in-service K-12 teachers (14
              students). I had the opportunity to teach these courses as the
              primary instructor and was given significant freedom in
              designing, implementing, and teaching them. The course websites
              for those which I served as the instructor of record can be found
              at the following links:
            </p>

            <Row xs={1} md={3} className="g-4 styled-card-deck">
              <Col>
                <Card className="styled-card">
                  <a href="https://hamiltonfour.tech/cs-105-summer-21/" className="card-link">
                    <Card.Body>
                      <Card.Title className="card-title">
                        <b>Introduction to Programming for Non-technical Majors (CS 105)</b>
                      </Card.Title>
                      <Card.Text className="card-text">
                        A comprehensive course designed to introduce programming
                        concepts to students without a technical background,
                        focusing on the fundamentals of the Python programming
                        language.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
              <Col>
                <Card className="styled-card">
                  <a href="https://hamiltonfour.tech/uni-high-fall-21/" className="card-link">
                    <Card.Body>
                      <Card.Title className="card-title">
                        <b>Introduction to Programming - University Laboratory High School</b>
                      </Card.Title>
                      <Card.Text className="card-text">
                        An introductory course aimed at high school students,
                        emphasizing hands-on projects and peer instruction to
                        foster a collaborative learning environment.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
              <Col>
                <Card className="styled-card">
                  <a href="https://hamiltonfour.tech/487-data-structures/" className="card-link">
                    <Card.Body>
                      <Card.Title className="card-title">
                        <b>Data Structures for CS Teachers (CI 487)</b>
                      </Card.Title>
                      <Card.Text className="card-text">
                        A specialized course I developed, tailored for in-service
                        K-12 teachers, focusing on Java programming fundamentals
                        and the principles of data structures.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            </Row>
      </Container >
      );
}
}
