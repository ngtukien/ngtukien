import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          {t('sections.education').toUpperCase()}
        </h3>
      </div>
      {Array.isArray(t('education', { returnObjects: true })) && t('education', { returnObjects: true }).map((edu) => (
        <div key={edu.id} className="topcv-row">
          <div className="topcv-date">{edu.time}</div>
          <div className="topcv-content">
            <div className="timeline-title">{edu.school}</div>
            <div className="timeline-subtitle">{edu.major}</div>
            <div className="timeline-content">
              <ul style={{ paddingLeft: '1.25rem' }}>
                {edu.details && edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
