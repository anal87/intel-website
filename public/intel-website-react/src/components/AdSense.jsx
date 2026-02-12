import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3069979983539131";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
    
    // Initialize auto ads
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div style={{ margin: "20px 0", textAlign: "center", minHeight: "100px" }}>
      {/* Auto ads will be placed here automatically by Google */}
      <p style={{ color: "#666", fontSize: "0.9rem", padding: "20px" }}>
        Google AdSense ads will appear here automatically once approved.
      </p>
      {/* Auto ads container - Google will fill this */}
      <div className="adsbygoogle-auto-placeholder"></div>
    </div>
  );
};

export default AdSense;
