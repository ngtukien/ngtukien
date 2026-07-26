import React from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal } from 'lucide-react';

export default function Objective() {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <div className="section-header">
        <h3 className="section-title">
          <Terminal size={20} /> {t('sections.objective')}
        </h3>
      </div>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
        {t('objective')}
      </p>
    </div>
  );
}
