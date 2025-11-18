import React from "react";
import "./home.css"; // crie este arquivo conforme o CSS abaixo

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
            <img src="/quem-somos.jpg" alt="Engenheiro fazendo inspeção técnica" loading="lazy" />
          </div>

          <div className="about-text">
            <h3 className="section-subtitle">QUEM SOMOS</h3>
            <h2>Conheça a <span className="highlight">Next Engenharia</span></h2>

            <p>
              A <strong>Next Engenharia</strong> surgiu diante de um cenário regulatório complexo e, muitas vezes, ineficaz, assim a NEXT se posiciona como um parceiro estratégico. Somos especializados em garantir a conformidade de empresas às NBRs, NRs e demais decretos vigentes. Nossa equipe de profissionais experientes atua em sinergia com os principais órgãos fiscalizadores (CREA, CONFEA, DETRAN, entre outros), garantindo a autenticidade necessária para a aprovação de documentações e processos. Inovamos para simplificar a burocracia, permitindo que nossos clientes foquem no crescimento de seus negócios sem os entraves do sistema tradicional.
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
            <p>Desenhos CAD, detalhamento e lista de materiais prontos para fabricação.</p>
          </article>

          <article className="service-card">
            <img src="/icons/certificado.png" alt="Vistorias e laudos" className="service-icon" />
            <h4>Vistorias e laudos</h4>
            <p>Laudos técnicos com ART e checklists para fiscalização.</p>
          </article>

          <article className="service-card">
            <img src="/icons/atendimento.png" alt="Responsabilidade técnica" className="service-icon" />
            <h4>Responsabilidade técnica</h4>
            <p>Emissão de ART e suporte técnico para processos licitatórios e contratos.</p>
          </article>
        </div>
      </section>

      {/* ESPECIALIDADES - GRADE 3x2 (6 imagens) */}
      <section className="especialidades-section wrap" id="especialidades" aria-label="Especialidades">
        <h5 className="section-subtitle">SERVIÇOS</h5>
        <h2 className="section-title">Veja nossas especialidades</h2>

        <div className="especialidades-grid">
          <article className="especialidade-card">
            <img src="/especialidades/ar.jpg" alt="Laudo ar condicionado" loading="lazy" />
            <p>Laudo técnico para ar condicionado</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/pmoc.jpg" alt="PMOC" loading="lazy" />
            <p>Laudo de higienização e PMOC</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/nr13.jpg" alt="NR13" loading="lazy" />
            <p>Laudo NR13 (vasos de pressão)</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/pesadas.jpg" alt="Máquinas pesadas" loading="lazy" />
            <p>Laudos para máquinas pesadas</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/monta.jpg" alt="Montagem" loading="lazy" />
            <p>Laudo para montagem e montagem elétrica/mecânica</p>
          </article>

          <article className="especialidade-card">
            <img src="/especialidades/nr12.PNG" alt="NR12" loading="lazy" />
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
            <p>Rua Jose Aldo Correa, 315<br />Cocal do Sul - SC</p>
          </div>

          <div className="footer-info">
            <h4>CONTATO</h4>
            <p>WhatsApp: <a href="https://wa.me/5548996281131">(48) 99628-1131</a><br/>Email: <a href="mailto:engtiagosousa@outlook.com">engtiagosousa@outlook.com</a></p>
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
