import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      
      <div style={styles.container}>
        <header style={styles.header}>
          <h1><i className="fas fa-envelope"></i> Contact Samar</h1>
          <p>Web Developer & Tech Entrepreneur from Lahore, Pakistan</p>
        </header>
        
        <main style={styles.main}>
          <div style={styles.contactInfo}>
            <div style={styles.infoCard}>
              <h2><i className="fas fa-user"></i> Business Details</h2>
              <p><strong>Name:</strong> Samar Hussain Syed</p>
              <p><strong>Business:</strong> Tech Solutions & Web Development</p>
              <p><strong>Specialization:</strong> React, Firebase, AdSense Integration</p>
            </div>
            
            <div style={styles.infoCard}>
              <h2><i className="fas fa-phone"></i> Phone & WhatsApp</h2>
              <p>?? <a href="tel:+923244686365">+92 324 4686365</a> (Direct Call)</p>
              <p>?? <a href="tel:+923004693015">+92 300 4693015</a> (Alternate)</p>
              <p>?? <a href="https://wa.me/923004693015" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
              <p><small>(Available 10 AM - 6 PM PKT)</small></p>
            </div>
            
            <div style={styles.infoCard}>
              <h2><i className="fas fa-envelope"></i> Email</h2>
              <p>?? <a href="mailto:Samarhussainsyed@hotmail.com">Samarhussainsyed@hotmail.com</a></p>
              <p>?? <a href="mailto:samacayyed@gmail.com">samacayyed@gmail.com</a></p>
              <p><small>(For business inquiries and collaborations)</small></p>
            </div>
            
            <div style={styles.infoCard}>
              <h2><i className="fas fa-map-marker-alt"></i> Business Address</h2>
              <p>?? L-369 G.T Road</p>
              <p>??? Baghbanpura, Lahore</p>
              <p>???? Punjab, Pakistan</p>
              <p><small>(Available for meetings by appointment)</small></p>
            </div>
          </div>
          
          <div style={styles.quickContact}>
            <h2><i className="fas fa-bolt"></i> Quick Contact Links</h2>
            <div style={styles.quickLinks}>
              <a href="tel:+923244686365" style={styles.quickLink}>
                <i className="fas fa-phone"></i> Call Now
              </a>
              <a href="https://wa.me/923004693015" target="_blank" rel="noopener noreferrer" style={styles.quickLink}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="mailto:Samarhussainsyed@hotmail.com" style={styles.quickLink}>
                <i className="fas fa-envelope"></i> Email
              </a>
              <a href="https://github.com/samacayyed" target="_blank" rel="noopener noreferrer" style={styles.quickLink}>
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          
          <div style={styles.contactForm}>
            <h2>Send Business Inquiry</h2>
            <form style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" placeholder="Full name" style={styles.input} required />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="email">Your Email *</label>
                <input type="email" id="email" placeholder="Email address" style={styles.input} required />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="phone">Phone Number (WhatsApp)</label>
                <input type="tel" id="phone" placeholder="+92 XXX XXXXXXX" style={styles.input} />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <select id="subject" style={styles.select} required>
                  <option value="">Select inquiry type</option>
                  <option value="web-development">Web Development</option>
                  <option value="adsense">AdSense Setup</option>
                  <option value="react">React Projects</option>
                  <option value="firebase">Firebase Hosting</option>
                  <option value="collaboration">Business Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  placeholder="Please describe your project or inquiry..." 
                  style={styles.textarea} 
                  required
                  defaultValue="Hi Samar, I saw your website and I'm interested in..."
                ></textarea>
              </div>
              
              <button type="submit" style={styles.submitButton}>
                <i className="fas fa-paper-plane"></i> Send Business Inquiry
              </button>
            </form>
            
            <div style={styles.responseInfo}>
              <h3><i className="fas fa-info-circle"></i> What happens next?</h3>
              <ol style={styles.processList}>
                <li>You'll receive an acknowledgment email within 1 hour</li>
                <li>I'll review your inquiry and respond within 24 hours</li>
                <li>We'll schedule a call/meeting to discuss details</li>
                <li>You'll receive a proposal with timeline and pricing</li>
              </ol>
            </div>
          </div>
          
          <div style={styles.adSenseSection}>
            <h3><i className="fas fa-ad"></i> AdSense Services</h3>
            <div style={styles.serviceGrid}>
              <div style={styles.serviceCard}>
                <h4><i className="fas fa-check-circle"></i> AdSense Setup</h4>
                <p>Complete AdSense integration for your website</p>
              </div>
              <div style={styles.serviceCard}>
                <h4><i className="fas fa-chart-line"></i> Revenue Optimization</h4>
                <p>Maximize your AdSense earnings</p>
              </div>
              <div style={styles.serviceCard}>
                <h4><i className="fas fa-mobile-alt"></i> Mobile Optimization</h4>
                <p>Ads optimized for all devices</p>
              </div>
              <div style={styles.serviceCard}>
                <h4><i className="fas fa-shield-alt"></i> Policy Compliance</h4>
                <p>Ensure AdSense policy adherence</p>
              </div>
            </div>
            <div style={styles.adsenseDetails}>
              <p><strong>My Publisher ID:</strong> <code>ca-pub-3069979983539131</code></p>
              <p><strong>Live Example:</strong> <a href="https://web-projects-486505.web.app">web-projects-486505.web.app</a></p>
            </div>
          </div>
        </main>
      </div>
      
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
    padding: "3rem 0",
    marginBottom: "2rem",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    color: "white",
    borderRadius: "10px",
    marginTop: "1rem"
  },
  main: {
    marginBottom: "3rem"
  },
  contactInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem"
  },
  infoCard: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    border: "1px solid #e0e0e0",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "translateY(-5px)"
    }
  },
  quickContact: {
    background: "#e3f2fd",
    padding: "2rem",
    borderRadius: "10px",
    marginBottom: "2rem",
    textAlign: "center"
  },
  quickLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1rem"
  },
  quickLink: {
    background: "#2196f3",
    color: "white",
    padding: "0.8rem 1.5rem",
    borderRadius: "50px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: "bold",
    transition: "background 0.3s",
    "&:hover": {
      background: "#1976d2"
    }
  },
  contactForm: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    marginBottom: "2rem"
  },
  form: {
    marginTop: "1.5rem"
  },
  formGroup: {
    marginBottom: "1.5rem"
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    marginTop: "0.5rem"
  },
  select: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    marginTop: "0.5rem",
    background: "white"
  },
  textarea: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    marginTop: "0.5rem",
    fontFamily: "inherit"
  },
  submitButton: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0 auto",
    fontWeight: "bold",
    transition: "background 0.3s",
    "&:hover": {
      background: "#27ae60"
    }
  },
  responseInfo: {
    background: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "8px",
    marginTop: "2rem"
  },
  processList: {
    paddingLeft: "1.5rem",
    lineHeight: "1.8"
  },
  adSenseSection: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "2rem",
    borderRadius: "10px",
    marginTop: "2rem"
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    margin: "1.5rem 0"
  },
  serviceCard: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    backdropFilter: "blur(10px)"
  },
  adsenseDetails: {
    background: "rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    borderRadius: "8px",
    marginTop: "1rem"
  }
};

export default ContactPage;
