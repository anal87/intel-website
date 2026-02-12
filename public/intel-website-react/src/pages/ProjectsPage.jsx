import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Tech Insights Website",
      description: "Complete React website with AdSense integration, Firebase hosting, and professional portfolio.",
      technologies: ["React", "Firebase", "AdSense", "CSS"],
      status: "Live",
      link: "https://web-projects-486505.web.app"
    },
    {
      id: 2,
      title: "React AdSense Component",
      description: "Reusable React component for Google AdSense integration with error handling and lazy loading.",
      technologies: ["React", "JavaScript", "AdSense API"],
      status: "Published",
      link: "https://github.com/samacayyed"
    },
    {
      id: 3,
      title: "Firebase Deployment Scripts",
      description: "PowerShell automation scripts for deploying React apps to Firebase with CI/CD pipelines.",
      technologies: ["PowerShell", "Firebase", "CI/CD"],
      status: "Open Source",
      link: "https://github.com/samacayyed"
    }
  ];

  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <header style={styles.header}>
          <h1>My Projects</h1>
          <p>Web development projects showcasing React, Firebase, and AdSense integration</p>
        </header>
        
        <div style={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} style={styles.projectCard}>
              <div style={styles.cardHeader}>
                <h3>{project.title}</h3>
                <span style={{
                  ...styles.status,
                  backgroundColor: project.status === "Live" ? "#2ecc71" : 
                                 project.status === "Published" ? "#3498db" : "#f39c12"
                }}>
                  {project.status}
                </span>
              </div>
              
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={styles.techTag}>{tech}</span>
                ))}
              </div>
              
              <div style={styles.cardFooter}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                  {project.status === "Live" ? "Visit Live Site" : "View on GitHub"}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <section style={styles.githubSection}>
          <h2>More Projects on GitHub</h2>
          <p>Check out my GitHub profile for more projects and code samples:</p>
          <a href="https://github.com/samacayyed" target="_blank" rel="noopener noreferrer" style={styles.githubButton}>
            <i className="fab fa-github"></i> Visit GitHub Profile
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem"
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem"
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem"
  },
  projectCard: {
    background: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    border: "1px solid #e0e0e0",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
    }
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1rem"
  },
  status: {
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.8rem",
    color: "white",
    fontWeight: "bold"
  },
  description: {
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "1.5rem"
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1.5rem"
  },
  techTag: {
    background: "#f8f9fa",
    color: "#495057",
    padding: "0.3rem 0.8rem",
    borderRadius: "15px",
    fontSize: "0.85rem",
    border: "1px solid #dee2e6"
  },
  cardFooter: {
    borderTop: "1px solid #eee",
    paddingTop: "1rem"
  },
  projectLink: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "500",
    display: "inline-block",
    transition: "color 0.3s",
    "&:hover": {
      color: "#2980b9"
    }
  },
  githubSection: {
    textAlign: "center",
    padding: "3rem",
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    borderRadius: "10px",
    marginTop: "2rem"
  },
  githubButton: {
    display: "inline-block",
    background: "#333",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "5px",
    textDecoration: "none",
    marginTop: "1rem",
    fontWeight: "bold",
    transition: "background 0.3s",
    "&:hover": {
      background: "#222"
    }
  }
};

export default ProjectsPage;
