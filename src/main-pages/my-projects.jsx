import React from 'react';
// Import Bootstrap CSS in your main App.js or index.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

function MyProjects({ children }) {
    const projectsData = [
        {
            id: 1,
            title: "ArticleForge",
            description: "A full-stack content management system (CMS) allowing users to perform full CRUD operations on articles. Built with a React frontend and a Node/Express backend.",
            // List key features as an array
            features: ["User Authentication", "Create, Read, Update, Delete Articles", "RESTful API", "Responsive Design"],
            // List technologies as an array for mapping
            tech: ["React", "Node.js", "Express", "MongoDB"],
            // For the liveDemoLink, you can use the YouTube video URL if you have a walkthrough
            liveDemoLink: "https://youtube.com/your-video-link",
            liveDemoText: "Video Walkthrough", // Change the text for this button
            githubLink: "https://github.com/yourusername/articleforge",
            // For the image, use require for local files or a direct URL for hosted images
            imageUrl: "./assets/article-app-screenshot.png", // or use the imported variable `articleAppImg`
            // Optional: if you only have a video, you can add a special tag
            status: "featured" // Optional flag to highlight a project
        },
        {
            id: 2,
            title: "Esín Crafts",
            description: "A responsive front-end prototype for an e-commerce store specializing in artisan crafts. Focused on building a clean and intuitive user interface.",
            features: ["Responsive Navigation", "Product Showcase Grid", "Hero Section", "Mobile-First Design"],
            tech: ["HTML", "CSS", "JavaScript"],
            liveDemoLink: null, // Set to null if no demo exists
            liveDemoText: null, // Set text to null if no demo
            githubLink: "https://github.com/yourusername/esin-crafts",
            imageUrl: "https://images.pexels.com/photos/xxxx/pexels-photo-xxxx.jpeg" // Example of an online image
        },
        {
            id: 3,
            title: "Code Primer",
            description: "A collection of well-commented code examples and mini-projects designed to explain the core concepts of modern web development.",
            features: ["DOM Manipulation Examples", "CSS Animations", "ES6+ JavaScript Concepts", "Clean Documentation"],
            tech: ["HTML", "CSS", "JavaScript"],
            liveDemoLink: null,
            liveDemoText: null,
            githubLink: "https://github.com/yourusername/code-primer",
            imageUrl: "./assets/code-primer-screenshot.png"
        }
    ];
    return (
        <>
            <Container fluid className="py-5 bg-light" id="projects"> {/* fluid makes it full-width, py-5 is padding, bg-light is a light grey background */}
                <Container> {/* This inner container centers your content */}
                    {/* Page Header Section */}
                    <Row className="mb-5 text-center">
                        <Col>
                            <h2 className="display-4 fw-bold">My Projects</h2> {/* Large, bold heading */}
                            <p className="lead text-muted">A showcase of the applications and websites I've built.</p> {/* Subtitle */}
                            <hr className="w-25 mx-auto" /> {/* A horizontal rule, centered and 25% width */}
                        </Col>
                    </Row>

                    {/* Projects Grid Section */}
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {/* 
            - xs={1}: 1 column on extra small screens (phones)
            - md={2}: 2 columns on medium screens (tablets)
            - lg={3}: 3 columns on large screens (desktops)
            - g-4: adds a gutter/gap between the cards
          */}

                        {projectsData.map((project) => (
                            // Map through the projectsData array and render a Card for each project
                            <Col key={project.id}> {/* Each project is placed in a Column. The key is critical for React's rendering. */}
                                <Card className="h-100 shadow-sm">
                                    {/* h-100: makes all cards the same height. shadow-sm: adds a subtle shadow. */}

                                    {/* Project Image */}
                                    <Card.Img
                                        variant="top"
                                        src={project.imageUrl}
                                        alt={`Screenshot of ${project.title}`}
                                        style={{ height: '180px', objectFit: 'cover' }} // Optional: Standardizes image height
                                    />

                                    <Card.Body className="d-flex flex-column">
                                        {/* Flex-column and flex-grow-1 on the text push the buttons to the bottom */}

                                        {/* Project Title */}
                                        <Card.Title className="fw-bold">{project.title}</Card.Title>

                                        {/* Project Description */}
                                        <Card.Text className="flex-grow-1">
                                            {/* flex-grow-1 pushes subsequent content down */}
                                            {project.description}
                                        </Card.Text>

                                        {/* Key Features List */}
                                        <div className="mb-3">
                                            <small className="text-muted">Key Features:</small>
                                            <ul className="ps-3 small"> {/* ps-3 is padding-start for indentation */}
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack Badges */}
                                        <div className="mt-auto mb-3"> {/* mt-auto helps with vertical alignment in a flex column */}
                                            {project.tech.map((technology, idx) => (
                                                <Badge
                                                    key={idx}
                                                    bg="secondary"
                                                    className="me-1 mb-1" // me-1 is margin-end for spacing between badges
                                                    style={{ fontSize: '0.65rem' }}
                                                >
                                                    {technology}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="d-grid gap-2">
                                            {/* d-grid makes the buttons block level, gap-2 adds space between them */}

                                            {/* Conditional Rendering for Live Demo Button */}
                                            {project.liveDemoLink ? (
                                                <Button
                                                    variant="outline-primary"
                                                    href={project.liveDemoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {/* Optional: Add an icon here */}
                                                    {/* <img src={videoIcon} alt="Video icon" width="20" className="me-2" /> */}
                                                    {project.liveDemoText}
                                                </Button>
                                            ) : null /* Renders nothing if no link is provided */}

                                            {/* GitHub Button - Always shown */}
                                            <Button
                                                variant="outline-dark"
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Code on GitHub
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

        </>
    )
}
export default MyProjects