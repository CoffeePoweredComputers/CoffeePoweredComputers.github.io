import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Card, Form, InputGroup, Nav } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './Blog.css';
import Content from './posts.json';

export default function Blog() {
  /* Gets the set of all topics*/
  let topicsSet = new Set(); 
  for(let i = 0; i < Content.length; i++){
    for(let j = 0; j < Content[i].keywords.length; j++){
      topicsSet.add(Content[i].keywords[j])
    }
  }

  /* Sets up all of the initial states */
  const [currentTopic, setCurrentTopic] = useState("");
  const [topics] = useState([...topicsSet].sort());
  const [searchTerm, setSearchTerm] = useState("");

  /* Update document title on component mount */
  useEffect(() => {
    document.title = 'David H Smith IV | Blog';
  }, []);

  /* Handles the click for the topic selection */
  const handleTopicSelect = (topic) => {
    setCurrentTopic(currentTopic === topic ? "" : topic);
  };
  
  /* Handles search input changes */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  /* Clear all filters */
  const clearFilters = () => {
    setCurrentTopic("");
    setSearchTerm("");
  };

  /* filters and formats all the post data */
  const postData = Content.filter(field => {
    // Filter by topic if selected
    const matchesTopic = field.keywords.indexOf(currentTopic) > -1 || currentTopic === '';
    
    // Filter by search term if provided
    const matchesSearch = searchTerm === "" || 
      field.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesTopic && matchesSearch;
  }).map((field, key) => {
    return(
      <Card className='post mb-4 p-4 bg-light' key={key}>
        <Col>
          <Row>
            <div className="post-header">
              <div className='title'> {field.title} </div>
              <div className='date'> {field.date} </div>
            </div>
          </Row>
          <Row>
            <div className='topics-container'> 
              <b>Topics:</b>&nbsp;
              {field.keywords.map((keyword, idx) => (
                <Badge 
                  key={idx} 
                  bg="dark" 
                  className="topic-badge" 
                  onClick={() => handleTopicSelect(keyword)}
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </Row>
          <Row className='post-body'>
            {field.body}
          </Row>
          <Row>
            <b><a href={field.link} target="_blank" rel="noopener noreferrer"> Continue reading on Medium... </a></b>
          </Row>
        </Col>
      </Card>
    );
  });

  /* Gets the goods on the screen */
  return (
    <Container fluid>
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='topic-selection'> Search and filter blog posts </div>
        
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search by title, content, or topic"
            value={searchTerm}
            onChange={handleSearch}
            aria-label="Search blog posts"
          />
          {(searchTerm || currentTopic) && (
            <InputGroup.Text 
              className="clear-button" 
              onClick={clearFilters}
            >
              Clear
            </InputGroup.Text>
          )}
        </InputGroup>
        
        <div className='topic-selection'> Filter by topic </div>
        <Nav variant="pills" className="topic-nav">
          <Nav.Item>
            <Nav.Link 
              className={currentTopic === "" ? "active-topic" : "nav-topic"}
              onClick={() => setCurrentTopic("")}
            >
              All
            </Nav.Link>
          </Nav.Item>
          {topics.map((topic, index) => (
            <Nav.Item key={index}>
              <Nav.Link
                className={currentTopic === topic ? "active-topic" : "nav-topic"}
                onClick={() => handleTopicSelect(topic)}
              >
                {topic}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      
      {postData.length > 0 ? postData : (
        <div className="text-center p-5">
          <h3>No posts found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      )}
    </Container>
  );
}
