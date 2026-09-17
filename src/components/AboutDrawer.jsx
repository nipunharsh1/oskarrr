import React, { useEffect } from 'react';
import { ARTIST_INFO } from '../data/portfolioData';

export default function AboutDrawer({ isOpen, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2 className="drawer-title">ABOUT OSKAR</h2>
          <button className="theme-toggle-btn" onClick={onClose} aria-label="Close drawer">
            CLOSE ✕
          </button>
        </div>

        {/* Biography Section */}
        <div className="drawer-section">
          <div className="drawer-section-title">BIOGRAPHY & PRACTICE</div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {ARTIST_INFO.bioHeadline}
          </p>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {ARTIST_INFO.bioParagraph}
          </p>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            {ARTIST_INFO.statementExtended}
          </p>
        </div>

        {/* Selected Exhibitions */}
        <div className="drawer-section">
          <div className="drawer-section-title">SELECTED EXHIBITIONS</div>
          <div className="exhibition-list">
            {ARTIST_INFO.exhibitions.map((ex, i) => (
              <div key={i} className="exhibition-item">
                <span className="exhibition-year">{ex.year}</span>
                <div>
                  <div className="exhibition-title">{ex.title}</div>
                  <div className="exhibition-gallery">{ex.gallery} ({ex.type})</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div className="drawer-section">
          <div className="drawer-section-title">AWARDS & RECOGNITION</div>
          <div className="exhibition-list">
            {ARTIST_INFO.awards.map((aw, i) => (
              <div key={i} className="exhibition-item">
                <span className="exhibition-year">{aw.year}</span>
                <div>
                  <div className="exhibition-title">{aw.honor}</div>
                  <div className="exhibition-gallery">{aw.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Representation */}
        <div className="drawer-section">
          <div className="drawer-section-title">GALLERY REPRESENTATION</div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            <strong>Nordics:</strong> {ARTIST_INFO.representation.scandinavia}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <strong>Europe & USA:</strong> {ARTIST_INFO.representation.international}
          </p>
        </div>

        <button 
          className="submit-btn"
          onClick={() => {
            onClose();
            onOpenContact();
          }}
          style={{ width: '100%', marginTop: 'auto' }}
        >
          CONTACT STUDIO / INQUIRE PRINTS
        </button>
      </div>
    </div>
  );
}
