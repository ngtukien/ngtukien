import React from 'react';
import Objective from './sections/Objective';
import Awards from './sections/Awards';
import Projects from './sections/Projects';
import Activities from './sections/Activities';

export default function MainContent() {
  return (
    <main className="main-content delay-2">
      <Objective />
      <Awards />
      <Projects />
      <Activities />
    </main>
  );
}
