import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          <Code size={20} /> {t('sections.skills')}
        </h3>
      </div>
      <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {Array.isArray(t('skills', { returnObjects: true })) && t('skills', { returnObjects: true }).map((skill, idx) => (
          <div key={idx} className="timeline-content">
            <div style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{skill.category}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skill.items && skill.items.map((item, i) => (
                <span key={i} className="tech-badge">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
