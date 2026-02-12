import React from "react";
import AdSenseAd from "../components/AdSenseAd";

const TechBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to AdSense with React",
      date: "February 11, 2024",
      category: "AdSense",
      readTime: "8 min read",
      excerpt: "Step-by-step guide to integrating Google AdSense with React applications. Learn best practices for maximum revenue.",
      content: [
        "Why React needs special handling for AdSense",
        "Setting up AdSense meta tags in React",
        "Creating reusable AdSense components",
        "Avoiding common React AdSense errors",
        "Optimizing ad placements for better revenue"
      ]
    },
    {
      id: 2,
      title: "Firebase Hosting for React: Complete Setup",
      date: "February 10, 2024",
      category: "Firebase",
      readTime: "6 min read",
      excerpt: "Deploy your React app to Firebase Hosting with custom domain, SSL, and CDN.",
      content: [
        "Setting up Firebase project",
        "Configuring firebase.json for React",
        "Custom domain setup",
        "Automatic SSL certificates",
        "Performance optimization tips"
      ]
    },
    {
      id: 3,
      title: "Building a Portfolio Website That Earns",
      date: "February 9, 2024",
      category: "Portfolio",
      readTime: "10 min read",
      excerpt: "How I built this website with React, Firebase, and AdSense to showcase skills and generate income.",
      content: [
        "Planning your portfolio structure",
        "React component architecture",
        "Integrating AdSense without compromising design",
        "SEO optimization for developers",
        "Tracking performance with analytics"
      ]
    },
    {
      id: 4,
      title: "React Performance Optimization Tips",
      date: "February 8, 2024",
      category: "React",
      readTime: "7 min read",
      excerpt: "Essential performance tips for React applications to improve loading speed and user experience.",
      content: [
        "Code splitting with React.lazy()",
        "Memoization with useMemo and useCallback",
        "Virtualization for large lists",
        "Bundle size optimization",
        "Lighthouse score improvements"
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>?? Tech Blog & Tutorials</h1>
        <p>Practical guides on React, Firebase, AdSense, and web development</p>
        <div style={styles.stats}>
          <span style={styles.stat}><strong>Publisher ID:</strong> ca-pub-3069979983539131</span>
          <span style={styles.stat}><strong>Topics:</strong> React, AdSense, Firebase</span>
          <span style={styles.stat}><strong>Updated:</strong> Weekly</span>
        </div>
      </header>

      <AdSenseAd />

      <div style={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} style={styles.blogCard}>
            <div style={styles.cardHeader}>
              <span style={styles.category}>{post.category}</span>
              <span style={styles.date}>{post.date}</span>
            </div>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <p style={styles.excerpt}>{post.excerpt}</p>
            <div style={styles.contentPreview}>
              <h4>What you'll learn:</h4>
              <ul>
                {post.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={styles.cardFooter}>
              <span style={styles.readTime}>{post.readTime}</span>
              <button style={styles.readButton}>Read Full Article</button>
            </div>
          </article>
        ))}
      </div>

      <AdSenseAd />

      <section style={styles.newsletter}>
        <h2>?? Get Tech Updates</h2>
        <p>Subscribe for weekly React, AdSense, and Firebase tutorials</p>
        <div style={styles.subscribeForm}>
          <input type="email" placeholder="Your email address" style={styles.emailInput} />
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>
        <p style={styles.privacyNote}>No spam. Unsubscribe anytime. AdSense tips included.</p>
      </section>

      <AdSenseAd />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
    minHeight: "100vh"
  },
  header: {
    textAlign: "center",
    padding: "3rem 1rem",
    background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    color: "white",
    borderRadius: "15px",
    marginBottom: "2rem"
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "1rem",
    flexWrap: "wrap"
  },
  stat: {
    background: "rgba(255,255,255,0.1)",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    fontSize: "0.9rem"
  },
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    margin: "3rem 0"
  },
  blogCard: {
    background: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "transform 0.3s, box-shadow 0.3s",
    border: "1px solid #e9ecef",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
    }
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    alignItems: "center"
  },
  category: {
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "0.3rem 0.8rem",
    borderRadius: "15px",
    fontSize: "0.8rem",
    fontWeight: "bold"
  },
  date: {
    color: "#666",
    fontSize: "0.85rem"
  },
  postTitle: {
    margin: "0 0 1rem 0",
    color: "#2c3e50",
    fontSize: "1.5rem",
    lineHeight: "1.3"
  },
  excerpt: {
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    flexGrow: 1
  },
  contentPreview: {
    background: "#f8f9fa",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1.5rem"
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: "1rem",
    borderTop: "1px solid #eee"
  },
  readTime: {
    color: "#666",
    fontSize: "0.85rem"
  },
  readButton: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s",
    "&:hover": {
      background: "#2980b9"
    }
  },
  newsletter: {
    textAlign: "center",
    padding: "3rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    borderRadius: "15px",
    margin: "3rem 0"
  },
  subscribeForm: {
    display: "flex",
    maxWidth: "500px",
    margin: "2rem auto",
    gap: "0.5rem"
  },
  emailInput: {
    flex: 1,
    padding: "1rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem"
  },
  subscribeButton: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": {
      background: "#27ae60"
    }
  },
  privacyNote: {
    fontSize: "0.85rem",
    opacity: 0.8,
    marginTop: "1rem"
  }
};

export default TechBlog;
