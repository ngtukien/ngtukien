import React from 'react';
import Profile from './sections/Profile';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Skills from './sections/Skills';
import SoftSkills from './sections/SoftSkills';

export default function Sidebar() {
  return (
    <aside className="sidebar delay-1">
      <Profile />
      <Education />
      <Certifications />
      <Skills />
      <SoftSkills />
    </aside>
  );
}
