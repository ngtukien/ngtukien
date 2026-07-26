import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award as AwardIcon } from 'lucide-react';

export default function Awards() {
  const { t } = useTranslation();
  return (
    <div className="glass-card delay-3">
      <div className="section-header">
        <h3 className="section-title">
          <AwardIcon size={20} /> {t('sections.awards')}
        </h3>
      </div>
      {Array.isArray(t('awards', { returnObjects: true })) && t('awards', { returnObjects: true }).map((award) => (
        <div key={award.id} className="timeline-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div className="timeline-dot" style={{ top: '6px' }}></div>
          <div className="timeline-date" style={{ 
            minWidth: '85px', 
            padding: 0, 
            background: 'transparent', 
            border: 'none',
            textAlign: 'left'
          }}>
            {award.time}
          </div>
          <div className="timeline-title" style={{ flex: 1, fontSize: '1.05rem', lineHeight: '1.4' }}>
            {award.title}
          </div>
        </div>
      ))}
    </div>
  );
}
