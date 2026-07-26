import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Link, Calendar } from 'lucide-react';

export default function Profile() {
  const { t } = useTranslation();
  return (
    <div className="glass-card profile-card" style={{ padding: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="avatar-container">
          <img src="/avt.svg" alt="Avatar" className="avatar-img" />
        </div>
        <h1 className="name">{t('personalInfo.name')}</h1>
        <h2 className="title gradient-text" style={{ fontWeight: '600' }}>{t('personalInfo.title')}</h2>
      </div>
      
      <div className="contact-info">
        <a href={`tel:${t('personalInfo.phone')}`} className="contact-item">
          <Phone size={16} /> {t('personalInfo.phone')}
        </a>
        <span className="contact-item">
          <Calendar size={16} /> {t('personalInfo.dob')}
        </span>
        <a href={`mailto:${t('personalInfo.email')}`} className="contact-item">
          <Mail size={16} /> {t('personalInfo.email')}
        </a>
        <a href={`https://${t('personalInfo.github')}`} target="_blank" rel="noreferrer" className="contact-item">
          <Link size={16} /> {t('personalInfo.github')}
        </a>
        <span className="contact-item">
          <MapPin size={16} /> {t('personalInfo.address')}
        </span>
      </div>
    </div>
  );
}
