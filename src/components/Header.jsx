import React from 'react';
import { ARTIST_INFO } from '../data/portfolioData';

export default function Header({ 
  currentSection, 
  onNavigate, 
  onOpenAbout, 
  onOpenContact, 
  theme, 
  toggleTheme 
}) {
  return (
    <header className="site-header scrolled">
      <div className="brand-logo" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
        <span>{ARTIST_INFO.brand}</span>
        <span className="brand-dot"></span>
      </div>

      <nav className="nav-group" aria-label="Main Navigation">
        <button 
          className={`nav-link ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => onNavigate('projects')}
        >
          PROJECTS
        </button>
        <button 
          className={`nav-link ${currentSection === 'archive' ? 'active' : ''}`}
          onClick={() => onNavigate('archive')}
        >
          ARCHIVE
        </button>
        <button 
          className="nav-link"
          onClick={onOpenAbout}
        >
          INFO
        </button>
        <button 
          className="nav-link"
          onClick={onOpenContact}
        >
          CONTACT
        </button>

        <button 
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Switch Light / Dark"
        >
          {theme === 'light' ? 'DARK' : 'LIGHT'}
        </button>

        {/* Minimalist 2-line hamburger icon matching reference */}
        <button 
          className="menu-btn" 
          onClick={onOpenAbout} 
          aria-label="Open Menu & Bio"
          title="Artist Biography & Exhibitions"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </nav>
    </header>
  );
}
