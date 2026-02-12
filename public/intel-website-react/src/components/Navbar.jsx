import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <i className="fas fa-laptop-code"></i> Tech Insights
        </Link>
        
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/projects" style={styles.link}>Projects</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <button 
            onClick={() => navigate("/contact")}
            style={styles.ctaButton}
          >
            <i className="fas fa-envelope"></i> Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#2c3e50",
    padding: "1rem 0",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "background 0.3s",
    fontSize: "1.1rem",
    "&:hover": {
      background: "rgba(255,255,255,0.1)"
    }
  },
  ctaButton: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "0.7rem 1.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s",
    "&:hover": {
      background: "#c0392b",
      transform: "translateY(-2px)"
    }
  }
};

export default Navbar;
