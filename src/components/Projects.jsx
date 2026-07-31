import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Globe, Code } from 'lucide-react';

export default function Projects() {
  const { t, i18n } = useTranslation();
  return (
    <div className="glass-card delay-3">
      <div className="section-header">
        <h3 className="section-title">
          {t('sections.projects').toUpperCase()}
        </h3>
      </div>
      {Array.isArray(t('projects', { returnObjects: true })) && t('projects', { returnObjects: true }).map((project) => (
        <div key={project.id} className="topcv-row">
          <div className="topcv-date">{project.time}</div>
          <div className="topcv-content">
            <div className="timeline-title">{project.name}</div>
            <div className="timeline-subtitle">{project.role}</div>
            <div className="timeline-content">
              <ul style={{ paddingLeft: '1.25rem' }}>
                <li><strong>{i18n.language.startsWith('vi') ? 'Mô tả' : 'Description'}:</strong> {project.description}</li>
                <li><strong>{i18n.language.startsWith('vi') ? 'Vai trò' : 'Role'}:</strong> {project.responsibilities}</li>
                {project.achievements && (
                  <li><strong>{i18n.language.startsWith('vi') ? 'Thành tích' : 'Achievements'}:</strong> {project.achievements}</li>
                )}
                {project.technologies && (
                  <li><strong>{i18n.language.startsWith('vi') ? 'Công nghệ sử dụng' : 'Technologies'}:</strong> {project.technologies}</li>
                )}
                {project.projectLink && (
                  <li><strong>{i18n.language.startsWith('vi') ? 'Link dự án' : 'Project link'}:</strong> <a href={project.projectLink} target="_blank" rel="noreferrer" style={{ color: 'var(--secondary)' }}>{project.projectLink}</a></li>
                )}
                {project.sourceCode && (
                  <li><strong>Source code:</strong> <a href={project.sourceCode} target="_blank" rel="noreferrer" style={{ color: 'var(--secondary)' }}>{project.sourceCode}</a></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
