import React, { useState } from 'react';
import { ARCHIVE_CATALOG } from '../data/portfolioData';

export default function ArchiveView({ onSelectImage }) {
  const [filter, setFilter] = useState('ALL');

  const seriesList = ['ALL', 'Le Voyage', 'Urban Movement', 'Nordic Brutalism'];

  const filteredItems = filter === 'ALL' 
    ? ARCHIVE_CATALOG 
    : ARCHIVE_CATALOG.filter(item => item.series.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="archive-section" id="archive">
      <div className="section-header">
        <div>
          <div className="section-pretitle">COMPLETE REGISTRY</div>
          <h2 className="section-title">STUDIO ARCHIVE</h2>
        </div>

        <div className="archive-filter-bar">
          <div className="archive-filter-group">
            {seriesList.map((item) => (
              <button
                key={item}
                className={`filter-btn ${filter === item ? 'active' : ''}`}
                onClick={() => setFilter(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            INDEX {filteredItems.length} OF {ARCHIVE_CATALOG.length}
          </span>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="archive-table">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left' }}>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>NO.</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>PLATE</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>TITLE / SUBJECT</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>SERIES</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>MEDIUM / PRINT</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>YEAR</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'right' }}>AVAILABILITY</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr 
                key={item.id} 
                className="archive-row"
                onClick={() => onSelectImage({
                  title: item.title,
                  url: item.image,
                  caption: `${item.series} • ${item.dimensions} • ${item.location}`,
                  year: item.year,
                  exif: `${item.medium} (${item.edition})`
                })}
              >
                <td className="col-idx">{item.index}</td>
                <td className="col-thumb">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </td>
                <td className="col-title">{item.title}</td>
                <td className="col-series">{item.series}</td>
                <td className="col-medium">{item.medium} ({item.edition})</td>
                <td className="col-year">{item.year}</td>
                <td className="col-status">
                  <span className={`status-badge ${item.status === 'Available' ? 'available' : ''}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
