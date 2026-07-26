import React from 'react';
import { useTranslation } from 'react-i18next';
import { Activity } from 'lucide-react';

export default function Activities() {
  const { t } = useTranslation();
  return (
    <div className="glass-card delay-4">
      <div className="section-header">
        <h3 className="section-title">
          <Activity size={20} /> {t('sections.activities')}
        </h3>
      </div>
      {Array.isArray(t('activities', { returnObjects: true })) && t('activities', { returnObjects: true }).map((act) => (
        <div key={act.id} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <span className="timeline-title">{act.organization}</span>
            <span className="timeline-date">{act.time}</span>
          </div>
          <div className="timeline-subtitle">{act.role}</div>
          <div className="timeline-content">
            <ul>
              {act.details && act.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
