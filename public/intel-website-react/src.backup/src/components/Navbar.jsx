import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/privacy" style={styles.link}>Privacy</Link>
          <Link to="/terms" style={styles.link}>Terms</Link>
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
    zIndex: 1000
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
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "background 0.3s"
  }
};

export default Navbar;
