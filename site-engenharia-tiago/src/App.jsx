import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      /* Header + Banner (substitua a seção <header> existente) */
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
      <a className="btn-contact" href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noreferrer">
        CONTATO
      </a>
      <button className="mobile-toggle" aria-label="Abrir menu" onClick={() => {
        const nav = document.querySelector('.main-nav');
        nav?.classList.toggle('open');
      }}>
        ☰
      </button>
    </div>
  </div>
</header>

{/* Banner / Hero abaixo do topbar */}
<section className="hero-banner" id="inicio">
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


      {/* Serviços */}
      <section className="section">
        <h2>Serviços</h2>
        <ul>
          <li>Laudos Técnicos e ART de Máquinas e Equipamentos</li>
          <li>Projetos Mecânicos Personalizados</li>
          <li>Adequação à NR-12 e Normas Técnicas</li>
          <li>Consultoria e Assessoria Técnica em Engenharia Mecânica</li>
        </ul>
      </section>

      {/* Diferenciais */}
      <section className="section">
        <h2>Por que escolher nossos serviços?</h2>
        <p>
          Atendimento em todo o Brasil, com emissão de documentos digitais,
          projetos otimizados e suporte técnico direto com o engenheiro
          responsável.
        </p>
      </section>

      {/* Imagens */}
      <section className="gallery">
        <img src="/img1.jpg" alt="Projeto mecânico" loading="lazy" />
        <img src="/img2.jpg" alt="Laudo técnico" loading="lazy" />
        <img src="/img3.jpg" alt="Equipamento industrial" loading="lazy" />
      </section>

      {/* Contato */}
      <footer className="footer">
        <h3>Contato</h3>
        <p>Email: <a href="mailto:contato@engenhariatiago.com.br">contato@engenhariatiago.com.br</a></p>
        <p>WhatsApp: (00) 00000-0000</p>
        <p>Atendimento em todo o Brasil 🇧🇷</p>
      </footer>
    </div>
  );
}
