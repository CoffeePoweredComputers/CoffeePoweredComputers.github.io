import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import "./Travel.css";

export default class Travel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: new Array(4).fill(true) // Assuming 4 directories for simplicity
    };
  }
  componentDidMount() {
    document.title = "David H Smith IV | Home";
  }

  handleTileClick = (directory) => {
    console.log(`Tile for ${directory.title} clicked`);
    // this.props.history.push(`/gallery/${directory.id}`);
  }

  handleImageLoad = (index) => {
    this.setState(prevState => {
      const newLoadingState = [...prevState.loading];
      newLoadingState[index] = false;
      return { loading: newLoadingState };
    });
  }

  render() {
    // Sample directories array
    const directories = [
      {
        id: '1',
        coverPhoto: 'assets/comped_2023_cover.png',
        title: 'India - CompEd 2023',
        description: 'Visit to Hyderabad, Delhi, Agra, and Leh',
      },
      {
        id: '2',
        coverPhoto: 'assets/iticse_2024_cover.png',
        title: 'Italy - ITiCSE 2024',
        description: 'Rome and Milan',
      },
      {
        id: '3',
        coverPhoto: 'assets/hawaii_2023_cover.png',
        title: 'Hawai\'i 2023',
        description: 'The "Big Island" - Hilo and Kona',
      }
    ];

    return (
      <Container>
        <Jumbotron>
          <h1>Welcome to My Travel Gallery!</h1>
          <p>Explore my travel photos below.</p>
          <Row>
            {directories.map((directory, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-4">
              <a href={directory.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${directory.title} travel gallery`}>
                <div className="card-container">
                  <Card className="image-container">
                    {this.state.loading[index] && (
                    <div className="spinner-container">
                      <Spinner animation="border" role="status" aria-label={`Loading ${directory.title} image`}>
                        <span className="sr-only">Loading {directory.title} image...</span>
                      </Spinner>
                    </div>
                    )}
                    <Card.Img
                    variant="top"
                    src={directory.coverPhoto}
                    alt={directory.title}
                    onLoad={() => this.handleImageLoad(index)}
                    style={{ display: this.state.loading[index] ? 'none' : 'block' }}
                  />
                    </Card>
                    <Card.Body>
                      <Card.Title>{directory.title}</Card.Title>
                      <Card.Text>{directory.description}</Card.Text>
                    </Card.Body>
                  </div>
                </a>
              </Col>
              ))}
            </Row>
          </Jumbotron>
        </Container>
        );
  }
}
