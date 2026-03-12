import { useState } from "react";
import './MainPage.css';

export default function SplitPage() {
  const [inverted, setInverted] = useState(false);

  return (
    <div className={`split-container ${inverted ? "inverted" : ""}`}>
      {/* Lado escuro */}
      <div className="panel panel-dark">
        <div className="panel-content">
          <span className="label">escuro</span>
          <p className="panel-text">
            O silêncio tem
            <br />
            uma cor.
          </p>
        </div>
      </div>

      {/* Botão central */}
      <div className="center-btn-wrapper">
        <button
          className="toggle-btn"
          onClick={() => setInverted((v) => !v)}
          aria-label="Inverter cores"
        >
          <span className="btn-icon">⇄</span>
        </button>
      </div>

      {/* Lado claro */}
      <div className="panel panel-light">
        <div className="panel-content">
          <span className="label">claro</span>
          <p className="panel-text">
            A luz também
            <br />
            faz barulho.
          </p>
        </div>
      </div>
    </div>
  );
}