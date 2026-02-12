import React, { useEffect, useRef } from "react";

const AdSenseFixed = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent multiple executions
    if (initialized.current) return;
    
    const loadAdSense = () => {
      if (window.adsbygoogle && !initialized.current) {
        try {
          window.adsbygoogle.push({});
          initialized.current = true;
          console.log("AdSense loaded successfully");
        } catch (error) {
          // Ignore "already loaded" errors
          if (!error.message?.includes("already have ads")) {
            console.warn("AdSense warning:", error.message);
          }
        }
      }
    };

    // Check if script exists
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3069979983539131";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => setTimeout(loadAdSense, 300);
      document.head.appendChild(script);
    } else {
      // Script exists, load ad
      setTimeout(loadAdSense, 100);
    }

    initialized.current = true;
    
    return () => {
      // Optional cleanup
    };
  }, []); // Empty array = run once on mount

  // Always show placeholder in development
  if (window.location.hostname === "localhost" || process.env.NODE_ENV !== "production") {
    return (
      <div style={{
        margin: "20px 0",
        padding: "25px",
        background: "#e9ecef",
        border: "2px solid #6c757d",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <h4>AdSense Ready</h4>
        <p>Publisher: ca-pub-3069979983539131</p>
        <p>Real ads will show in production</p>
      </div>
    );
  }

  return (
    <div style={{ margin: "20px 0", textAlign: "center", minHeight: "90px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3069979983539131"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseFixed;
