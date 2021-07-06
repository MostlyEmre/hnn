import React from "react";

export default function PaywallCard({ rawURL, hostName }) {
  // https://web.archive.org/web/${url}
  // https://archive.is/${url}
  return (
    <div className="paywall-card">
      <p>{hostName.toUpperCase()} is known to utilize paywalls or similar shenanigans. If you prefer to skip the BS and read the article, you can try the following 2 links.</p>
      <button>
        <a href={`https://archive.is/${rawURL}`} target="_blank" rel="noreferrer">
          Archive.is (Recommended)
        </a>
      </button>
      <button>
        <a href={`https://web.archive.org/web/${rawURL}`} target="_blank" rel="noreferrer">
          Archive.org (Doesn't work with some paywalls.)
        </a>
      </button>
    </div>
  );
}
