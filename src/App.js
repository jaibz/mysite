import React, { memo } from 'react';
import './App.css';

const Footer = memo(() => (
  <nav className="social-links">
    <a href="https://x.com/intent/follow?screen_name=jaibz" target="_blank" rel="noopener noreferrer">
      Twitter<span className="arrow">&#x2197;</span>
    </a>
    <a href="https://www.truevote.in" target="_blank" rel="noopener noreferrer">
      TrueVote<span className="arrow">&#x2197;</span>
    </a>
  </nav>
));

Footer.displayName = 'Footer';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <div className="header">
          <h1>Jai Bhaarath</h1>
          <a href="mailto:hello@jaibhaarath.org" className="email">hello@jaibhaarath.org</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
