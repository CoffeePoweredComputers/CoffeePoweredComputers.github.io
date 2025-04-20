import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Lab.css';

const Lab = () => {
  // Placeholder data - replace with actual lab members data
  const labMembers = {
    PIs: [
      {
        name: 'David H. Smith IV',
        image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=hpe-z9YAAAAJ&citpid=6',
        bio: 'Research interests include educational technology and assessment.',
        email: 'dhsmith4@vt.edu'
      }
    ],
    PhDs: [
    ],
    Masters: [
    ],
    Undergrads: [
    ]
  };

  // Function to render member cards for each category
  const renderMemberCards = (members) => {
    return members.map((member, index) => (
      <Col key={index} xs={12} md={6} lg={4}>
        <Card className="member-card">
          <Card.Img variant="top" src={member.image} alt={member.name} className="member-image" />
          <div className="name-badge">
            <h5>{member.name}</h5>
            {member.position && <p className="position-text">{member.position}</p>}
          </div>
          <Card.Body>
            <Card.Text>{member.bio}</Card.Text>
            <Card.Link href={`mailto:${member.email}`}>{member.email}</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container className="lab-container">
      
      <section className="news-card announcement-card mb-4">
        <div className="announcement-header">
          <h2>Join Our Lab! - 2025-26 Positions Available</h2>
        </div>
        <div className="announcement-content p-3">
          <p>Help me fill up this page! I am actively recruiting students at all levels for the 2025-26 academic year. If you're interested in educational technology and research related to the development of assessment platforms, please reach out via email with your CV and research interests.</p>
        </div>
      </section>
      <section className="role-section">
        <h2 className="role-title">Principal Investigators</h2>
        <Row>
          {renderMemberCards(labMembers.PIs)}
        </Row>
      </section>

      <section className="role-section">
        <h2 className="role-title">PhD Students</h2>
        <Row>
          {renderMemberCards(labMembers.PhDs)}
        </Row>
      </section>

      <section className="role-section">
        <h2 className="role-title">Master's Students</h2>
        <Row>
          {renderMemberCards(labMembers.Masters)}
        </Row>
      </section>

      <section className="role-section">
        <h2 className="role-title">Undergraduate Researchers</h2>
        <Row>
          {renderMemberCards(labMembers.Undergrads)}
        </Row>
      </section>
    </Container>
  );
};

export default Lab;
