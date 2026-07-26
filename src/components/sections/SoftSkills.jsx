import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function SoftSkills() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          <CheckCircle2 size={20} /> {t('sections.softSkills')}
        </h3>
      </div>
      <div className="tags-container" style={{ gap: '0.75rem', flexDirection: 'column' }}>
        {Array.isArray(t('softSkills', { returnObjects: true })) && t('softSkills', { returnObjects: true }).map((skill, idx) => (
          <div key={idx} className="timeline-content" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
            <ChevronRight size={16} color="var(--primary)" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
