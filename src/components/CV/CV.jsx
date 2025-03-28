import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import bibtexParse from 'bibtex-parse-js';
import * as d3 from 'd3';
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
  
  const yearChartRef = useRef(null);
  const venueChartRef = useRef(null);

  const formatAuthors = (authorString) => {
    if (!authorString) return "";
    authorString = authorString.replace(/{|}/g, "");
    const authors = authorString.split(" and ");
    
    const formattedAuthors = authors.map(author => {
      if (author.includes(",")) {
        const [lastName, firstName] = author.split(",").map(part => part.trim());
        return `${firstName} ${lastName}`;
      }
      return author.trim();
    });
    
    return formattedAuthors.join(", ");
  };

  useEffect(() => {
    document.title = "David H Smith IV | CV";

    // Directly parse the imported bib file as a string
    try {
      const entries = bibtexParse.toJSON(bibTexString);

      // Convert BibTeX entries to publication format
      const parsedPublications = entries.map(entry => {
        const authors = entry.entryTags.author || "";
        const title = entry.entryTags.title || "";
        const venueShort = entry.entryTags.venue || "";
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
          venueShort: venueShort,
          year,
          type,
          award
        };
      });

      setPublications(parsedPublications);
      
      // Initialize expandedYears with all years collapsed by default
      const years = {};
      parsedPublications.forEach(pub => {
        if (pub.year) years[pub.year] = false;
      });
      setExpandedYears(years);
      
      // Calculate publication statistics
      const stats = {
        total: parsedPublications.length,
        byYear: {},
        byYearAndType: {},
        byVenue: {},
        byVenueAndType: {},
        types: new Set()
      };
      
      // Count publications by year and type
      parsedPublications.forEach(pub => {
        // Track publication types
        const pubType = pub.type || "Other";
        stats.types.add(pubType);
        
        if (pub.year) {
          // Count total by year
          stats.byYear[pub.year] = (stats.byYear[pub.year] || 0) + 1;
          
          // Initialize year if not exists
          if (!stats.byYearAndType[pub.year]) {
            stats.byYearAndType[pub.year] = {};
          }
          
          // Count by year and type
          stats.byYearAndType[pub.year][pubType] = (stats.byYearAndType[pub.year][pubType] || 0) + 1;
        }
        
        // Count publications by venue
        const venueShort = pub.venueShort;
        if (venueShort) {
          // Count total by venue
          stats.byVenue[venueShort] = (stats.byVenue[venueShort] || 0) + 1;
          
          // Initialize venue if not exists
          if (!stats.byVenueAndType[venueShort]) {
            stats.byVenueAndType[venueShort] = {};
          }
          
          // Count by venue and type
          stats.byVenueAndType[venueShort][pubType] = (stats.byVenueAndType[venueShort][pubType] || 0) + 1;
        }
      });
      
      setPublicationStats(stats);
    } catch (error) {
      console.error("Error parsing bib file:", error);
    }
  }, []);
  
  // Create D3 charts when publication stats change
  useEffect(() => {
    if (Object.keys(publicationStats.byYear).length > 0) {
      createYearChart();
      createVenueChart();
    }
    
    // Add window resize handler to make charts responsive
    const handleResize = () => {
      createYearChart();
      createVenueChart();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [publicationStats]);

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
  
  // Get top 5 venues by publication count, excluding ArXiv
  const getTopVenues = () => {
    const venues = Object.entries(publicationStats.byVenue)
      .filter(([name]) => !name.toLowerCase().includes('arxiv')) // Exclude ArXiv
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    return venues;
  };
  
  // Create D3 year chart with stacked bars by publication type
  const createYearChart = () => {
    if (!yearChartRef.current || Object.keys(publicationStats.byYear).length === 0) return;
    
    // Clear previous chart
    d3.select(yearChartRef.current).selectAll("*").remove();
    
    // Get all years and types
    const years = Object.keys(publicationStats.byYearAndType).sort((a, b) => a - b);
    const types = Array.from(publicationStats.types);
    
    // Prepare data for stacked bars
    const stackedData = [];
    
    years.forEach(year => {
      const yearData = { year };
      
      // Add count for each type, defaulting to 0 if type not present for this year
      types.forEach(type => {
        yearData[type] = (publicationStats.byYearAndType[year] && 
                           publicationStats.byYearAndType[year][type]) || 0;
      });
      
      // Add total count for the year
      yearData.total = publicationStats.byYear[year];
      
      stackedData.push(yearData);
    });
    
    // Prepare stack generator
    const stack = d3.stack()
      .keys(types)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
    
    const series = stack(stackedData);
    
    const margin = { top: 20, right: 100, bottom: 40, left: 40 };
    const width = yearChartRef.current.clientWidth - margin.left - margin.right;
    const height = 230 - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(yearChartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // X scale
    const x = d3.scaleBand()
      .domain(years)
      .range([0, width])
      .padding(0.2);
    
    // Y scale
    const y = d3.scaleLinear()
      .domain([0, d3.max(stackedData, d => d.total) * 1.1])
      .range([height, 0]);
    
    // Color scale for publication types
    const color = d3.scaleOrdinal()
      .domain(types)
      .range(["#007bff", "#6610f2", "#6f42c1", "#fd7e14", "#20c997", "#28a745", "#dc3545", "#ffc107"]);
    
    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "10px")
      .style("text-anchor", "middle");
    
    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .selectAll("text")
      .style("font-size", "10px");
    
    // Add stacked bars
    svg.append("g")
      .selectAll("g")
      .data(series)
      .enter()
      .append("g")
      .attr("fill", d => color(d.key))
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("x", d => x(d.data.year))
      .attr("y", d => y(d[1]))
      .attr("height", d => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth())
      .attr("class", "bar");
    
    // Add values on top of total bars
    svg.selectAll(".bar-value")
      .data(stackedData)
      .enter()
      .append("text")
      .attr("class", "bar-value")
      .attr("x", d => x(d.year) + x.bandwidth() / 2)
      .attr("y", d => y(d.total) - 5)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("fill", "#666")
      .text(d => d.total);
    
    // Add legend
    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "start")
      .selectAll("g")
      .data(types)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${width + 10},${i * 20})`);
    
    legend.append("rect")
      .attr("x", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", d => color(d));
    
    legend.append("text")
      .attr("x", 20)
      .attr("y", 7.5)
      .attr("dy", "0.32em")
      .text(d => d);
  };
  
  // Create D3 venue chart with bars colored by venue type (conference vs journal)
  const createVenueChart = () => {
    if (!venueChartRef.current) return;
    
    // Clear previous chart
    d3.select(venueChartRef.current).selectAll("*").remove();
    
    // Get top venues (excluding ArXiv)
    const topVenues = getTopVenues();
    if (topVenues.length === 0) return;
    
    // Determine venue type (conference or journal)
    const venueData = topVenues.map(venue => {
      // Check if this venue has any Journal Article publications
      const isJournal = publicationStats.byVenueAndType[venue.name] && 
                      publicationStats.byVenueAndType[venue.name]["Journal Article"] > 0;
      
      return {
        name: venue.name,
        count: venue.count,
        type: isJournal ? "Journal" : "Conference"
      };
    });
    
    const margin = { top: 20, right: 100, bottom: 20, left: 150 };
    const width = venueChartRef.current.clientWidth - margin.left - margin.right;
    const height = 230 - margin.top - margin.bottom;
    
    // Create SVG
    const svg = d3.select(venueChartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // X scale
    const x = d3.scaleLinear()
      .domain([0, d3.max(venueData, d => d.count) * 1.1])
      .range([0, width]);
    
    // Y scale
    const y = d3.scaleBand()
      .domain(venueData.map(d => d.name))
      .range([0, height])
      .padding(0.2);
    
    // Color scale for venue types
    const color = d3.scaleOrdinal()
      .domain(["Conference", "Journal"])
      .range(["#007bff", "#dc3545"]);
    
    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5))
      .selectAll("text")
      .style("font-size", "10px");
    
    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("font-size", "10px")
      .attr("dy", "0.3em")
      .style("text-anchor", "end")
      .text(d => {
        // Truncate venue names if too long
        return d.length > 20 ? d.substring(0, 20) + "..." : d;
      });
    
    // Add bars
    svg.selectAll(".bar")
      .data(venueData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", d => y(d.name))
      .attr("width", d => x(d.count))
      .attr("height", y.bandwidth())
      .attr("fill", d => color(d.type));
    
    // Add values inside bars
    svg.selectAll(".bar-value")
      .data(venueData)
      .enter()
      .append("text")
      .attr("class", "bar-value")
      .attr("x", d => x(d.count) - 5)
      .attr("y", d => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("fill", "white")
      .text(d => d.count);
    
    // Add legend for venue types
    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "start")
      .selectAll("g")
      .data(["Conference", "Journal"])
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${width + 10},${i * 20})`);
    
    legend.append("rect")
      .attr("x", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", d => color(d));
    
    legend.append("text")
      .attr("x", 20)
      .attr("y", 7.5)
      .attr("dy", "0.32em")
      .text(d => d);
  };

  // Helper function to get publication type badge
  const getPublicationBadge = (type) => {
    if (type === "Poster") {
      return <Badge className="venue-badge poster">Poster</Badge>;
    } else if (type === "Workshop Paper") {
      return <Badge className="venue-badge workshop">Workshop</Badge>;
    } else if (type === "Journal Article") {
      return <Badge className="venue-badge journal">Journal</Badge>;
    } else if (type === "Preprint") {
      return <Badge className="venue-badge preprint">Preprint</Badge>;
    } else if (type === "Working Group Report") {
      return <Badge className="venue-badge workinggroup">Working Group</Badge>;
    } else if (type === "Conference Paper") {
      return <Badge className="venue-badge conference">Conference</Badge>;
    } else {
      return <Badge className="venue-badge other">{type}</Badge>;
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

            {/* Experience Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Experience</h4>
              <div className="section-content">
                {CVData.experience.map((exp, idx) => (
                <Card key={idx} className="mb-3 simplified-experience-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={3} sm={2} md={2} lg={1} className="text-center">
                        <div className="employer-icon-placeholder">
                          {exp.employer.split(' ').map(word => word[0]).join('')}
                        </div>
                      </Col>
                      <Col xs={9} sm={10} md={10} lg={11}>
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
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="cv-section mb-4">
              <h4 className="section-title">Education</h4>
              <div className="section-content">
                {CVData.education.map((edu, idx) => (
                <Card key={idx} className="mb-3 education-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={3} sm={2} md={2} lg={1} className="text-center">
                        <div className="institution-icon-placeholder">
                          {edu.school.split(' ').map(word => word[0]).join('')}
                        </div>
                      </Col>
                      <Col xs={9} sm={10} md={10} lg={11}>
                        <div className="d-flex justify-content-between align-items-start">
                          <h5 className="institution-name">{edu.school}</h5>
                          <span className="year-badge">{edu.years}</span>
                        </div>
                        <div className="degrees-list">
                          {edu.degrees.map((degree, i) => (
                          <div key={i} className="degree-item">
                            <span>{degree}</span>
                          </div>
                          ))}
                        </div>
                        {edu.advisor && (
                        <div className="advisor-info">
                          <strong>Advisor:</strong> {edu.advisor}
                        </div>
                        )}
                      </Col>
                    </Row>
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
                <div className="visualizations-row">
                  {/* Publications per Year Bar Chart */}
                  <div className="chart-container">
                    <h5 className="chart-title">Publications per Year</h5>
                    <div 
                      className="d3-chart year-chart"
                      ref={yearChartRef}
                    ></div>
                  </div>
                  
                  {/* Top 5 Venues */}
                  <div className="chart-container">
                    <h5 className="chart-title">Top Publication Venues</h5>
                    <div 
                      className="d3-chart venue-chart"
                      ref={venueChartRef}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="cv-footer text-center mt-4">
                <p className="note">
                  Note: Publications marked with * indicate equal contribution. 
                  Publications marked with 🥈 indicate best paper nomination and 
                  🏆 indicate best paper award.
                </p>
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
                          <Badge className="publication-count">
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
                                <b>{pub.venueShort}: </b>{pub.venue}
                              </div>
                              <div className="publication-authors">
                                <span dangerouslySetInnerHTML={{__html: markMe(pub.authors)}}></span>
                              </div>
                            </div>
                            {getPublicationBadge(pub.type)}
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
                <Row xs={1} className="g-4">
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
                            <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
                              <Image src={project.image_path} alt={project.title} className="project-image" />
                            </Col>
                            <Col xs={12} md={9}>
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

          </Col>
        </Row>
      </div>
    </Container>
    );
}

