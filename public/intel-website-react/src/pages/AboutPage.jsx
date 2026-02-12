import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.content}>
          <header style={styles.header}>
            <h1>About Me</h1>
            <p>Web Developer & Tech Entrepreneur from Lahore, Pakistan</p>
          </header>
          
          <section style={styles.section}>
            <div style={styles.profile}>
              <div style={styles.profileImage}>
                <div style={styles.imagePlaceholder}>
                  <i className="fas fa-user" style={styles.icon}></i>
                </div>
              </div>
              <div style={styles.profileInfo}>
                <h2>Samar Hussain Syed</h2>
                <p style={styles.tagline}>Full Stack Developer specializing in React, Firebase & AdSense</p>
                <div style={styles.contactBadges}>
                  <span style={styles.badge}><i className="fas fa-map-marker-alt"></i> Lahore, Pakistan</span>
                  <span style={styles.badge}><i className="fas fa-phone"></i> +92 324 4686365</span>
                  <span style={styles.badge}><i className="fas fa-envelope"></i> samarhussainsyed@hotmail.com</span>
                </div>
              </div>
            </div>
          </section>
          
          <section style={styles.section}>
            <h2>My Journey</h2>
            <p>I'm a passionate web developer with expertise in modern web technologies. My focus is on building scalable applications with React, Firebase, and integrating monetization solutions like Google AdSense.</p>
            <p>Based in Lahore, I help businesses and individuals establish their online presence with professional, high-performance websites.</p>
          </section>
          
          <section style={styles.section}>
            <h2>Technical Skills</h2>
            <div style={styles.skillsGrid}>
              <div style={styles.skillCategory}>
                <h3><i className="fas fa-code"></i> Frontend</h3>
                <ul style={styles.skillList}>
                  <li>React.js & Next.js</li>
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>Responsive Design</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div style={styles.skillCategory}>
                <h3><i className="fas fa-server"></i> Backend</h3>
                <ul style={styles.skillList}>
                  <li>Firebase (Auth, Firestore, Hosting)</li>
                  <li>Node.js</li>
                  <li>REST APIs</li>
                  <li>Database Design</li>
                </ul>
              </div>
              
              <div style={styles.skillCategory}>
                <h3><i className="fas fa-chart-line"></i> Monetization</h3>
                <ul style={styles.skillList}>
                  <li>Google AdSense Integration</li>
                  <li>Ad Optimization</li>
                  <li>Revenue Tracking</li>
                  <li>Policy Compliance</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section style={styles.section}>
            <h2>My Mission</h2>
            <p>To create professional, high-quality web solutions that help businesses grow online. I focus on:</p>
            <div style={styles.missionGrid}>
              <div style={styles.missionCard}>
                <i className="fas fa-rocket" style={styles.missionIcon}></i>
                <h3>Performance</h3>
                <p>Fast, optimized websites that rank well and convert visitors</p>
              </div>
              <div style={styles.missionCard}>
                <i className="fas fa-mobile-alt" style={styles.missionIcon}></i>
                <h3>Responsive Design</h3>
                <p>Websites that work perfectly on all devices</p>
              </div>
              <div style={styles.missionCard}>
                <i className="fas fa-ad" style={styles.missionIcon}></i>
                <h3>Monetization</h3>
                <p>Effective AdSense integration for revenue generation</p>
              </div>
            </div>
          </section>
          
          <section style={styles.ctaSection}>
            <h2>Let's Work Together</h2>
            <p>Interested in building a professional website or integrating AdSense into your existing site?</p>
            <div style={styles.ctaButtons}>
              <a href="/contact" style={styles.primaryButton}>
                <i className="fas fa-envelope"></i> Contact Me
              </a>
              <a href="/projects" style={styles.secondaryButton}>
                <i className="fas fa-briefcase"></i> View Projects
              </a>
            </div>
          </section>
        </div>
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
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem 1rem"
  },
  content: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem"
  },
  section: {
    marginBottom: "3rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #eee"
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap"
  },
  profileImage: {
    flex: "0 0 150px"
  },
  imagePlaceholder: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: "white"
  },
  icon: {
    fontSize: "4rem"
  },
  profileInfo: {
    flex: "1",
    minWidth: "300px"
  },
  tagline: {
    color: "#666",
    fontSize: "1.2rem",
    marginBottom: "1rem"
  },
  contactBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem"
  },
  badge: {
    background: "#f8f9fa",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    border: "1px solid #dee2e6"
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "1.5rem"
  },
  skillCategory: {
    background: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "8px",
    border: "1px solid #e9ecef"
  },
  skillList: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem"
  },
  skillList li: {
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
    "&:last-child": {
      borderBottom: "none"
    }
  },
  missionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "1.5rem"
  },
  missionCard: {
    textAlign: "center",
    padding: "2rem 1.5rem",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    border: "1px solid #e0e0e0"
  },
  missionIcon: {
    fontSize: "2.5rem",
    color: "#3498db",
    marginBottom: "1rem"
  },
  ctaSection: {
    textAlign: "center",
    padding: "3rem",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    borderRadius: "10px",
    color: "white"
  },
  ctaButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
    flexWrap: "wrap"
  },
  primaryButton: {
    background: "#2ecc71",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "background 0.3s",
    "&:hover": {
      background: "#27ae60"
    }
  },
  secondaryButton: {
    background: "transparent",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    border: "2px solid white",
    transition: "background 0.3s",
    "&:hover": {
      background: "rgba(255,255,255,0.1)"
    }
  }
};

export default AboutPage;
