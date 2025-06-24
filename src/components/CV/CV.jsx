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
    byYearAndType: {},
    byVenue: {},
    byVenueAndType: {},
    types: new Set()
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
  
  useEffect(() => {
    if (Object.keys(publicationStats.byYear).length > 0 && publicationStats.types && publicationStats.types.size > 0) {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        try {
          createYearChart();
          createVenueChart();
        } catch (error) {
          console.error("Error creating charts:", error);
        }
      }, 50);
    }
    
    const handleResize = () => {
      setTimeout(() => {
        try {
          createYearChart();
          createVenueChart();
        } catch (error) {
          console.error("Error creating charts on resize:", error);
        }
      }, 50);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [publicationStats]);

  const markMe = (str) => {
    if (!str) return "";
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
  
  // Handle keyboard events for year toggles
  const handleYearToggleKeyDown = (event, year) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleYearExpansion(year);
    }
  };
  
  // Get top 5 venues by publication count, excluding ArXiv
  const getTopVenues = () => {
    console.log(publicationStats.byVenueAndType);
    const venues = Object.entries(publicationStats.byVenueAndType)
      .filter(([name]) => !name.toLowerCase().includes('arxiv')) // Exclude ArXiv
      .filter(([name]) => publicationStats.byVenueAndType[name]["Journal Article"] > 0 || publicationStats.byVenueAndType[name]["Conference Paper"] > 0)
    /* reduce and sum conference and journal articles */
      .map(([name, counts]) => {
        const count = (counts["Journal Article"] || 0) + (counts["Conference Paper"] || 0);
        return [name, count];
      })
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
    /* order them so when equal it goes ICER, CompEd, then Computer Science Education */
      .sort((a, b) => {
        if (a.count === b.count) {
          if (a.name === "ACM ICER") return -2;
          if (a.name === "ACM CompEd") return -1;
          if (a.name === "Computer Science Education") return 0;
          return 100;
        }
      })
      .slice(0, 5);
    
    return venues;
  };
  
  // Helper function to get chart insights
  const getYearChartInsights = () => {
    if (Object.keys(publicationStats.byYear).length === 0) return "";
    
    const years = Object.keys(publicationStats.byYear).sort((a, b) => b - a);
    const totalPubs = Object.values(publicationStats.byYear).reduce((sum, count) => sum + count, 0);
    const mostProductiveYear = years.reduce((max, year) => 
      publicationStats.byYear[year] > publicationStats.byYear[max] ? year : max
    );
    const mostProductiveYearCount = publicationStats.byYear[mostProductiveYear];
    
    // Get publication type breakdown
    const typeBreakdown = [];
    const types = Array.from(publicationStats.types);
    types.forEach(type => {
      let count = 0;
      Object.values(publicationStats.byYearAndType).forEach(yearData => {
        count += yearData[type] || 0;
      });
      if (count > 0) {
        typeBreakdown.push(`${count} ${type}${count > 1 ? 's' : ''}`);
      }
    });
    
    const trendInfo = years.length > 1 ? 
      `Publication trend shows ${publicationStats.byYear[years[0]]} publications in ${years[0]} (most recent) compared to ${publicationStats.byYear[years[years.length - 1]]} in ${years[years.length - 1]} (earliest).` : "";
    
    return `This stacked bar chart visualizes ${totalPubs} total publications across ${years.length} years (${years[years.length - 1]} to ${years[0]}). The most productive year was ${mostProductiveYear} with ${mostProductiveYearCount} publications. Publication types include: ${typeBreakdown.join(', ')}. ${trendInfo} Each bar is divided by publication type, with different colors representing conferences, journals, posters, workshops, abstracts, preprints, and working group reports.`;
  };
  
  const getVenueChartInsights = () => {
    const topVenues = getTopVenues();
    if (topVenues.length === 0) return "";
    
    const topVenue = topVenues[0];
    const totalTopVenuePubs = topVenues.reduce((sum, venue) => sum + venue.count, 0);
    const totalPubs = Object.values(publicationStats.byVenue).reduce((sum, count) => sum + count, 0);
    const percentage = Math.round((totalTopVenuePubs / totalPubs) * 100);
    
    // Count journals vs conferences in top 5
    let journalCount = 0;
    let conferenceCount = 0;
    topVenues.forEach(venue => {
      const isJournal = publicationStats.byVenueAndType[venue.name] && 
                       publicationStats.byVenueAndType[venue.name]["Journal Article"] > 0;
      if (isJournal) journalCount++;
      else conferenceCount++;
    });
    
    const venueList = topVenues.map((venue, idx) => 
      `${idx + 1}. ${venue.name} (${venue.count} publication${venue.count > 1 ? 's' : ''})`
    ).join(', ');
    
    return `This horizontal bar chart displays the top 5 publication venues, excluding preprint servers. The leading venue is ${topVenue.name} with ${topVenue.count} publications. These top 5 venues account for ${totalTopVenuePubs} publications (${percentage}% of all publications). The breakdown includes ${conferenceCount} conference${conferenceCount !== 1 ? 's' : ''} and ${journalCount} journal${journalCount !== 1 ? 's' : ''}. Venues in order: ${venueList}. Red bars indicate journals, blue bars indicate conferences.`;
  };

  // Create D3 year chart with stacked bars by publication type
  const createYearChart = () => {
    if (!yearChartRef.current || !publicationStats.byYearAndType || Object.keys(publicationStats.byYear).length === 0) return;
    
    // Clear previous chart
    d3.select(yearChartRef.current).selectAll("*").remove();
    
    // Get all years and types
    const years = Object.keys(publicationStats.byYearAndType).sort((a, b) => a - b);
    const types = Array.from(publicationStats.types);
    
    // Safety check - if no types, return early
    if (types.length === 0) return;
    
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
    const containerWidth = yearChartRef.current.clientWidth || 600; // Fallback width
    const width = Math.max(containerWidth - margin.left - margin.right, 200); // Minimum width
    const height = 230 - margin.top - margin.bottom;
    
    // Create SVG with accessibility attributes
    const svgElement = d3.select(yearChartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("role", "img")
      .attr("aria-labelledby", "year-chart-title year-chart-desc")
      .attr("aria-describedby", "year-chart-table-desc")
      .attr("focusable", "false");
    
    // Add title element for better accessibility
    svgElement.append("title")
      .text("Publication counts by year - stacked bar chart");
    
    // Add description element
    svgElement.append("desc")
      .text(getYearChartInsights());
    
    const svg = svgElement
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
      .range([
        "#dc3545", /* journal */
        "#007bff", /* conference */
        "#17a2b8", /* abstract */
        "#343a40", /* poster */
        "#ffc107", /* preprint */
        "#6c757d", /* workinggroup */
        "#28a745", /* workshop */
      ]);

    
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
      .attr("aria-label", d => `${d.key} publications`)
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("x", d => x(d.data.year))
      .attr("y", d => y(d[1]))
      .attr("height", d => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth())
      .attr("class", "bar")
      .attr("role", "presentation")
      .append("title")
      .text(function(d) {
        const count = d[1] - d[0];
        const type = d3.select(this.parentNode.parentNode).datum().key;
        return `${d.data.year}: ${Math.abs(count)} ${type}${Math.abs(count) !== 1 ? 's' : ''}`;
      });
    
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
    
    // Add legend with accessibility
    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "start")
      .attr("role", "group")
      .attr("aria-label", "Legend for publication types")
      .selectAll("g")
      .data(types)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${width + 10},${i * 20})`);
    
    legend.append("rect")
      .attr("x", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", d => color(d))
      .attr("role", "presentation");
    
    legend.append("text")
      .attr("x", 20)
      .attr("y", 7.5)
      .attr("dy", "0.32em")
      .text(d => d)
      .attr("role", "presentation");
  };
  
  const createVenueChart = () => {
    if (!venueChartRef.current || !publicationStats.byVenue || Object.keys(publicationStats.byVenue).length === 0) return;
    
    d3.select(venueChartRef.current).selectAll("*").remove();
    
    const topVenues = getTopVenues();
    if (topVenues.length === 0) return;
    
    const venueData = topVenues.map(venue => {
      const isJournal = publicationStats.byVenueAndType[venue.name] && 
                      publicationStats.byVenueAndType[venue.name]["Journal Article"] > 0;
      
      return {
        name: venue.name,
        count: venue.count,
        type: isJournal ? "Journal" : "Conference"
      };
    });
    
    const margin = { top: 20, right: 100, bottom: 20, left: 150 };
    const containerWidth = venueChartRef.current.clientWidth || 600; // Fallback width
    const width = Math.max(containerWidth - margin.left - margin.right, 200); // Minimum width
    const height = 230 - margin.top - margin.bottom;
    
    // Create SVG with accessibility attributes
    const svgElement = d3.select(venueChartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("role", "img")
      .attr("aria-labelledby", "venue-chart-title venue-chart-desc")
      .attr("aria-describedby", "venue-chart-table-desc")
      .attr("focusable", "false");
    
    // Add title element for better accessibility
    svgElement.append("title")
      .text("Top 5 publication venues - horizontal bar chart");
    
    // Add description element
    svgElement.append("desc")
      .text(getVenueChartInsights());
    
    const svg = svgElement
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
      .range([
        "#007bff", /* conference */
        "#dc3545", /* journal */
      ]);
    
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
      .attr("fill", d => color(d.type))
      .attr("role", "presentation")
      .attr("aria-label", d => `${d.name}: ${d.count} publication${d.count !== 1 ? 's' : ''}, ${d.type}`)
      .append("title")
      .text(d => `${d.name}: ${d.count} publication${d.count !== 1 ? 's' : ''} (${d.type})`);
    
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
    
    // Add legend for venue types with accessibility
    const legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "start")
      .attr("role", "group")
      .attr("aria-label", "Legend for venue types")
      .selectAll("g")
      .data(["Conference", "Journal"])
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(${width + 10},${i * 20})`);
    
    legend.append("rect")
      .attr("x", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", d => color(d))
      .attr("role", "presentation");
    
    legend.append("text")
      .attr("x", 20)
      .attr("y", 7.5)
      .attr("dy", "0.32em")
      .text(d => d)
      .attr("role", "presentation");
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
    } else if (type === "Abstract") {
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
        <h1 className="sr-only">Curriculum Vitae - David H Smith IV</h1>
        <Row className="justify-content-center">
          <Col xs={12} lg={10} className="cv-content px-3 px-md-4">

            {/* Experience Section */}
            <section className="cv-section mb-4" aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="section-title">Experience</h2>
              <div className="sr-only">
                <p>Professional experience listed chronologically with employer logos, positions, and key accomplishments.</p>
              </div>
              <div className="section-content">
                {CVData.experience.map((exp, idx) => (
                <Card key={idx} className="mb-3 simplified-experience-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={3} sm={2} md={2} lg={1} className="text-center">
                        <Image src={exp.logo} alt={exp.employer} className="employer-logo" />
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
            </section>

            {/* Education Section */}
            <section className="cv-section mb-4" aria-labelledby="education-heading">
              <h2 id="education-heading" className="section-title">Education</h2>
              <div className="sr-only">
                <p>Educational background with degrees, institutions, years attended, and advisors where applicable.</p>
              </div>
              <div className="section-content">
                {CVData.education.map((edu, idx) => (
                <Card key={idx} className="mb-3 education-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={3} sm={2} md={2} lg={1} className="text-center">
                        <Image src={edu.logo} alt={edu.school} className="institution-logo" />
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
            </section>


            {/* Publications Section */}
            <section className="cv-section publications-section mb-4" aria-labelledby="publications-heading">
              <h2 id="publications-heading" className="section-title">Publications</h2>
              
              {/* Publications Dashboard */}
              <div className="dashboard-container mb-4" role="region" aria-label="Publication Statistics Dashboard">
                <h5 className="sr-only">Publication Statistics Dashboard</h5>
                <p className="sr-only">This dashboard contains two interactive charts: a stacked bar chart showing publications by year and type, and a horizontal bar chart showing top publication venues. Detailed data tables are provided for screen reader users after each chart.</p>
                <div className="visualizations-row">
                  {/* Publications per Year Bar Chart */}
                  <div className="chart-container" aria-live="polite" aria-atomic="true">
                    <h5 id="year-chart-title" className="chart-title">Publication by Year</h5>
                    <p className="sr-only">A stacked bar chart showing publication counts by year, with bars divided by publication type.</p>
                    <div 
                      className="d3-chart year-chart"
                      ref={yearChartRef}
                      role="img"
                      aria-labelledby="year-chart-title"
                      aria-describedby="year-chart-desc year-chart-table-desc"
                    ></div>
                    <div id="year-chart-desc" className="sr-only">
                      {getYearChartInsights()}
                    </div>
                    <div id="year-chart-table-desc" className="sr-only">
                      For screen reader users: A detailed data table follows this chart with exact publication counts broken down by year and type.
                    </div>
                    
                    {/* Screen reader accessible data table */}
                    <table className="sr-only" role="table" aria-label="Publications by Year Data">
                      <caption>Detailed breakdown of publications by year and type. This table provides the exact data shown in the stacked bar chart above.</caption>
                      <thead>
                        <tr>
                          <th scope="col">Year</th>
                          <th scope="col">Conference Papers</th>
                          <th scope="col">Journal Articles</th>
                          <th scope="col">Posters</th>
                          <th scope="col">Workshop Papers</th>
                          <th scope="col">Abstracts</th>
                          <th scope="col">Preprints</th>
                          <th scope="col">Working Group Reports</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(publicationStats.byYear).sort((a, b) => b - a).map(year => {
                          const yearData = publicationStats.byYearAndType[year] || {};
                          return (
                            <tr key={year}>
                              <th scope="row">{year}</th>
                              <td>{yearData["Conference Paper"] || 0}</td>
                              <td>{yearData["Journal Article"] || 0}</td>
                              <td>{yearData["Poster"] || 0}</td>
                              <td>{yearData["Workshop Paper"] || 0}</td>
                              <td>{yearData["Abstract"] || 0}</td>
                              <td>{yearData["Preprint"] || 0}</td>
                              <td>{yearData["Working Group Report"] || 0}</td>
                              <td><strong>{publicationStats.byYear[year]}</strong></td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th scope="row">Total</th>
                          {(() => {
                            const totals = {
                              "Conference Paper": 0,
                              "Journal Article": 0,
                              "Poster": 0,
                              "Workshop Paper": 0,
                              "Abstract": 0,
                              "Preprint": 0,
                              "Working Group Report": 0
                            };
                            Object.values(publicationStats.byYearAndType).forEach(yearData => {
                              Object.keys(totals).forEach(type => {
                                totals[type] += yearData[type] || 0;
                              });
                            });
                            return (
                              <>
                                <td>{totals["Conference Paper"]}</td>
                                <td>{totals["Journal Article"]}</td>
                                <td>{totals["Poster"]}</td>
                                <td>{totals["Workshop Paper"]}</td>
                                <td>{totals["Abstract"]}</td>
                                <td>{totals["Preprint"]}</td>
                                <td>{totals["Working Group Report"]}</td>
                                <td><strong>{publicationStats.total}</strong></td>
                              </>
                            );
                          })()}
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  {/* Top 5 Venues */}
                  <div className="chart-container" aria-live="polite" aria-atomic="true">
                    <h5 id="venue-chart-title" className="chart-title">Top-5 Venues by Publications</h5>
                    <p className="sr-only">A horizontal bar chart showing the top 5 publication venues ranked by number of publications.</p>
                    <div 
                      className="d3-chart venue-chart"
                      ref={venueChartRef}
                      role="img"
                      aria-labelledby="venue-chart-title"
                      aria-describedby="venue-chart-desc venue-chart-table-desc"
                    ></div>
                    <div id="venue-chart-desc" className="sr-only">
                      {getVenueChartInsights()}
                    </div>
                    <div id="venue-chart-table-desc" className="sr-only">
                      For screen reader users: A detailed data table follows this chart with exact publication counts for each venue, including percentages and venue types.
                    </div>
                    
                    {/* Screen reader accessible data table */}
                    <table className="sr-only" role="table" aria-label="Top Venues by Publication Count">
                      <caption>Top 5 publication venues excluding preprint servers, ranked by total number of conference and journal publications. This table provides the exact data shown in the horizontal bar chart above.</caption>
                      <thead>
                        <tr>
                          <th scope="col">Rank</th>
                          <th scope="col">Venue Name</th>
                          <th scope="col">Publication Count</th>
                          <th scope="col">Venue Type</th>
                          <th scope="col">Percentage of Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getTopVenues().map((venue, index) => {
                          const isJournal = publicationStats.byVenueAndType[venue.name] && 
                                          publicationStats.byVenueAndType[venue.name]["Journal Article"] > 0;
                          const totalPubs = Object.values(publicationStats.byVenue).reduce((sum, count) => sum + count, 0);
                          const percentage = ((venue.count / totalPubs) * 100).toFixed(1);
                          return (
                            <tr key={venue.name}>
                              <th scope="row">{index + 1}</th>
                              <td>{venue.name}</td>
                              <td>{venue.count}</td>
                              <td>{isJournal ? "Journal" : "Conference"}</td>
                              <td>{percentage}%</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th scope="row" colSpan="2">Total for Top 5 Venues</th>
                          <td>{getTopVenues().reduce((sum, venue) => sum + venue.count, 0)}</td>
                          <td colSpan="2">
                            {((getTopVenues().reduce((sum, venue) => sum + venue.count, 0) / 
                              Object.values(publicationStats.byVenue).reduce((sum, count) => sum + count, 0)) * 100).toFixed(1)}% of all publications
                          </td>
                        </tr>
                      </tfoot>
                    </table>
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
              <h3 className="section-title small">Peer Reviewed Conference and Journal</h3>
              <div className="sr-only">
                <p>The following publications are organized by year in collapsible sections. 
                   Use the Enter or Space key to expand or collapse each year's publications. 
                   Each publication includes title, venue, authors, and publication type.</p>
              </div>
              <div className="section-content" role="region" aria-label="Peer reviewed publications">
                {groupedPublications.map((group, gIdx) => (
                <div key={gIdx + "-pub"} className="publication-year-group">
                  <div className="year-dropdown">
                    <div 
                      className="year-header"
                      onClick={() => toggleYearExpansion(group.year + "-pub")}
                      onKeyDown={(e) => handleYearToggleKeyDown(e, group.year + "-pub")}
                      tabIndex="0"
                      role="button"
                      aria-expanded={expandedYears[group.year + "-pub"] || false}
                      aria-label={`Toggle ${group.year} publications section. Contains ${group.publications.filter(pub => pub.type === "Conference Paper").length} conference paper${group.publications.filter(pub => pub.type === "Conference Paper").length !== 1 ? 's' : ''} and ${group.publications.filter(pub => pub.type === "Journal Article").length} journal article${group.publications.filter(pub => pub.type === "Journal Article").length !== 1 ? 's' : ''}`}
                    >
                      <div className="year-header-content">
                        <h5 className="year-label">{group.year}</h5>
                        <div className="year-meta">
                          <Badge className="publication-count conference">
                            {group.publications.filter(pub => pub.type === "Conference Paper").length} Conference{group.publications.filter(pub => pub.type === "Conference Paper").length !== 1 ? 's' : ''}
                          </Badge>
                          <Badge className="publication-count journal">
                            {group.publications.filter(pub => pub.type === "Journal Article").length} Journal{group.publications.filter(pub => pub.type === "Journal Article").length !== 1 ? 's' : ''}
                          </Badge>
                          <span className={`chevron-icon ${expandedYears[group.year] ? 'expanded' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`year-content ${expandedYears[group.year + "-pub"] ? 'expanded' : ''}`}>
                      {group.publications.filter(pub => pub.type === "Conference Paper" || pub.type === "Journal Article").map((pub, idx) => (
                      <Card key={idx} className="publication-card">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                              <div className="publication-title">
                                {pub.title}
                                {getAwardEmoji(pub.award)}
                                {pub.award && (
                                  <span className="sr-only">
                                    {pub.award === "best_paper" ? " - Best Paper Award" : " - Best Paper Nomination"}
                                  </span>
                                )}
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
              <h3 className="section-title small">Posters, Workshops, and Long Abstracts</h3>
              <div className="sr-only">
                <p>The following section contains posters, workshop papers, and abstracts organized by year. 
                   These are presented in the same collapsible format as the peer-reviewed publications above.</p>
              </div>
              <div className="section-content" role="region" aria-label="Posters, workshops, and abstracts">
                {groupedPublications.filter(group => group.publications.some(pub => pub.type === "Poster" || pub.type === "Workshop Paper")).map((group, gIdx) => (
                <div key={gIdx} className="publication-year-group">
                  <div className="year-dropdown">
                    <div 
                      className="year-header"
                      onClick={() => toggleYearExpansion(group.year + "-non-pub")}
                      onKeyDown={(e) => handleYearToggleKeyDown(e, group.year + "-non-pub")}
                      tabIndex="0"
                      role="button"
                      aria-expanded={expandedYears[group.year + "-non-pub"] || false}
                      aria-label={`Toggle ${group.year} posters and workshops section. Contains ${group.publications.filter(pub => pub.type === "Poster").length} poster${group.publications.filter(pub => pub.type === "Poster").length !== 1 ? 's' : ''}, ${group.publications.filter(pub => pub.type === "Abstract").length} abstract${group.publications.filter(pub => pub.type === "Abstract").length !== 1 ? 's' : ''}, and ${group.publications.filter(pub => pub.type === "Workshop Paper").length} workshop paper${group.publications.filter(pub => pub.type === "Workshop Paper").length !== 1 ? 's' : ''}`}
                    >
                      <div className="year-header-content">
                        <h5 className="year-label">{group.year}</h5>
                        <div className="year-meta">
                          <Badge className="publication-count poster">
                            {group.publications.filter(pub => pub.type === "Poster").length} Poster{group.publications.filter(pub => pub.type === "Poster").length !== 1 ? 's' : ''}
                          </Badge>
                          <Badge className="publication-count abstract">
                            {group.publications.filter(pub => pub.type === "Abstract").length} Abstract{group.publications.filter(pub => pub.type === "Abstract").length !== 1 ? 's' : ''}
                          </Badge>
                          <Badge className="publication-count workshop">
                            {group.publications.filter(pub => pub.type === "Workshop Paper").length} Workshop{group.publications.filter(pub => pub.type === "Workshop Paper").length !== 1 ? 's' : ''}
                          </Badge>
                          <span className={`chevron-icon ${expandedYears[group.year + "-non-pub"] ? 'expanded' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`year-content ${expandedYears[group.year + "-non-pub"] ? 'expanded' : ''}`}>
                      {group.publications.filter(pub => pub.type === "Poster" || pub.type === "Workshop Paper" || pub.type === "Abstract").map((pub, idx) => (
                      <Card key={idx} className="publication-card">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                              <div className="publication-title">
                                {pub.title}
                                {getAwardEmoji(pub.award)}
                                {pub.award && (
                                  <span className="sr-only">
                                    {pub.award === "best_paper" ? " - Best Paper Award" : " - Best Paper Nomination"}
                                  </span>
                                )}
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

            </section>

            {/* Projects Section */}
            <section className="cv-section mb-4" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="section-title">Projects</h2>
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
            </section>

            {/* Workshops Section */}

            {/* Course Websites Section */}
            <section className="cv-section mb-4" aria-labelledby="course-websites-heading">
              <h2 id="course-websites-heading" className="section-title">Course Websites</h2>
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
            </section>

            {/* Academic Achievements Section */}
            <section className="cv-section mb-4" aria-labelledby="achievements-heading">
              <h2 id="achievements-heading" className="section-title">Academic Achievements</h2>
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
            </section>

          </Col>
        </Row>
      </div>
    </Container>
    );
}

