import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
//import "./Travel.css";

export default class Travel extends Component {

    componentDidMount() {
        document.title = "David H Smith IV | Home";
    }

    handleTileClick = (directory) => {
        // Handle what happens when a tile is clicked.
        // This could navigate to another route or open a modal with the photos.
        console.log(`Tile for ${directory.title} clicked`);
        // Example: Navigate to another route
        // this.props.history.push(`/gallery/${directory.id}`);
    }

    render() {
        // Sample directories array
        const directories = [
            {
                id: '1',
              coverPhoto: 'assets/travel/comped2023/cover.heic',
                title: 'India - CompEd 2023',
                description: 'Visit to Hyderabad, Delhi, Agra, and Leh',
            },
            {
                id: '2',
                coverPhoto: 'https://example.com/dir2/cover.jpg',
                title: 'Italy - ITiCSE 2024',
                description: 'Rome and Milan',
            },
            {
                id: '3',
                coverPhoto: 'https://example.com/dir3/cover.jpg',
                title: 'Hawai\'i 2023',
                description: 'The "Big Island" - Hilo and Kona',
            }
        ];

        return (
            <Container>
                <Jumbotron>
                    <h1>Welcome to My Travel Gallery</h1>
                    <p>Explore my travel directories below.</p>
                </Jumbotron>
                <Row>
                    {directories.map((directory, index) => (
                        <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                            <Card onClick={() => this.handleTileClick(directory)}>
                                <Card.Img variant="top" src={directory.coverPhoto} alt={directory.title} />
                                <Card.Body>
                                    <Card.Title>{directory.title}</Card.Title>
                                    <Card.Text>{directory.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

