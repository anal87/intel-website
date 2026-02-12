import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.content}>
          <h1>Terms of Service</h1>
          <p style={styles.date}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section style={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          </section>
          
          <section style={styles.section}>
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only.</p>
          </section>
          
          <section style={styles.section}>
            <h2>3. Disclaimer</h2>
            <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
          </section>
          
          <section style={styles.section}>
            <h2>4. Limitations</h2>
            <p>In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website.</p>
          </section>
          
          <section style={styles.section}>
            <h2>5. AdSense Advertising</h2>
            <p>This website uses Google AdSense for advertising. By using our site, you consent to:</p>
            <ul style={styles.list}>
              <li>The use of cookies and similar technologies</li>
              <li>Personalized ads based on your browsing history</li>
              <li>Data collection for advertising purposes</li>
            </ul>
            <p>You can opt out of personalized advertising through your Google Account settings.</p>
          </section>
          
          <section style={styles.section}>
            <h2>6. Content Guidelines</h2>
            <p>Users agree not to:</p>
            <ul style={styles.list}>
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to interfere with site security</li>
              <li>Copy or redistribute site content without permission</li>
            </ul>
          </section>
          
          <section style={styles.section}>
            <h2>7. Modifications</h2>
            <p>We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms.</p>
          </section>
          
          <section style={styles.section}>
            <h2>8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Pakistan.</p>
          </section>
          
          <section style={styles.section}>
            <h2>9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <p>Email: samarhussainsyed@hotmail.com</p>
            <p>Phone: +92 324 4686365</p>
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
  }
};

export default TermsOfService;
