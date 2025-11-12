import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function onDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Fecha com Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // fecha menus (aux)
  function closeAll() {
    setServicesOpen(false);
    setMobileOpen(false);
  }

  // handler para links do nav (fecha mobile se estiver aberto)
  function onNavLinkClick() {
    if (mobileOpen) setMobileOpen(false);
    setServicesOpen(false);
  }

  return (
    <div className="app-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <a href="/" className="brand-link" onClick={closeAll}>
              <img src="/logo.png" alt="Tiago Sousa - Engenharia" className="brand-logo" />
            </a>
          </div>

          {/* NAV */}
          <nav className={`main-nav ${mobileOpen ? "open" : ""}`} aria-label="Principal">
            <ul>
              <li><a onClick={onNavLinkClick} href="#inicio" className="nav-link">Início</a></li>
              <li><a onClick={onNavLinkClick} href="#sobre" className="nav-link">Sobre</a></li>
              <li><a onClick={onNavLinkClick} href="#treinamentos" className="nav-link">Treinamentos</a></li>

              {/* Dropdown controlado */}
              <li
                className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
                ref={dropdownRef}
              >
                <button
                  className="nav-link dropdown-btn"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((s) => !s)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setServicesOpen((s) => !s);
                    }
                  }}
                >
                  Serviços ▾
                </button>

                {/* inline style garante que o menu fique escondido se servicesOpen for false */}
                <ul
                  className="dropdown-menu"
                  role="menu"
                  aria-hidden={!servicesOpen}
                  style={{ display: servicesOpen ? undefined : "none" }}
                >
                  <li><a onClick={onNavLinkClick} href="#servicos-gerais" role="menuitem">Serviços Gerais</a></li>
                  <li><a onClick={onNavLinkClick} href="#clinicas-odontologicas" role="menuitem">Clínicas Odontológicas</a></li>
                  <li><a onClick={onNavLinkClick} href="#projetos" role="menuitem">Projetos Mecânicos</a></li>
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
              onClick={() => setMobileOpen((v) => !v)}
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
            <h1>Soluções em engenharia mecânica</h1>
            <p>
              Somos um escritório de engenharia mecânica especializado em visitas técnicas,
              laudos técnicos e A.R.T. para diversos equipamentos mecânicos
            </p>
            <div className="hero-ctas">
              <a href="#contato" className="btn hero-primary" onClick={onNavLinkClick}>Saiba mais</a>
            </div>
          </div>
        </div>
      </section>

              {/* Seção Quem Somos */}
        <section id="sobre" className="section about">
          <div className="about-container">
            <div className="about-image">
              <img
                src="/quem-somos.jpg"
                alt="Engenheiro fazendo inspeção técnica"
                loading="lazy"
              />
            </div>
            <div className="about-text">
              <h3 className="section-subtitle">QUEM SOMOS</h3>
              <h2>Conheça a <span className="highlight">Next Engenharia</span></h2>
              <p>
                A empresa <strong>NEXT ENGENHARIA </strong> surgiu com a necessidade do
                mercado brasileiro em ter profissionais técnicos especializados em
                <strong> Normas Técnicas (NBR)</strong>, <strong>Normas Regulamentadoras (NR)</strong>
                e Decretos Estaduais e Municipais, que trabalhem juntamente com órgãos
                públicos como <strong>CREA, CONFEA, DETRAN e Corpo de Bombeiros</strong>.
              </p>
              <p>
                Atuamos em todo o território nacional oferecendo
                <strong> laudos técnicos, projetos mecânicos e assessoria completa</strong>
                para clínicas odontológicas, indústrias e comércios.
              </p>
            </div>
          </div>
        </section>

              {/* Bloco de ícones / serviços */}
      <section className="services-icons">
        <div className="icons-grid">
          <article className="service-card">
            <img src="/icons/projeto.png" alt="Projetos mecânicos" className="service-icon" />
            <h4>Projetos mecânicos</h4>
            <p>Adaptações à NR-12, desenhos CAD e detalhamento para fabricação.</p>
          </article>

          <article className="service-card">
            <img src="/icons/certificado.png" alt="Vistorias e laudos" className="service-icon" />
            <h4>Vistorias e laudos técnicos</h4>
            <p>Vistorias, avaliações, laudos para vigilância e segurança operacional.</p>
          </article>

          <article className="service-card">
            <img src="/icons/atendimento.png" alt="Responsabilidade técnica" className="service-icon" />
            <h4>Responsabilidade técnica</h4>
            <p>Acompanhamento técnico, emissão de ART e suporte para licitações.</p>
          </article>
        </div>
      </section>

                  {/* Seção: Nossas Especialidades */}
        <section className="especialidades-section" id="especialidades">
          <div className="especialidades-container">
            <h5 className="section-subtitle">SERVIÇOS</h5>
            <h2 className="section-title">Veja nossas especialidades</h2>

            <div className="especialidades-grid">
              <article className="especialidade-card">
                <img src="/especialidades/ar.jpg" alt="Laudo técnico para ar condicionado" />
                <p>Laudo técnico para ar condicionado</p>
              </article>

              <article className="especialidade-card">
                <img src="/especialidades/pmoc.jpg" alt="Higienização de ar condicionado" />
                <p>Laudo técnico de higienização e PMOC</p>
              </article>

              <article className="especialidade-card">
                <img src="/especialidades/nr13.jpg" alt="Laudo em NR13" />
                <p>Laudo em NR13</p>
              </article>

              <article className="especialidade-card">
                <img src="/especialidades/pesadas.jpg" alt="maquinas pesadas" />
                <p>Laudo para maquinas pesadas</p>
              </article>

              <article className="especialidade-card">
                <img src="/especialidades/monta.jpg" alt="monta" />
                <p>Laudo para monta</p>
              </article>

              <article className="especialidade-card">
                <img src="/especialidades/nr12.PNG" alt="nr12" />
                <p>Laudo nr12</p>
              </article>
            </div>
          </div>
        </section>




      {/* Conteúdo principal (exemplos de seções) */}
      <main className="container-main">
       
      </main>
      {/* ======= RODAPÉ ======= */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Next Engenharia" />
            <h3>Next <span>Engenharia</span></h3>
          </div>

          <div className="footer-info">
            <h4>ENDEREÇO</h4>
            <p>📍 Rua Jose Aldo Correa, 315<br />
            União<br />
            Cocal do Sul - SC<br />
            CEP: 88835-000</p>
          </div>

          <div className="footer-info">
            <h4>CONTATO</h4>
            <p>
            <p>WhatsApp: <a href="https://wa.me/5548996281131?text=Quero%20saber%20mais%20sobre%20os%20laudos">(48) 99628-1131</a></p>
               Email: engtiagosousa@outlook.com</p>
          </div>

          <div className="footer-info">
            <h4>MENU</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#empresa">Empresa</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#categorias">Categorias</a></li>
              
            </ul>
          </div>
        </div>

      </footer>


      <footer className="footer">
        <div>© {new Date().getFullYear()} Tiago Sousa — Next Engenharia • Soluções mecânicas</div>
        <p>Atendimento em todo o Brasil</p>
      </footer>
    </div>
  );
}


