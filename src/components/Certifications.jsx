import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';

export default function Certifications() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          {t('sections.certifications').toUpperCase()}
        </h3>
      </div>
      {Array.isArray(t('certifications', { returnObjects: true })) && t('certifications', { returnObjects: true }).map((cert) => (
        <div key={cert.id} className="topcv-row" style={{ marginBottom: '1rem' }}>
          <div className="topcv-date">{cert.time}</div>
          <div className="topcv-content timeline-title" style={{ fontSize: '1rem' }}>{cert.name}</div>
        </div>
      ))}
    </div>
  );
}
