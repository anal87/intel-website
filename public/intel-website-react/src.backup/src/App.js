import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdSenseAd from "./components/AdSenseAd";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ minHeight: "70vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={
              <div style={{ padding: "3rem", maxWidth: "1200px", margin: "0 auto" }}>
                <h1>My Projects</h1>
                <AdSenseAd />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
                  <div style={{ background: "white", padding: "1.5rem", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                    <h3>Tech Insights Website</h3>
                    <p>React + Firebase + AdSense integration</p>
                    <p><strong>Status:</strong> ? Live</p>
                    <p><strong>URL:</strong> https://web-projects-486505.web.app</p>
                  </div>
                  <div style={{ background: "white", padding: "1.5rem", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                    <h3>AdSense Setup Service</h3>
                    <p>Professional AdSense integration service</p>
                    <p><strong>Publisher ID:</strong> ca-pub-3069979983539131</p>
                  </div>
                  <div style={{ background: "white", padding: "1.5rem", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                    <h3>React Development</h3>
                    <p>Custom React applications and websites</p>
                    <p><strong>Tech Stack:</strong> React, Firebase, Tailwind</p>
                  </div>
                </div>
                <AdSenseAd />
              </div>
            } />
            <Route path="/blog" element={
              <div style={{ padding: "3rem", maxWidth: "1200px", margin: "0 auto" }}>
                <h1>Tech Blog</h1>
                <AdSenseAd />
                <div style={{ marginTop: "2rem" }}>
                  <article style={{ background: "white", padding: "2rem", borderRadius: "10px", marginBottom: "2rem", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                    <h2>How to Setup AdSense with React</h2>
                    <p><small>Published: February 11, 2024</small></p>
                    <p>Complete guide to integrating Google AdSense with React applications...</p>
                    <a href="#" style={{ color: "#3498db", textDecoration: "none" }}>Read More ?</a>
                  </article>
                  <article style={{ background: "white", padding: "2rem", borderRadius: "10px", marginBottom: "2rem", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                    <h2>Firebase Hosting for React Apps</h2>
                    <p><small>Published: February 10, 2024</small></p>
                    <p>Step-by-step deployment guide for React apps to Firebase...</p>
                    <a href="#" style={{ color: "#3498db", textDecoration: "none" }}>Read More ?</a>
                  </article>
                </div>
                <AdSenseAd />
              </div>
            } />
            <Route path="/privacy" element={
              <div style={{ padding: "3rem", maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                <h1>Privacy Policy</h1>
                <AdSenseAd />
                <section style={{ marginTop: "2rem" }}>
                  <h2>Information Collection</h2>
                  <p>We use Google AdSense to display advertisements on our website...</p>
                  <h2>AdSense</h2>
                  <p>Google AdSense uses cookies to serve ads based on user visits...</p>
                  <p>Publisher ID: ca-pub-3069979983539131</p>
                  <h2>Contact</h2>
                  <p>For privacy concerns, contact: Samarhussainsyed@hotmail.com</p>
                </section>
                <AdSenseAd />
              </div>
            } />
            <Route path="/terms" element={
              <div style={{ padding: "3rem", maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
                <h1>Terms of Service</h1>
                <AdSenseAd />
                <section style={{ marginTop: "2rem" }}>
                  <h2>Acceptance of Terms</h2>
                  <p>By using this website, you agree to these terms...</p>
                  <h2>AdSense Advertising</h2>
                  <p>This website uses Google AdSense for advertising...</p>
                  <p>AdSense Publisher: ca-pub-3069979983539131</p>
                  <h2>Contact Information</h2>
                  <p>Samar Hussain Syed</p>
                  <p>L-369 G.T Road, Baghbanpura, Lahore</p>
                  <p>Email: Samarhussainsyed@hotmail.com</p>
                  <p>Phone: +92 324 4686365</p>
                </section>
                <AdSenseAd />
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
