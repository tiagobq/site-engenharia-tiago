import React from "react";
import "./home.css"; 
import banner from "../assets/banner.webp"

<img src={banner} alt="Next Engenharia Mecânica" />

export default function Home() {
  return (
    <main className="home-root">
      {/* HERO / BANNER */}
      <section className="hero-banner" id="inicio" role="region" aria-label="Banner principal">
        <div className="hero-overlay">
          <div className="hero-content wrap">
            <h1>Soluções em Engenharia Mecânica</h1>
            <p className="lead">
              Laudos técnicos, projetos mecânicos e treinamentos — atendimento nacional com documentação pronta para fiscalização.
            </p>
            <div className="hero-ctas">
              <a href="/#contato" className="btn hero-primary">Solicitar Orçamento</a>
              <a href="/treinamentos" className="btn hero-ghost">Treinamentos</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="section about">
        <div className="about-container wrap">
          <div className="about-image">
            <img src="/quem-somos.webp" alt="Engenheiro fazendo inspeção técnica" loading="lazy" />
          </div>

          <div className="about-text">
            <h3 className="section-subtitle">QUEM SOMOS</h3>
            <h2>Conheça a <span className="highlight">Next Engenharia</span></h2>

            <p>
            <section>
 

  <p>
    A <strong>Next Engenharia</strong> nasceu para facilitar a vida das empresas diante de tantas normas, exigências e fiscalizações.
    Somos especialistas em deixar sua empresa <strong>100% regularizada</strong> de acordo com as NBRs, NRs e demais leis vigentes.
  </p>

  <p>
    Atuamos de forma integrada com órgãos como <strong>CREA, CONFEA e DETRAN</strong>, garantindo que sua documentação seja aprovada sem dores de cabeça.
  </p>

  <p>
    Nosso objetivo é <strong>reduzir burocracia</strong>, evitar multas e agilizar processos, para que você possa focar no que realmente importa:
    <em>crescer o seu negócio com segurança e tranquilidade.</em>
  </p>

  <p>
    <strong>Quer saber como regularizar sua empresa rapidamente?</strong> Entre em contato e agende uma avaliação técnica.
  </p>
</section>

            </p>
          </div>
        </div>
      </section>

      {/* ÍCONES / SERVIÇOS RÁPIDOS (3 cards) */}
      <section className="services-icons wrap">
        <div className="icons-grid">
          <article className="service-card">
            <img src="/icons/projeto.png" alt="Projetos mecânicos" className="service-icon" />
            <h4>Projetos mecânicos</h4>
            <p>Desenhos CAD, detalhamento e lista de materiais prontos para fabricação</p>
          </article>

          <article className="service-card">
            <img src="/icons/certificado.png" alt="Vistorias e laudos" className="service-icon" />
            <h4>Vistorias e laudos</h4>
            <p>Laudos técnicos com ART e checklists para fiscalização</p>
          </article>

          <article className="service-card">
            <img src="/icons/atendimento.png" alt="Responsabilidade técnica" className="service-icon" />
            <h4>Responsabilidade técnica</h4>
            <p>Emissão de ART e suporte técnico para processos licitatórios e contratos</p>
          </article>
        </div>
      </section>

      {/* ESPECIALIDADES - GRADE 3x2 (6 imagens) */}
      <section className="especialidades-section wrap" id="especialidades" aria-label="Especialidades">
        <h5 className="section-subtitle">SERVIÇOS</h5>
        <h2 className="section-title">Veja nossas especialidades</h2>

        <div className="especialidades-grid">
          <article className="especialidade-card">
            <img src="/especialidades/ar.webp" alt="Laudo técnico para ar condicionado" loading="lazy" />
            <p>Laudo técnico para ar condicionado</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/pmoc.webp" alt="PMOC" loading="lazy" />
            <p>Laudo técnico de higienização e PMOC</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/nr13.webp" alt="NR13" loading="lazy" />
            <p>Laudo técnico NR13 (vasos de pressão)</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/pesadas.webp" alt="Máquinas pesadas" loading="lazy" />
            <p>Laudos técnico para máquinas pesadas</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/monta.webp" alt="Montagem" loading="lazy" />
            <p>Laudo de reponsabilidade técnica para desmanches</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/nr12.webp" alt="NR12" loading="lazy" />
            <p>Laudo NR12 e adequação de máquinas</p>
          </article>
        </div>
      </section>

      {/* CONTATO RÁPIDO */}
      <section id="contato" className="section contact wrap">
        <div className="contact-card">
          <h3>Fale conosco</h3>
          <p>Solicite orçamento, tire dúvidas técnicas ou agende uma vistoria.</p>
          <p className="contact-line">WhatsApp: <a href="https://wa.me/5548996281131">(48) 99628-1131</a></p>
          <p className="contact-line">Email: <a href="mailto:engtiagosousa@outlook.com">engtiagosousa@outlook.com</a></p>
          <a className="btn hero-primary" href="https://wa.me/5548996281131?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento">Solicitar Orçamento</a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="footer wrap-footer">
        <div className="footer-content wrap">
          <div className="footer-logo">
            <img src="/logo.png" alt="Next Engenharia" />
            <h3>Next <span>Engenharia</span></h3>
          </div>

          <div className="footer-info">
            <h4>ENDEREÇO</h4>
            <p>Avenida Aeroporto, 410<br />Capelinha - MG</p>
          </div>

          <div className="footer-info">
            <h4>CONTATO</h4>
            <p>WhatsApp: <a href="https://wa.me/5548996281131">(48) 99628-1131</a><br/>
            Email: <a href="mailto:engtiagosousa@outlook.com">engtiagosousa@outlook.com</a></p>
          </div>

          <div className="footer-info">
            <h4>MENU</h4>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/#sobre">Quem Somos</a></li>
              <li><a href="/treinamentos">Treinamentos</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tiago Sousa — Next Engenharia • Atendimento nacional</p>
        </div>
      </footer>
    </main>
  );
}
