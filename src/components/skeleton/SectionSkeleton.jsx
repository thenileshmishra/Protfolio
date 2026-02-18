import React from "react";
import "./SectionSkeleton.css";

function SectionSkeleton({ cards = 3 }) {
  return (
    <section className="section section-skeleton" aria-hidden="true">
      <div className="container">
        <div className="skeleton-title" />
        <div className="skeleton-subtitle" />

        <div className="skeleton-grid">
          {Array.from({ length: cards }).map((_, index) => (
            <div className="skeleton-card" key={index}>
              <div className="skeleton-line skeleton-line--lg" />
              <div className="skeleton-line" />
              <div className="skeleton-line skeleton-line--sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionSkeleton;
