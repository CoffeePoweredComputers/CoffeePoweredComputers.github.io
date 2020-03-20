import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './Blog.css';
import Content from './posts.json';

export default class Blog extends Component {

  constructor(props){

    super(props);

    /* Gets the set of all topics*/
    let topics = new Set(); 
    for(let i = 0; i < Content.length; i++){
      for(let j = 0; j < Content[i].keywords.length; j++){
        topics.add(Content[i].keywords[j])
      }
    }

    /* Sets up all of the initial states */
    this.state = {
      currentTopic: "",
      topics: [...topics].sort()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /* Does some stuff if the component mounts */
  componentDidMount() {

    document.title = 'David H Smith IV | Blog';

  }

  /* Handles the click for the topic selection buttons */
  handleClick(event){
    this.setState({
      currentTopic: event.target.id
    });
  }

  render() {

    /* formats all the post data that was read during the component mounting */
    const postData = Content.map( (field, key) => {

      if(field.keywords.indexOf(this.state.currentTopic) > -1 || this.state.currentTopic === ''){
        return(
          <Jumbotron className='post'>
            <Col>
              <Row>
                <div className="post-header">
                  <div className='title'> {field.title} </div>
                  <div className='date'> {field.date} </div>
                </div>
              </Row>
              <Row>
                <div className='topic'> 
                  <b> Topics: </b> 
                  {field.keywords.join(', ')}
                </div>
              </Row>
              <Row className='post-body'>
                <ReactMarkdown source={field.body} />
              </Row>
            </Col>
          </Jumbotron>
          );
      }

    });

    const topicButtons = this.state.topics.map( (topic, key) => {
      return <Button key={key} onClick={this.handleClick} id={topic} variant='dark'> {topic} </Button>
      });


    /* Gets the goods on the screen */
    return (
      <Container fluid>
        <Jumbotron>
          <div className='topic-selection'> Select a topic to view </div>
          <Row className='topic-list'> 
            <Button key={this.state.topics.length} onClick={this.handleClick} id='' variant='dark'> All </Button>
            {topicButtons} 
          </Row>
        </Jumbotron>
        {postData}
      </Container>
      );

}
}
