import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.content}>
          <h1>Privacy Policy</h1>
          <p style={styles.date}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section style={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul style={styles.list}>
              <li>Contact us through our website forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Leave comments or feedback</li>
            </ul>
            <p>This information may include your name, email address, and any messages you send.</p>
          </section>
          
          <section style={styles.section}>
            <h2>2. Google AdSense</h2>
            <p>We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites.</p>
            <p>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</p>
            <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style={styles.link}>Google Ads Settings</a>.</p>
          </section>
          
          <section style={styles.section}>
            <h2>3. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          
          <section style={styles.section}>
            <h2>4. Third-Party Services</h2>
            <p>We may use third-party services that collect information used to identify you:</p>
            <ul style={styles.list}>
              <li><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li><strong>Google AdSense:</strong> For advertising</li>
              <li><strong>Firebase:</strong> For hosting and deployment</li>
            </ul>
          </section>
          
          <section style={styles.section}>
            <h2>5. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul style={styles.list}>
              <li>Email: samarhussainsyed@hotmail.com</li>
              <li>Phone: +92 324 4686365</li>
              <li>Address: L-369 G.T Road, Baghbanpura, Lahore, Pakistan</li>
            </ul>
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
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem 1rem"
  },
  content: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },
  date: {
    color: "#666",
    fontStyle: "italic",
    marginBottom: "2rem"
  },
  section: {
    marginBottom: "2rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #eee"
  },
  list: {
    paddingLeft: "1.5rem",
    margin: "1rem 0"
  },
  link: {
    color: "#3498db",
    textDecoration: "none"
  }
};

export default PrivacyPolicy;
