import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, ListGroup, CardDeck, Card} from 'react-bootstrap';
import "./teaching.css";

export default class Teaching extends Component {

  componentDidMount() {
    document.title = "David H Smith IV | Research";
  }

  render() {

    return (

      <Container fluid>
        <Jumbotron>
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

            <CardDeck className="styled-card-deck">
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
            </CardDeck>

            <div class="subsection">Teaching Philosophy - Sustainable Adoption of Evidence-Based Best Practices</div>
            <p className="mb-3" style={{ marginLeft: '1.5em' }}>
              In my teaching, I use evidence-based teaching practices across all aspects of the course. Though I have encountered many in my time as an educator and education researcher, the following are those which I have adopted and found most effective:
              <ul>
                <li>
                  <strong>Individualized Support:</strong> As a former tutor who has benefited greatly from tutoring, I recognize the unique impact of one-on-one support. In my courses, I aim to offer ample opportunities for individualized help through office hours and tutoring sessions.
                </li>
                <li>
                  <strong>Frequent Testing:</strong> In the design of summative assessments, I am a firm believer in the effectiveness of <em>frequent testing</em> for promoting frequent study and improving students' learning outcomes. I use PrairieLearn, an open-source platform with automatically graded questions, to facilitate frequent, authentic assessments.
                </li>
                <li>
                  <strong>Active Learning:</strong> This involves engaging students through activities such as discussions and problem solving with the goal of improving both engagement and learning. To support this, I design computer-based activities and tools which I embed within lectures, allowing students hands-on practice, illustrate points, and allow students to interact with worked examples.
                </li>
                <li>
                  <strong>Peer Instruction:</strong> I facilitate peer instruction through in-lecture questions and activities, transforming lectures into active learning sessions where students at a similar level collaboratively solve problems, reinforcing their understanding and improving learning outcomes while reducing fail rates.
                </li>
                <li>
                  <strong>Spiral Curriculum Design:</strong> The spiral curriculum introduces all course topics briefly in the first half of the course, then revisits each in greater depth in the second. I find this particularly effective in introductory programming, as it gives students with limited experience a lay of the programming landscape before exploring topics in detail and allows them to begin writing more interesting programs early on in the course.
                </li>
              </ul>
              To support these practices, I leverage technologies like PrairieLearn and interactive textbooks. The auto-grading features they provide <strong>enable sustainable adoption of best practices</strong> like immediate feedback and frequent testing, allowing my instructional staff and me to focus on aspects that are harder to scale, such as individualized support.
            </p>
          </Col>
        </Jumbotron >
      </Container >
      );
}
}
