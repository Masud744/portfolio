import React from 'react';

export default function Footer({ theme }) {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made with ❤️ by <a href="https://github.com/Masud744" target="_blank" rel="noopener noreferrer">Shahriar Alom Masud</a>
      </p>
      <p className="footer-theme">
        Theme: {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </p>
    </footer>
  );
}
