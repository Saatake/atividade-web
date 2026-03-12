import { useState } from "react";
import './MainPage.css';

export default function SplitPage() {
  const [inverted, setInverted] = useState(false);
  const [iconVisible, setIconVisible] = useState(true);
  const [showInverted, setShowInverted] = useState(false);

  function handleToggle() {
    // 1. fade out
    setIconVisible(false);

    setTimeout(() => {
      // 2. troca o emoji enquanto invisível
      setShowInverted((v) => !v);
      setInverted((v) => !v);
      // 3. fade in
      setIconVisible(true);
    }, 350);
  }

  return (
    <div className={`split-container ${inverted ? "inverted" : ""}`}>
      {/* Lado escuro */}
      <div className="panel panel-dark">
        <div className="panel-content">
          <span className={`panel-icon ${iconVisible ? "icon-visible" : "icon-hidden"}`}>
            {showInverted ? "☀️" : "🌙"}
          </span>
          <span className="label">escuro</span>
          <p className="panel-text">
            O silêncio pesa,
            <br />
            a sombra descansa.
          </p>
        </div>
      </div>

      {/* Botão central */}
      <div className="center-btn-wrapper">
        <button
          className="toggle-btn"
          onClick={handleToggle}
          aria-label="Inverter cores"
        >
          <span className="btn-icon">⇄</span>
        </button>
      </div>

      {/* Lado claro */}
      <div className="panel panel-light">
        <div className="panel-content">
          <span className={`panel-icon ${iconVisible ? "icon-visible" : "icon-hidden"}`}>
            {showInverted ? "🌙" : "☀️"}
          </span>
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