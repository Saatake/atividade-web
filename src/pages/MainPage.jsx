import { useState } from "react";
import './MainPage.css';

// icones svg para sol e lua
const SunIcon = () => (
  <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
  </svg>
);

const MoonIcon = () => (
  <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default function SplitPage() {
  const [inverted, setInverted] = useState(false);

  function handleToggle() {
    setInverted((v) => !v);
  }

  return (
    <div className={`split-container ${inverted ? "inverted" : ""}`}>
      
      {/* lado escuro */}
      <div className="panel panel-dark">
        <div className="panel-content">
          <div className="icon-wrapper">
            <div className="icon-moon"><MoonIcon /></div>
            <div className="icon-sun"><SunIcon /></div>
          </div>
          <span className="label">escuro</span>
          <p className="panel-text">
            O silêncio pesa,
            <br />
            a sombra descansa.
          </p>
        </div>
      </div>

      {/* botão central */}
      <div className="center-btn-wrapper">
        <button
          className="toggle-btn"
          onClick={handleToggle}
          aria-label="Inverter cores"
        >
          <span className="btn-icon">⇄</span>
        </button>
      </div>

      {/* lado claro */}
      <div className="panel panel-light">
        <div className="panel-content">
          <div className="icon-wrapper">
            <div className="icon-sun"><SunIcon /></div>
            <div className="icon-moon"><MoonIcon /></div>
          </div>
          <span className="label">claro</span>
          <p className="panel-text">
            A luz se derrama,
            <br />
            o mundo desperta.
          </p>
        </div>
      </div>
      
    </div>
  );
}