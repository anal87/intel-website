// src/components/SimpleAdSense.jsx
import React from "react";
import { useAdSense } from "../hooks/useAdSense";

const SimpleAdSense = ({ slot = null, format = "auto" }) => {
  // Use the custom hook to handle AdSense initialization
  const adInitialized = useAdSense(slot);

  // Development placeholder
  if (process.env.NODE_ENV !== "production") {
    return (
      <div style={{
        margin: "20px 0",
        padding: "20px",
        background: "#f8f9fa",
        border: "2px dashed #ccc",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <p>AdSense Ad Placeholder</p>
        <small>Initialized: {adInitialized ? "Yes" : "No"}</small>
      </div>
    );
  }

  // Production ad
  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3069979983539131"
        data-ad-slot={slot || ""}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default SimpleAdSense;
