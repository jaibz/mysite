import React from 'react';
import './App.css';

const Footer = () => (
  <footer className="footer">
    <nav className="social-links">
      <a href="https://www.truevote.in" target="_blank" rel="noopener noreferrer">TrueVote <span className="arrow">&#x2197;</span></a>
      <a href="https://www.linkedin.com/in/jai-bhaarath" target="_blank" rel="noopener noreferrer">LinkedIn <span className="arrow">&#x2197;</span></a>
      <a href="https://www.instagram.com/jaibz_" target="_blank" rel="noopener noreferrer">Instagram <span className="arrow">&#x2197;</span></a>
      <a href="https://x.com/intent/follow?screen_name=jaibz" target="_blank" rel="noopener noreferrer">Twitter <span className="arrow">&#x2197;</span></a>
    </nav>
  </footer>
);

function App() {
  return (
    <div className="app-container">
      <main className="content">
        <h1 id="my-name">Jai Bhaarath</h1>
        <a id="my-mail" href="mailto:hello@jaibhaarath.org">hello@jaibhaarath.org</a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
