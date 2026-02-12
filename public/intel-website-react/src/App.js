import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={
            <div style={{ padding: "3rem", textAlign: "center" }}>
              <h1>My Projects</h1>
              <p>Web Development Portfolio</p>
              <div style={{ marginTop: "2rem" }}>
                <h3>React + AdSense Website</h3>
                <p>Current project: web-projects-486505.web.app</p>
                <p>Tech: React, Firebase, AdSense</p>
              </div>
            </div>
          } />
          <Route path="/blog" element={
            <div style={{ padding: "3rem", textAlign: "center" }}>
              <h1>Tech Blog</h1>
              <p>Coming soon with React tutorials</p>
              <div style={{ marginTop: "2rem" }}>
                <h3>Planned Articles:</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>? AdSense Setup with React</li>
                  <li>? Firebase Deployment</li>
                  <li>? React Components Best Practices</li>
                </ul>
              </div>
            </div>
          } />
          <Route path="/privacy" element={
            <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
              <h1>Privacy Policy</h1>
              <p><strong>Last Updated:</strong> February 11, 2024</p>
              <p>This site uses Google AdSense for advertising. AdSense may use cookies to serve ads based on user visits.</p>
              <p>For more information, visit Google's Privacy Policy.</p>
            </div>
          } />
          <Route path="/terms" element={
            <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
              <h1>Terms of Service</h1>
              <p>By using this website, you agree to our terms.</p>
              <p>This site displays Google AdSense advertisements.</p>
              <p>All content is owned by the site owner unless otherwise stated.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
