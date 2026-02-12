import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdSenseAd from "../components/AdSenseAd";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.app}>
      <Navbar />
      
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Tech Insights by Samar</h1>
          <p style={styles.subtitle}>Web Development & AdSense Solutions from Lahore</p>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.container}>
          <section style={styles.hero}>
            <h2>Welcome to My Tech Blog</h2>
            <p>Professional web development services with AdSense integration</p>
            <div style={styles.buttonGroup}>
              <button 
                onClick={() => navigate("/projects")} 
                style={styles.button}
              >
                Explore My Projects
              </button>
              <button 
                onClick={() => navigate("/contact")} 
                style={styles.buttonOutline}
              >
                Get in Touch
              </button>
              <button 
                onClick={() => navigate("/blog")} 
                style={styles.buttonSecondary}
              >
                Read Tech Blog
              </button>
            </div>
          </section>

          {/* AdSense Ad */}
          <AdSenseAd />

          <section style={styles.contentSection}>
            <h2>My Services</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3><i className="fas fa-code"></i> React Development</h3>
                <p>Modern React applications with best practices</p>
                <button 
                  onClick={() => navigate("/projects")}
                  style={styles.cardButton}
                >
                  View Projects
                </button>
              </div>
              <div style={styles.card}>
                <h3><i className="fas fa-ad"></i> AdSense Setup</h3>
                <p>Publisher ID: ca-pub-3069979983539131</p>
                <p>Full AdSense integration and optimization</p>
                <button 
                  onClick={() => navigate("/contact")}
                  style={styles.cardButton}
                >
                  Get Quote
                </button>
              </div>
              <div style={styles.card}>
                <h3><i className="fas fa-server"></i> Firebase Hosting</h3>
                <p>Deployment & hosting solutions</p>
                <p>Current site: web-projects-486505.web.app</p>
                <button 
                  onClick={() => navigate("/contact")}
                  style={styles.cardButton}
                >
                  Contact Now
                </button>
              </div>
            </div>
          </section>

          <AdSenseAd />

          <section style={styles.contactPreview}>
            <h2>Contact Information</h2>
            <div style={styles.contactGrid}>
              <div style={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <h4>Address</h4>
                <p>L-369 G.T Road, Baghbanpura</p>
                <p>Lahore, Pakistan</p>
              </div>
              <div style={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <h4>Phone</h4>
                <p>+92 324 4686365</p>
                <p>WhatsApp: +92 300 4693015</p>
              </div>
              <div style={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <h4>Email</h4>
                <p>Samarhussainsyed@hotmail.com</p>
                <p>samacayyed@gmail.com</p>
              </div>
            </div>
            <button 
              onClick={() => navigate("/contact")}
              style={styles.contactButton}
            >
              <i className="fas fa-envelope"></i> Go to Contact Page
            </button>
          </section>
        </div>
      </main>

      <Footer />
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
    textAlign: "center",
    padding: "4rem 0",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    color: "white",
    marginBottom: "2rem"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem"
  },
  subtitle: {
    fontSize: "1.5rem",
    opacity: 0.9
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
    padding: "1rem 2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "all 0.3s"
  },
  buttonOutline: {
    background: "transparent",
    color: "#3498db",
    border: "3px solid #3498db",
    padding: "1rem 2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "all 0.3s"
  },
  buttonSecondary: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "all 0.3s"
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
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  cardButton: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "1rem",
    fontWeight: "bold"
  },
  contactPreview: {
    textAlign: "center",
    padding: "3rem",
    background: "#f8f9fa",
    borderRadius: "12px",
    marginTop: "3rem"
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    margin: "2rem 0"
  },
  contactItem: {
    padding: "1.5rem"
  },
  contactButton: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "1rem 2.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginTop: "1rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem"
  }
};

// Add hover effects
Object.assign(styles.button, {
  "&:hover": {
    background: "#2980b9",
    transform: "translateY(-3px)"
  }
});

Object.assign(styles.buttonOutline, {
  "&:hover": {
    background: "#3498db",
    color: "white",
    transform: "translateY(-3px)"
  }
});

Object.assign(styles.buttonSecondary, {
  "&:hover": {
    background: "#27ae60",
    transform: "translateY(-3px)"
  }
});

Object.assign(styles.cardButton, {
  "&:hover": {
    background: "#2980b9",
    transform: "translateY(-2px)"
  }
});

Object.assign(styles.contactButton, {
  "&:hover": {
    background: "#c0392b",
    transform: "translateY(-3px)"
  }
});

export default HomePage;
