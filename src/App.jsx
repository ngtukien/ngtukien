import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { availableRoles } from './i18n';

import Profile from './components/Profile';
import Education from './components/Education';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Activities from './components/Activities';

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() { 
    if (this.state.hasError) return <div style={{color: 'red', padding: '2rem'}}><h1>Something went wrong.</h1><pre>{this.state.error.toString()}</pre></div>; 
    return this.props.children; 
  }
}

function CVPage() {
  const { role, lang } = useParams();
  const { i18n } = useTranslation();

  const isValidRole = availableRoles.includes(role);
  const isValidLang = lang === 'vi' || lang === 'en';

  useEffect(() => {
    if (isValidRole && isValidLang) {
      i18n.changeLanguage(`${lang}-${role}`);
    }
  }, [lang, role, i18n, isValidRole, isValidLang]);

  if (!isValidRole || !isValidLang) {
    // If invalid, fallback to vi/student (or the first available role if student is missing)
    const fallbackRole = availableRoles.includes('student') ? 'student' : (availableRoles[0] || 'student');
    return <Navigate to={`/vi/${fallbackRole}`} replace />;
  }

  return (
    <ErrorBoundary>
      <div className="container animate-fade-in">
        <div className="cv-single-column">
          <main className="main-content delay-2">
            <Profile />
            <Education />
            <Awards />
            <Certifications />
            <Projects />
            <Activities />
          </main>
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

// Redirects a single parameter like /vi, /en, or /cloud-intern
function OneParamRedirect() {
  const { param } = useParams();
  
  if (param === 'vi' || param === 'en') {
    const fallbackRole = availableRoles.includes('student') ? 'student' : (availableRoles[0] || 'student');
    return <Navigate to={`/${param}/${fallbackRole}`} replace />;
  }
  
  if (availableRoles.includes(param)) {
    return <Navigate to={`/vi/${param}`} replace />;
  }

  const fallbackRole = availableRoles.includes('student') ? 'student' : (availableRoles[0] || 'student');
  return <Navigate to={`/vi/${fallbackRole}`} replace />;
}

function App() {
  return (
    <BrowserRouter basename="/ngtukien">
      <Routes>
        {/* Main route with lang and role */}
        <Route path="/:lang/:role" element={<CVPage />} />
        
        {/* Support old routes or direct role/lang accesses */}
        <Route path="/:param" element={<OneParamRedirect />} />
        
        {/* Default fallback */}
        <Route path="*" element={<OneParamRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
