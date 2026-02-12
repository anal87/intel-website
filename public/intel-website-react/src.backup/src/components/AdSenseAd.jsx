import React, { useEffect } from "react";

const AdSenseAd = () => {
  useEffect(() => {
    // Only run once when component mounts
    let isMounted = true;
    
    const loadAd = () => {
      if (!isMounted || !window.adsbygoogle) return;
      
      try {
        // Check if this specific ad slot is already filled
        const adElements = document.querySelectorAll('.adsbygoogle');
        const hasAds = Array.from(adElements).some(el => 
          el.innerHTML.trim() !== '' || el.getAttribute('data-adsbygoogle-status')
        );
        
        if (!hasAds) {
          window.adsbygoogle.push({});
        }
      } catch (error) {
        console.warn("AdSense load warning:", error.message);
      }
    };

    // Load script if needed
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3069979983539131";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => setTimeout(loadAd, 500);
      document.head.appendChild(script);
    } else {
      // Script already exists, try to load ad
      setTimeout(loadAd, 100);
    }

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array = run only once

  return (
    <div style={{ margin: "20px 0", textAlign: "center", minHeight: "100px" }}>
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

export default AdSenseAd;
