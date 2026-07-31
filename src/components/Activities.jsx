import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Activities() {
  const { t } = useTranslation();
  return (
    <div className="glass-card delay-4">
      <div className="section-header">
        <h3 className="section-title">
          {t('sections.activities').toUpperCase()}
        </h3>
      </div>
      {Array.isArray(t('activities', { returnObjects: true })) && t('activities', { returnObjects: true }).map((act) => (
        <div key={act.id} className="topcv-row" style={{ marginBottom: '0.75rem' }}>
          <div className="topcv-date">{act.time}</div>
          <div className="topcv-content">
            <div className="timeline-title" style={{ fontSize: '1.05rem' }}>{act.organization}</div>
            <div className="timeline-subtitle" style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>{act.role}</div>
            <div className="timeline-content">
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                {act.details && act.details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: '0.15rem' }}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
