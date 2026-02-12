import React from "react";
import AdSenseAd from "./AdSenseAd";

/**
 * Example page showing different AdSense implementations
 */
const AdSenseExamplePage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>AdSense Implementation Examples</h1>
        <p>Different ways to use AdSense in your React app</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>1. Auto Ads (Recommended for beginners)</h2>
          <p>Google automatically places ads in optimal locations. No slot numbers needed!</p>
          <AdSenseAd />
          <code style={styles.code}>
            {"<AdSenseAd />"}
          </code>
        </section>

        <section style={styles.section}>
          <h2>2. With Slot Number (After approval)</h2>
          <p>After AdSense approval, you can create specific ad units and use their slot numbers.</p>
          <AdSenseAd slot="YOUR_SLOT_NUMBER_HERE" />
          <code style={styles.code}>
            {"<AdSenseAd slot=\"YOUR_SLOT_NUMBER_HERE\" />"}
          </code>
        </section>

        <section style={styles.section}>
          <h2>3. Different Ad Formats</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Rectangle</h3>
              <AdSenseAd format="rectangle" />
              <code>format="rectangle"</code>
            </div>
            <div style={styles.card}>
              <h3>Horizontal</h3>
              <AdSenseAd format="horizontal" />
              <code>format="horizontal"</code>
            </div>
            <div style={styles.card}>
              <h3>Vertical</h3>
              <AdSenseAd format="vertical" />
              <code>format="vertical"</code>
            </div>
          </div>
        </section>

        <section style={styles.infoBox}>
          <h2>?? Important Notes</h2>
          <ul style={styles.list}>
            <li><strong>Publisher ID:</strong> ca-pub-3069979983539131</li>
            <li><strong>Site URL:</strong> https://web-projects-486505.web.app</li>
            <li><strong>Auto Ads:</strong> No slot numbers needed initially</li>
            <li><strong>After approval:</strong> Create ad units in AdSense dashboard to get slot numbers</li>
            <li><strong>Critical Code:</strong> <code>(adsbygoogle = window.adsbygoogle || []).push({});</code> must be called</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>AdSense Publisher: ca-pub-3069979983539131</p>
        <p>React AdSense Component v1.0</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    paddingBottom: "20px",
    borderBottom: "2px solid #e9ecef"
  },
  main: {
    marginBottom: "40px"
  },
  section: {
    marginBottom: "40px",
    padding: "25px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    padding: "20px",
    border: "1px solid #dee2e6",
    borderRadius: "8px",
    textAlign: "center"
  },
  code: {
    display: "block",
    marginTop: "10px",
    padding: "10px",
    background: "#f8f9fa",
    borderRadius: "5px",
    fontFamily: "monospace",
    fontSize: "14px"
  },
  infoBox: {
    background: "#e3f2fd",
    padding: "25px",
    borderRadius: "10px",
    borderLeft: "5px solid #2196f3"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#f8f9fa",
    borderRadius: "10px",
    marginTop: "40px"
  }
};

export default AdSenseExamplePage;
