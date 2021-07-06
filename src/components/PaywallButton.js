import React from "react";

export default function PaywallButton({ url }) {
  // https://web.archive.org/web/${url}
  // https://archive.is/${url}
  return (
    <div className="favorite-wrapper">
      <a href={`https://archive.is/${url}`} target="_blank" rel="noreferrer">
        <button className="paywall">Read without Paywall</button>
      </a>
    </div>
  );
}
