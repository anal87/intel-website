import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Samar Tech Solutions</h3>
            <p>Professional web development and AdSense integration services from Lahore, Pakistan.</p>
            <div style={styles.businessInfo}>
              <p><i className="fas fa-map-marker-alt"></i> L-369 G.T Road, Baghbanpura, Lahore</p>
              <p><i className="fas fa-phone"></i> +92 324 4686365</p>
              <p><i className="fab fa-whatsapp"></i> +92 300 4693015</p>
            </div>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Quick Links</h3>
            <ul style={styles.linkList}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/projects" style={styles.link}>My Projects</Link></li>
              <li><Link to="/blog" style={styles.link}>Tech Blog</Link></li>
              <li><Link to="/contact" style={styles.link}>Contact Me</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>Contact Directly</h3>
            <div style={styles.contactButtons}>
              <a href="tel:+923244686365" style={styles.contactButton}>
                <i className="fas fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/923004693015" target="_blank" rel="noopener noreferrer" style={styles.contactButton}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="mailto:Samarhussainsyed@hotmail.com" style={styles.contactButton}>
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
            <div style={styles.emailList}>
              <p><strong>Primary:</strong> Samarhussainsyed@hotmail.com</p>
              <p><strong>Alternate:</strong> samacayyed@gmail.com</p>
            </div>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.sectionTitle}>AdSense Services</h3>
            <div style={styles.adsenseInfo}>
              <p><i className="fas fa-ad"></i> <strong>Publisher ID:</strong></p>
              <p><code>ca-pub-3069979983539131</code></p>
              <p><i className="fas fa-globe"></i> <strong>Live Site:</strong></p>
              <p><a href="https://web-projects-486505.web.app" style={styles.siteLink}>web-projects-486505.web.app</a></p>
            </div>
          </div>
        </div>
        
        <div style={styles.copyright}>
          <p>&copy; {currentYear} Samar Tech Solutions. All rights reserved.</p>
          <p>Lahore, Pakistan | Business Hours: 10 AM - 6 PM PKT</p>
          <p style={styles.techStack}>Built with: React · Firebase · AdSense</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "3rem 0 1.5rem",
    marginTop: "3rem"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem"
  },
  footerSection: {
    marginBottom: "1rem"
  },
  sectionTitle: {
    color: "#3498db",
    marginBottom: "1rem",
    fontSize: "1.2rem"
  },
  businessInfo: {
    fontSize: "0.9rem",
    opacity: 0.9,
    lineHeight: "1.6"
  },
  linkList: {
    listStyle: "none",
    padding: 0
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    display: "block",
    marginBottom: "0.5rem",
    transition: "color 0.3s",
    "&:hover": {
      color: "#2980b9"
    }
  },
  contactButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem"
  },
  contactButton: {
    background: "#3498db",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    transition: "background 0.3s",
    "&:hover": {
      background: "#2980b9"
    }
  },
  emailList: {
    fontSize: "0.9rem",
    opacity: 0.9
  },
  adsenseInfo: {
    background: "rgba(52, 152, 219, 0.1)",
    padding: "1rem",
    borderRadius: "5px",
    fontSize: "0.9rem"
  },
  siteLink: {
    color: "#2ecc71",
    textDecoration: "none",
    wordBreak: "break-all"
  },
  copyright: {
    textAlign: "center",
    paddingTop: "2rem",
    borderTop: "1px solid #34495e",
    fontSize: "0.9rem",
    opacity: 0.8,
    lineHeight: "1.6"
  },
  techStack: {
    marginTop: "0.5rem",
    color: "#95a5a6"
  }
};

export default Footer;
