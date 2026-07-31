import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t, i18n } = useTranslation();
  return (
    <div className="glass-card profile-section" style={{ display: 'flex', gap: '1.5rem', alignItems: 'stretch' }}>
      <div className="avatar-wrapper" style={{ width: '120px', flexShrink: 0, overflow: 'hidden', display: 'flex', borderRadius: '4px' }}>
        <img src={`${import.meta.env.BASE_URL}ITIS.jpg`} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.35)', transformOrigin: 'center 15%' }} />
      </div>
      
      <div className="info-container" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h1 className="name" style={{ fontSize: '2.3rem', marginBottom: '0.4rem', marginTop: 0, lineHeight: 1.2 }}>{t('personalInfo.name')}</h1>
          <h2 className="title" style={{ fontWeight: '500', color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{i18n.language.startsWith('vi') ? 'Sinh viên' : 'Student'}</h2>
        </div>
        
        <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
          <span className="contact-item">
            <strong style={{ color: 'var(--text-main)', minWidth: '120px' }}>{i18n.language.startsWith('vi') ? 'Ngày sinh:' : 'Date of Birth:'}</strong> {t('personalInfo.dob')}
          </span>
          <a href={`tel:${t('personalInfo.phone')}`} className="contact-item">
            <strong style={{ color: 'var(--text-main)', minWidth: '120px' }}>{i18n.language.startsWith('vi') ? 'Số điện thoại:' : 'Phone:'}</strong> {t('personalInfo.phone')}
          </a>
          <a href={`mailto:${t('personalInfo.email')}`} className="contact-item">
            <strong style={{ color: 'var(--text-main)', minWidth: '120px' }}>Email:</strong> {t('personalInfo.email')}
          </a>
          <a href={`https://${t('personalInfo.github')}`} target="_blank" rel="noreferrer" className="contact-item">
            <strong style={{ color: 'var(--text-main)', minWidth: '120px' }}>Github:</strong> {t('personalInfo.github')}
          </a>
          <span className="contact-item">
            <strong style={{ color: 'var(--text-main)', minWidth: '120px' }}>{i18n.language.startsWith('vi') ? 'Địa chỉ:' : 'Address:'}</strong> {t('personalInfo.address')}
          </span>
        </div>
      </div>
    </div>
  );
}
