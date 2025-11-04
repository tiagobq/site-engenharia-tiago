import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Engenharia Mecânica Tiago Sousa</h1>
        <p>
          Projetos e Laudos Técnicos de Máquinas e Equipamentos Industriais
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Fale Conosco no WhatsApp
        </a>
      </header>

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
