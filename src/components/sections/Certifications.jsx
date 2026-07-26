import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';

export default function Certifications() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          <Award size={20} /> {t('sections.certifications')}
        </h3>
      </div>
      {Array.isArray(t('certifications', { returnObjects: true })) && t('certifications', { returnObjects: true }).map((cert) => (
        <div key={cert.id} style={{ marginBottom: '1.25rem' }}>
          <div className="timeline-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
            <span className="timeline-title">{cert.name}</span>
            <span className="timeline-date" style={{ padding: 0, background: 'transparent', border: 'none' }}>{cert.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
