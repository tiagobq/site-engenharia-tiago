// src/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero / Banner */}
      <section className="hero-banner" id="inicio">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Soluções em engenharia mecânica</h1>
            <p>Somos um escritório ...</p>
          </div>
        </div>
      </section>

      {/* Cole aqui o restante do conteúdo que estava no App.jsx:
          - Seção Quem Somos (id="sobre")
          - Bloco de ícones / serviços
          - Seção Especialidades (id="especialidades")
          - Conteúdo principal, seções com ids (servicos, clinicas-odontologicas, projetos)
          - Footer (se quiser footer distinto por página)
      */}

      {/* Exemplo rápido de seção "Quem Somos" */}
      <section id="sobre" className="section about">
        <div className="about-container">
          <div className="about-image">
            <img src="/quem-somos.jpg" alt="Engenheiro fazendo inspeção técnica" loading="lazy" />
          </div>
          <div className="about-text">
            <h3 className="section-subtitle">QUEM SOMOS</h3>
            <h2>Conheça a <span className="highlight">Next Engenharia</span></h2>
            <p>Texto de apresentação...</p>
          </div>
        </div>
      </section>

      {/* Footer (opcional) */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Next Engenharia" />
            <h3>Next <span>Engenharia</span></h3>
          </div>
          {/* restante do footer */}
        </div>
      </footer>
    </div>
  );
}
