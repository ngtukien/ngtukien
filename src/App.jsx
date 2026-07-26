import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() { 
    if (this.state.hasError) return <div style={{color: 'red', padding: '2rem'}}><h1>Something went wrong.</h1><pre>{this.state.error.toString()}</pre></div>; 
    return this.props.children; 
  }
}

function CVPage() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang === 'vi' || lang === 'en') {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <ErrorBoundary>
      <div className="container animate-fade-in">
        <div className="cv-grid">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      {/* Animated Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<CVPage />} />
        <Route path="*" element={<Navigate to="/vi" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
