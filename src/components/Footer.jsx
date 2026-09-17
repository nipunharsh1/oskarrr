import React from 'react';
import { ARTIST_INFO } from '../data/portfolioData';

export default function Footer({ onOpenAbout, onOpenContact }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h4>OSKAR PHOTOGRAPHY</h4>
          <p>FINE ART, EDITORIAL & DOCUMENTARY ARCHIVE</p>
          <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            STUDIO: STRANDGADE 44, 1401 KØBENHAVN K, DENMARK
          </p>
        </div>

        <div className="footer-links">
          <div>
            <div className="footer-col-title">NAVIGATION</div>
            <div className="footer-nav">
              <a href="#hero" className="footer-link">LE VOYAGE</a>
              <a href="#statement" className="footer-link">ARTIST STATEMENT</a>
              <a href="#projects" className="footer-link">MONOGRAPHS</a>
              <a href="#archive" className="footer-link">ARCHIVE REGISTRY</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">INFORMATION</div>
            <div className="footer-nav">
              <button onClick={onOpenAbout} className="footer-link" style={{ textAlign: 'left' }}>
                BIOGRAPHY & AWARDS
              </button>
              <button onClick={onOpenContact} className="footer-link" style={{ textAlign: 'left' }}>
                ACQUIRE PRINTS
              </button>
              <button onClick={onOpenContact} className="footer-link" style={{ textAlign: 'left' }}>
                COMMISSIONS
              </button>
            </div>
          </div>

          <div>
            <div className="footer-col-title">REPRESENTATION</div>
            <div className="footer-nav">
              <span className="footer-link">VANGUARD COPENHAGEN</span>
              <span className="footer-link">ATELIER NOIRE PARIS</span>
              <span className="footer-link">NEW YORK AGENCY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © 2026 OSKAR PHOTOGRAPHY. ALL RIGHTS RESERVED.
        </div>
        <div style={{ fontFamily: 'var(--font-mono)' }}>
          FINE ART & EDITORIAL PRACTICE // COPENHAGEN
        </div>
      </div>
    </footer>
  );
}
