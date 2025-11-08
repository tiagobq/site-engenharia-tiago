// src/App.jsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app-root">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <a href="/" className="brand-link">
              <img src="/logo.png" alt="Tiago Sousa - Engenharia" className="brand-logo" />
            </a>
          </div>

          <nav className="main-nav" aria-label="Principal">
            <ul>
              <li><a href="#inicio" className="nav-link">Início</a></li>
              <li><a href="#sobre" className="nav-link">Sobre</a></li>
              <li><a href="#clientes" className="nav-link">Nossos Clientes</a></li>
              <li className="nav-dropdown">
                <button className="nav-link dropdown-btn" aria-expanded="false">Serviços ▾</button>
                <ul className="dropdown-menu">
                  <li><a href="#servicos-gerais">Serviços Gerais</a></li>
                  <li><a href="#clinicas-odontologicas">Clínicas Odontológicas</a></li>
                  <li><a href="#projetos">Projetos Mecânicos</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="cta-area">
            <a
              className="btn-contact"
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
              target="_blank"
              rel="noreferrer"
            >
              CONTATO
            </a>

            <button
              className="mobile-toggle"
              aria-label="Abrir menu"
              onClick={() => {
                const nav = document.querySelector(".main-nav");
                nav?.classList.toggle("open");
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Banner */}
      <section className="hero-banner" id="inicio" role="region" aria-label="Banner principal">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Laudos e Projetos Mecânicos — Atendimento Nacional</h1>
            <p>Laudos técnicos, ARTs e projetos prontos para fabricação. Atendimento remoto e presencial.</p>
            <div className="hero-ctas">
              <a href="#contato" className="btn hero-primary">Solicitar Orçamento</a>
              <a href="#servicos" className="btn hero-ghost">Ver Serviços</a>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal (exemplos de seções) */}
      <main className="container-main">
        <section id="servicos" className="card section">
          <h2>Serviços</h2>
          <ul>
            <li>Laudos Técnicos e ART</li>
            <li>Projetos Mecânicos</li>
            <li>Adequação à NR-12</li>
            <li>Assessoria técnica para clínicas odontológicas</li>
          </ul>
        </section>

        <section id="clinicas-odontologicas" className="card section">
          <h2>Clínicas Odontológicas</h2>
          <p>Laudos para autoclaves, compressores e equipamentos: emissão de ART e laudo técnico.</p>
        </section>

        <section id="contato" className="card section contact">
          <h2>Contato</h2>
          <p>Email: <a href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/5511999999999">(11) 99999-9999</a></p>
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Tiago Sousa — Engenharia Mecânica • Atendimento nacional</div>
        <p>Atendimento em todo o Brasil 🇧🇷</p>
      </footer>
    </div>
  );
}
