import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import bibtexParse from 'bibtex-parse-js';
import "./CV.css";
import CVData from './CV_General.json';
import bibTexString from './cvBib'; 


export default function CV() {
  const [publications, setPublications] = useState([]);
  const [posters, setPosters] = useState([]);
  const [expandedYears, setExpandedYears] = useState({});
  const [publicationStats, setPublicationStats] = useState({
    total: 0,
    byYear: {},
    byVenue: {}
  });

  // Helper function to format BibTeX author string
  const formatAuthors = (authorString) => {
    if (!authorString) return "";
    // Remove BibTeX braces
    authorString = authorString.replace(/{|}/g, "");
    // Split by "and" to get individual authors
    const authors = authorString.split(" and ");
    
    // Process each author to convert from "Last, First" to "First Last"
    const formattedAuthors = authors.map(author => {
      // Handle "Last, First" format common in BibTeX
      if (author.includes(",")) {
        const [lastName, firstName] = author.split(",").map(part => part.trim());
        return `${firstName} ${lastName}`;
      }
      // Return as is if not in "Last, First" format
      return author.trim();
    });
    
    // Join with commas
    return formattedAuthors.join(", ");
  };

  useEffect(() => {
    document.title = "David H Smith IV | CV";

    // Directly parse the imported bib file as a string
    try {
      const entries = bibtexParse.toJSON(bibTexString);
      console.log("Entries: ", entries);

      // Convert BibTeX entries to publication format
      const parsedPublications = entries.map(entry => {
        const authors = entry.entryTags.author || "";
        const title = entry.entryTags.title || "";
        const venue = entry.entryTags.venue || "";
        const year = entry.entryTags.year || "";
        // Use entryType if a "type" tag isn’t provided
        const type = entry.entryTags.type || entry.entryType || "Conference Paper";
        const award = entry.entryTags.award || "";

        // Format venue from either booktitle or journal fields
        const formattedVenue = entry.entryTags.booktitle || entry.entryTags.journal || "";

        return {
          title,
          authors: formatAuthors(authors),
          venue: formattedVenue,
          year,
          type,
          venueName: venue,
          award
        };
      });

      setPublications(parsedPublications);
      
      // Initialize expandedYears with all years expanded by default
      const years = {};
      parsedPublications.forEach(pub => {
        if (pub.year) years[pub.year] = true;
      });
      setExpandedYears(years);
      
      // Calculate publication statistics
      const stats = {
        total: parsedPublications.length,
        byYear: {},
        byVenue: {}
      };
      
      // Count publications by year
      parsedPublications.forEach(pub => {
        if (pub.year) {
          stats.byYear[pub.year] = (stats.byYear[pub.year] || 0) + 1;
        }
        
        // Count publications by venue
        const venueName = pub.venueName || pub.venue;
        if (venueName) {
          stats.byVenue[venueName] = (stats.byVenue[venueName] || 0) + 1;
        }
      });
      
      setPublicationStats(stats);
    } catch (error) {
      console.error("Error parsing bib file:", error);
    }
  }, []);

  // Helper function to highlight the author's name in publications
  const markMe = (str) => {
    if (!str) return "";
    // Split by comma since authors are now comma-separated
    let authors = str.split(",");
    let marked = [];
    
    for (let i = 0; i < authors.length; i++) {
      let author = authors[i].trim();
      // Check for the author's name in the new "First Last" format
      if (author.includes("David Smith") || author.includes("David H. Smith") || author.includes("David H Smith")) {
        marked.push("<u>David H. Smith IV" + (author.includes("*") ? "*" : "") + "</u>");
      } else {
        marked.push(author);
      }
    }
    
    return marked.join(", ");
  };

  // Group publications by year for better organization
  const groupByYear = (publications) => {
    const grouped = {};
    publications.forEach(pub => {
      const year = pub.year || "Unknown";
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(pub);
    });
    return Object.keys(grouped)
      .sort((a, b) => b - a)
      .map(year => ({
        year,
        publications: grouped[year]
      }));
  };

  const groupedPublications = groupByYear(publications);
  
  // Toggle year expansion
  const toggleYearExpansion = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };
  
  // Get top 5 venues by publication count
  const getTopVenues = () => {
    const venues = Object.entries(publicationStats.byVenue)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    return venues;
  };

  // Helper function to get publication type badge
  const getPublicationBadge = (venueName, type) => {
    if (type === "Poster") {
      return <Badge className="venue-badge other">Poster</Badge>;
    } else if (type === "Workshop Paper") {
      return <Badge className="venue-badge workshop">Workshop</Badge>;
    } else if (type === "Journal Article") {
      return <Badge className="venue-badge journal">Journal</Badge>;
    } else if (type === "Preprint") {
      return <Badge className="venue-badge other">Preprint</Badge>;
    } else if (type === "Working Group Report") {
      return <Badge className="venue-badge other">Working Group</Badge>;
    } else if (venueName.includes("SIGCSE")) {
      return <Badge className="venue-badge sigcse">SIGCSE</Badge>;
    } else if (venueName.includes("ITiCSE")) {
      return <Badge className="venue-badge iticse">ITiCSE</Badge>;
    } else if (venueName.includes("ICER")) {
      return <Badge className="venue-badge icer">ICER</Badge>;
    } else if (venueName.includes("CompEd")) {
      return <Badge className="venue-badge comped">CompEd</Badge>;
    } else if (venueName.includes("ASEE")) {
      return <Badge className="venue-badge asee">ASEE</Badge>;
    } else {
      return <Badge className="venue-badge other">Conference</Badge>;
    }
  };

  // Helper function to get award emoji
  const getAwardEmoji = (award) => {
    if (award === "best_paper") {
      return <span className="award-emoji" title="Best Paper Award">🏆</span>;
    } else if (award === "best_paper_nomination") {
      return <span className="award-emoji" title="Best Paper Nomination">🥈</span>;
    }
    return null;
  };

  return (
    <Container fluid>
      <div className="p-3 p-md-5 mb-4 bg-light rounded-3">
        <Row className="justify-content-center">
          <Col xs={12} lg={10} className="cv-content px-3 px-md-4">
            {/* Education Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Education</h4>
              <div className="section-content">
                <Card className="mb-3 education-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="institution-name">University of Illinois: Urbana-Champaign</h5>
                      <span className="year-badge">2020-2025</span>
                    </div>
                    <div className="degrees-list">
                      <div className="degree-item">
                        <span className="degree-icon">🎓</span>
                        <span>Doctorate of Computer Science</span>
                      </div>
                    </div>
                    <div className="advisor-info">
                      <strong>Advisor:</strong> Craig Zilles
                    </div>
                  </Card.Body>
                </Card>
                {CVData.education.filter(edu => !edu.school.includes("Illinois")).map((edu, idx) => (
                <Card key={idx} className="mb-3 education-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="institution-name">{edu.school}</h5>
                      <span className="year-badge">{edu.years}</span>
                    </div>
                    <div className="degrees-list">
                      {edu.degrees.map((degree, i) => (
                      <div key={i} className="degree-item">
                        <span className="degree-icon">🎓</span>
                        <span>{degree}</span>
                      </div>
                      ))}
                    </div>
                    {edu.advisor && (
                    <div className="advisor-info">
                      <strong>Advisor:</strong> {edu.advisor}
                    </div>
                    )}
                  </Card.Body>
                </Card>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Teaching Experience</h4>
              <div className="section-content">
                <Card className="mb-3 simplified-experience-card">
                  <Card.Body>
                    <div className="experience-header">
                      <h5 className="employer-name">Virginia Tech</h5>
                      <span className="year-badge">Starting Fall 2025</span>
                    </div>
                    <div className="position-title">Assistant Professor</div>
                    <p className="accomplishment-text">
                      Teaching computing education research and computer science courses
                    </p>
                  </Card.Body>
                </Card>
                {CVData.experience.map((exp, idx) => (
                <Card key={idx} className="mb-3 simplified-experience-card">
                  <Card.Body>
                    <div className="experience-header">
                      <h5 className="employer-name">{exp.employer}</h5>
                      <span className="year-badge">{exp.duration}</span>
                    </div>
                    <div className="position-title">{exp.position}</div>
                    {exp.accomplishments.length > 0 && exp.accomplishments[0] && (
                    <p className="accomplishment-text">
                      {exp.accomplishments[0]}
                    </p>
                    )}
                  </Card.Body>
                </Card>
                ))}
              </div>
            </div>

            {/* Publications Section */}
            <div className="cv-section publications-section mb-4">
              <h4 className="section-title">Publications</h4>
              
              {/* Publications Dashboard */}
              <div className="dashboard-container mb-4">
                <div className="stats-overview">
                  <div className="stats-card total-publications">
                    <h5>Total Publications</h5>
                    <div className="stats-number">{publicationStats.total}</div>
                  </div>
                </div>
                
                <div className="visualizations-row">
                  {/* Publications per Year Bar Chart */}
                  <div className="chart-container">
                    <h5 className="chart-title">Publications per Year</h5>
                    <div className="bar-chart">
                      {Object.entries(publicationStats.byYear)
                        .sort((a, b) => a[0] - b[0]) // Sort by year ascending
                        .map(([year, count]) => (
                          <div key={year} className="chart-item">
                            <div className="bar-label">{year}</div>
                            <div className="bar-container">
                              <div 
                                className="bar" 
                                style={{ 
                                  height: `${Math.max(count * 20, 30)}px`,
                                  backgroundColor: `hsl(${parseInt(year) % 10 * 36}, 70%, 60%)`
                                }}
                              >
                                <span className="bar-value">{count}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  
                  {/* Top 5 Venues */}
                  <div className="chart-container">
                    <h5 className="chart-title">Top Publication Venues</h5>
                    <div className="top-venues">
                      {getTopVenues().map((venue, idx) => (
                        <div key={idx} className="venue-item">
                          <div className="venue-name">{venue.name}</div>
                          <div className="venue-bar-container">
                            <div 
                              className="venue-bar" 
                              style={{ 
                                width: `${Math.min(venue.count * 15, 100)}%`,
                                backgroundColor: `hsl(${180 + idx * 30}, 70%, 50%)`
                              }}
                            >
                              <span className="venue-count">{venue.count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="section-content">
                {groupedPublications.map((group, gIdx) => (
                <div key={gIdx} className="publication-year-group">
                  <div className="year-dropdown">
                    <div 
                      className="year-header"
                      onClick={() => toggleYearExpansion(group.year)}
                    >
                      <div className="year-header-content">
                        <h5 className="year-label">{group.year}</h5>
                        <div className="year-meta">
                          <Badge bg="primary" className="publication-count">
                            {group.publications.length} publication{group.publications.length !== 1 ? 's' : ''}
                          </Badge>
                          <span className={`chevron-icon ${expandedYears[group.year] ? 'expanded' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`year-content ${expandedYears[group.year] ? 'expanded' : ''}`}>
                      {group.publications.map((pub, idx) => (
                      <Card key={idx} className="publication-card">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                              <div className="publication-title">
                                {pub.title}
                                {getAwardEmoji(pub.award)}
                              </div>
                              <div className="publication-venue">
                                {pub.venue}
                              </div>
                              <div className="publication-authors">
                                <span dangerouslySetInnerHTML={{__html: markMe(pub.authors)}}></span>
                              </div>
                            </div>
                            {getPublicationBadge(pub.venueName, pub.type)}
                          </div>
                        </Card.Body>
                      </Card>
                      ))}
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Projects</h4>
              <div className="section-content">
                <Row xs={1} md={2} className="g-4">
                  {CVData.projects.map((project, idx) => (
                  <Col key={idx}>
                    <Card className="h-100 project-card">
                      <Card.Body>
                        <div className="d-flex flex-column h-100">
                          <h5 className="project-title">{project.title}</h5>
                          {project.client && (
                          <div className="project-client mb-2">{project.client}</div>
                          )}
                          <Row className="flex-grow-1">
                            <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
                              <Image src={project.image_path} alt={project.title} className="project-image" />
                            </Col>
                            <Col xs={12} md={7}>
                              <ul className="project-details">
                                {project.work.map((w, i) => (
                                <li key={i}>{w}</li>
                                ))}
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))}
                </Row>
              </div>
            </div>

            {/* Workshops Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Posters, Workshops, and Long Abstracts</h4>
              <div className="section-content">
                <div className="workshops-list">
                  {CVData.workshops.map((workshop, idx) => (
                  <Card key={idx} className="mb-3 workshop-card">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="flex-grow-1">
                          <div className="workshop-title">
                            {workshop.title}
                            {workshop.slides && (
                            <div className="workshop-link mt-1">
                              <a href={workshop.slides} target="_blank" rel="noopener noreferrer">
                                🔗 View Slides
                              </a>
                            </div>
                            )}
                          </div>
                          <div className="workshop-venue">
                            {workshop.venue}
                          </div>
                          <div className="workshop-authors">
                            <span dangerouslySetInnerHTML={{__html: markMe(workshop.authors)}}></span>
                          </div>
                        </div>
                        <Badge className="venue-badge workshop">Workshop</Badge>
                      </div>
                    </Card.Body>
                  </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Websites Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Course Websites</h4>
              <div className="section-content">
                <Row xs={1} md={3} className="g-4">
                  {CVData.course_websites.map((course, idx) => (
                  <Col key={idx}>
                    <Card className="h-100 course-website-card">
                      <Card.Body className="d-flex flex-column">
                        <h5 className="course-name">{course.name}</h5>
                        <div className="course-link mt-auto">
                          <a href={course.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm w-100">
                            Visit Website
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))}
                </Row>
              </div>
            </div>

            {/* Academic Achievements Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Academic Achievements</h4>
              <div className="section-content">
                {CVData.merits.map((merit, idx) => (
                <Card key={idx} className="mb-3 achievement-card">
                  <Card.Body>
                    <h5 className="achievement-title">{merit.title}</h5>
                    <p className="achievement-description">{merit.description}</p>
                  </Card.Body>
                </Card>
                ))}
              </div>
            </div>

            <div className="cv-footer text-center mt-4">
              <p className="note">
                Note: Publications marked with * indicate equal contribution. 
                Publications marked with 🥈 indicate best paper nomination and 
                🏆 indicate best paper award.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    );
}

