import React from 'react';
import { ARTIST_INFO, SPREADS } from '../data/portfolioData';

export default function StatementSpread({ onSelectImage }) {
  const { images } = SPREADS.statementSpread;

  return (
    <section className="editorial-statement-spread" id="statement">
      {/* Artist Statement Block */}
      <div className="statement-text-container">
        <div className="statement-text-block">
          <p className="statement-paragraph">
            {ARTIST_INFO.bioHeadline} {ARTIST_INFO.bioParagraph}
          </p>
        </div>
      </div>

      {/* Tri-Photo Bottom Gallery Row (01, 02, 03) */}
      <div className="statement-photo-grid">
        {/* Photo 01: Rainy urban fence & reflection */}
        <div 
          className="photo-item clickable"
          onClick={() => onSelectImage(images[0])}
        >
          <div className="photo-frame frame-landscape">
            <img 
              src={images[0].url} 
              alt={images[0].title} 
              className="photo-img" 
              loading="lazy"
            />
          </div>
          <div className="photo-caption-bar">
            <span className="photo-idx">{images[0].number}</span>
            <span className="photo-meta-text">OSKAR, ALTERED CARBON 2026</span>
          </div>
        </div>

        {/* Photo 02: Diagonal crosswalk shadow */}
        <div 
          className="photo-item clickable"
          onClick={() => onSelectImage(images[1])}
        >
          <div className="photo-frame frame-portrait">
            <img 
              src={images[1].url} 
              alt={images[1].title} 
              className="photo-img" 
              loading="lazy"
            />
          </div>
          <div className="photo-caption-bar">
            <span className="photo-idx">{images[1].number}</span>
            <span className="photo-meta-text">{images[1].caption}</span>
          </div>
        </div>

        {/* Photo 03: Skater silhouette with long shadow */}
        <div 
          className="photo-item clickable"
          onClick={() => onSelectImage(images[2])}
        >
          <div className="photo-frame frame-tall">
            <img 
              src={images[2].url} 
              alt={images[2].title} 
              className="photo-img" 
              loading="lazy"
            />
          </div>
          <div className="photo-caption-bar">
            <span className="photo-idx">{images[2].number}</span>
            <span className="photo-meta-text">{images[2].caption}</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Location Seal */}
      <div className="spread-bottom-bar">
        <div className="copyright-mark">
          <span>©</span>
          <span className="copyright-text">
            OSKAR PHOTOGRAPHY — {ARTIST_INFO.location}
          </span>
        </div>
        <div className="copyright-text">
          EST. 2020 // ARCHIVAL SERIES
        </div>
      </div>
    </section>
  );
}
