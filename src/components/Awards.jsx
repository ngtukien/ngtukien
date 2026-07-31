import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award as AwardIcon } from 'lucide-react';

export default function Awards() {
  const { t } = useTranslation();
  return (
    <div className="glass-card delay-3">
      <div className="section-header">
        <h3 className="section-title">
          {t('sections.awards').toUpperCase()}
        </h3>
      </div>
      {Array.isArray(t('awards', { returnObjects: true })) && t('awards', { returnObjects: true }).map((award) => (
        <div key={award.id} className="topcv-row" style={{ marginBottom: '1rem' }}>
          <div className="topcv-date">{award.time}</div>
          <div className="topcv-content timeline-title" style={{ fontSize: '1rem' }}>
            {award.title}
          </div>
        </div>
      ))}
    </div>
  );
}
