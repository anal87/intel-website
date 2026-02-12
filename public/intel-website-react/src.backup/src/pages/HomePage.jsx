import React from "react";
import Navbar from "../components/Navbar";
import AdSense from "../components/AdSense";

const HomePage = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Tech Insights</h1>
          <p style={styles.subtitle}>Technology Blog, Projects & Tutorials</p>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.container}>
          <section style={styles.hero}>
            <h2>Welcome to Tech Insights</h2>
            <p>Your source for technology tutorials, project ideas, and tech insights</p>
            <div style={styles.buttonGroup}>
              <button style={styles.button}>Explore Content</button>
              <button style={styles.buttonOutline}>Get in Touch</button>
            </div>
          </section>

          {/* First AdSense Auto Ad Placement */}
          <AdSense />

          <section style={styles.contentSection}>
            <h2>Latest Articles & Projects</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3><i className="fas fa-code"></i> Web Development</h3>
                <p>Learn modern web development techniques with our tutorials.</p>
                <button style={styles.cardButton}>Read More</button>
              </div>
              <div style={styles.card}>
                <h3><i className="fas fa-robot"></i> AI & Machine Learning</h3>
                <p>Explore AI projects and machine learning concepts.</p>
                <button style={styles.cardButton}>View Projects</button>
              </div>
              <div style={styles.card}>
                <h3><i className="fas fa-mobile-alt"></i> Mobile Apps</h3>
                <p>Mobile application development guides and resources.</p>
                <button style={styles.cardButton}>Learn More</button>
              </div>
            </div>
          </section>

          {/* Second AdSense Auto Ad Placement */}
          <AdSense />

          <section style={styles.aboutSection}>
            <h2>About This Site</h2>
            <p>Tech Insights provides high-quality technology content, tutorials, and project ideas for developers and tech enthusiasts. Our goal is to help people learn and grow in their tech careers.</p>
            
            <div style={styles.adSenseInfo}>
              <h3><i className="fas fa-ad"></i> AdSense Status</h3>
              <p>Currently using <strong>Auto Ads</strong> - Google automatically places ads in optimal locations.</p>
              <p>Publisher ID: <code>ca-pub-3069979983539131</code></p>
              <p style={styles.note}>
                <i className="fas fa-info-circle"></i> Note: You'll get actual ad slot numbers after AdSense approval.
                Google will automatically manage ad placements.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; 2024 Tech Insights. All rights reserved.</p>
          <p>
            <a href="/privacy" style={styles.footerLink}>Privacy Policy</a> | 
            <a href="/terms" style={styles.footerLink}>Terms of Service</a> | 
            <a href="/contact" style={styles.footerLink}>Contact Us</a>
          </p>
          <p>Email: contact@techinsights.example.com</p>
          <p style={styles.adsenseNote}>
            <i className="fas fa-ad"></i> AdSense Publisher: ca-pub-3069979983539131
          </p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  app: {
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  },
  header: {
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    color: "white",
    padding: "4rem 0",
    textAlign: "center",
    marginBottom: "2rem"
  },
  title: {
    fontSize: "3.5rem",
    marginBottom: "0.5rem",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: "1.5rem",
    opacity: 0.9,
    fontWeight: "300"
  },
  hero: {
    textAlign: "center",
    padding: "3rem 0",
    marginBottom: "2rem"
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "2rem",
    flexWrap: "wrap"
  },
  button: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "0.8rem 1.8rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "transform 0.2s, background 0.3s"
  },
  buttonOutline: {
    background: "transparent",
    color: "#3498db",
    border: "3px solid #3498db",
    padding: "0.8rem 1.8rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "transform 0.2s, background 0.3s"
  },
  contentSection: {
    margin: "3rem 0"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "2rem"
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    border: "1px solid #e0e0e0"
  },
  cardButton: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "0.7rem 1.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1.5rem",
    fontWeight: "600",
    transition: "background 0.3s"
  },
  aboutSection: {
    margin: "4rem 0",
    padding: "3rem",
    background: "#f8f9fa",
    borderRadius: "12px"
  },
  adSenseInfo: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    marginTop: "2rem",
    borderLeft: "4px solid #3498db"
  },
  note: {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffeaa7",
    padding: "1rem",
    borderRadius: "5px",
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#856404"
  },
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "3rem 0",
    marginTop: "3rem"
  },
  footerLink: {
    color: "#3498db",
    textDecoration: "none",
    margin: "0 0.5rem",
    fontWeight: "500"
  },
  adsenseNote: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    opacity: 0.8
  }
};

export default HomePage;
