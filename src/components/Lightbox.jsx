import React, { useEffect } from 'react';

export default function Lightbox({ image, onClose, onPrev, onNext, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-title-wrap">
          <h3>{image.title || 'Untitled Work'}</h3>
          <p>{image.caption || 'Fine Art Archival Edition'}</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {onInquire && (
            <button 
              className="lightbox-close-btn"
              onClick={() => {
                onClose();
                onInquire(image);
              }}
              style={{ background: '#FFF', color: '#000', borderColor: '#FFF' }}
            >
              ACQUIRE PRINT
            </button>
          )}
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
            CLOSE [ESC]
          </button>
        </div>
      </div>

      <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
        {onPrev && (
          <button className="lightbox-nav-btn lightbox-nav-prev" onClick={onPrev} aria-label="Previous image">
            ‹
          </button>
        )}

        <img 
          src={image.url} 
          alt={image.title} 
          className="lightbox-img" 
        />

        {onNext && (
          <button className="lightbox-nav-btn lightbox-nav-next" onClick={onNext} aria-label="Next image">
            ›
          </button>
        )}
      </div>

      <div className="lightbox-footer" onClick={(e) => e.stopPropagation()}>
        <div>
          <span>{image.year || '2026'} • COPENHAGEN ARCHIVE</span>
        </div>
        <div>
          <span>{image.exif?.camera ? `${image.exif.camera} • ${image.exif.lens} • ISO ${image.exif.iso}` : (image.exif || 'LEICA M-SYSTEM • 35MM SUMMILUX')}</span>
        </div>
      </div>
    </div>
  );
}
