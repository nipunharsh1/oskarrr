import React, { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose, selectedPrint }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: selectedPrint ? `Print Acquisition: ${selectedPrint.title}` : 'General Inquiry / Editorial Assignment',
    message: selectedPrint 
      ? `Hello Oskar,\n\nI am interested in acquiring an archival edition of "${selectedPrint.title}". Please send availability, sizing, and pricing details.`
      : ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPrint) {
      setFormData(prev => ({
        ...prev,
        subject: `Print Acquisition: ${selectedPrint.title}`,
        message: `Hello Oskar,\n\nI am interested in acquiring an archival edition of "${selectedPrint.title}". Please send availability, sizing, and pricing details.`
      }));
    }
  }, [selectedPrint]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2 className="drawer-title">INQUIRE & BOOK</h2>
          <button className="theme-toggle-btn" onClick={onClose} aria-label="Close modal">
            CLOSE ✕
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '12px' }}>
              INQUIRY RECEIVED
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '32px' }}>
              Thank you for reaching out. The studio or gallery representation will respond within 24–48 hours.
            </p>
            <button 
              className="submit-btn" 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              RETURN TO PORTFOLIO
            </button>
          </div>
        ) : (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              For editorial commissions, commercial campaigns, museum loans, or fine-art archival print inquiries:
            </p>

            <div className="form-group">
              <label className="form-label">YOUR FULL NAME</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Maja Nielsen"
                className="form-input"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">EMAIL ADDRESS</label>
              <input 
                type="email" 
                required 
                placeholder="name@organization.com"
                className="form-input"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">INQUIRY TYPE / SUBJECT</label>
              <input 
                type="text" 
                required 
                className="form-input"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">MESSAGE / PROJECT DETAILS</label>
              <textarea 
                rows="5"
                required 
                placeholder="Please include timeline, project scope or print dimensions..."
                className="form-textarea"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="submit-btn">
              TRANSMIT INQUIRY
            </button>

            <div style={{ 
              marginTop: '20px', 
              paddingTop: '20px', 
              borderTop: '1px solid var(--border-light)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}>
              Direct Studio Desk: studio@oskarphotography.dk<br />
              Copenhagen, Denmark • Available for international commissions
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
