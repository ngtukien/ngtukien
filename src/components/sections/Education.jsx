import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          <GraduationCap size={20} /> {t('sections.education')}
        </h3>
      </div>
      {Array.isArray(t('education', { returnObjects: true })) && t('education', { returnObjects: true }).map((edu) => (
        <div key={edu.id} style={{ marginBottom: '1.5rem' }}>
          <div className="timeline-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
            <span className="timeline-title">{edu.school}</span>
            <span className="timeline-date" style={{ padding: 0, background: 'transparent', border: 'none' }}>{edu.time}</span>
          </div>
          <div className="timeline-subtitle">{edu.major}</div>
          <div className="timeline-content">
            <ul style={{ paddingLeft: '1rem' }}>
              {edu.details && edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
