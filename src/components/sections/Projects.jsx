import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Globe, Code } from 'lucide-react';

export default function Projects() {
  const { t, i18n } = useTranslation();
  return (
    <div className="glass-card delay-3">
      <div className="section-header">
        <h3 className="section-title">
          <Briefcase size={20} /> {t('sections.projects')}
        </h3>
      </div>
      {Array.isArray(t('projects', { returnObjects: true })) && t('projects', { returnObjects: true }).map((project) => (
        <div key={project.id} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <span className="timeline-title">{project.name}</span>
            <span className="timeline-date">{project.time}</span>
          </div>
          <div className="timeline-subtitle">{project.role}</div>
          <div className="timeline-content">
            <p><strong>{i18n.language === 'vi' ? 'Mô tả' : 'Description'}:</strong> {project.description}</p>
            <p><strong>{i18n.language === 'vi' ? 'Vai trò' : 'Role'}:</strong> {project.responsibilities}</p>
            {project.achievements && (
              <p><strong>{i18n.language === 'vi' ? 'Thành tích' : 'Achievements'}:</strong> {project.achievements}</p>
            )}
            {project.technologies && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-main)' }}>Tech:</strong> 
                {project.technologies.split(',').map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech.trim()}</span>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
              {project.projectLink && (
                <a href={project.projectLink} target="_blank" rel="noreferrer" className="tech-link" style={{ marginTop: '0.5rem' }}>
                  <Globe size={14} /> {i18n.language === 'vi' ? 'Live Project' : 'Live Project'}
                </a>
              )}
              {project.sourceCode && (
                <a href={project.sourceCode} target="_blank" rel="noreferrer" className="tech-link" style={{ marginTop: '0.5rem' }}>
                  <Code size={14} /> {i18n.language === 'vi' ? 'Mã nguồn' : 'Source Code'}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
