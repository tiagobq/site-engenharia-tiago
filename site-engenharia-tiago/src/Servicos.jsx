import React from "react";
import "./styles/service.css";

export default function Servicos() {
  const servicos = [
    { id: 1, title: "Caminhão Munck", desc: "Inspeção, laudo técnico e ART para operação segura de Munck e guindastes veiculares." },
    { id: 2, title: "Ar Condicionado", desc: "Dimensionamento, PMOC, vistorias e projetos para instalações residenciais e comerciais." },
    { id: 3, title: "Projetos Contra Incêndio", desc: "Laudos de risco, projetos e adequações para brigada, hidrantes e planos de emergência." },
    { id: 4, title: "Elevadores", desc: "Inspeção técnica, relatórios e ARTs para elevadores, monta-cargas e hoists." },
    { id: 5, title: "Cozinhas Industriais", desc: "Vistorias, projetos de exaustão, prevenção de incêndio e adequação sanitária." },
    { id: 6, title: "Projetos de Estruturas Metálicas", desc: "Cálculo, detalhamento e laudo de integridade estrutural para estruturas metálicas." },
    { id: 7, title: "Eventos Temporários", desc: "Avaliação de estruturas temporárias (palcos, arquibancadas) e emissão de laudos." },
    { id: 8, title: "Desmanches", desc: "Emissão de ART e acompanhamento técnico para desmanches automotivos." },
    { id: 9, title: "Projetos NR 12", desc: "Adequação de máquinas, análises de risco e documentação para conformidade NR-12." },
    { id: 10, title: "Playground", desc: "Vistorias de segurança, laudos de conformidade e recomendações preventivas." },
    { id: 11, title: "Perícias Judiciais", desc: "Atuação pericial técnica, elaboração de laudos e pareceres para processos judiciais." },
    { id: 11, title: "Posto de combustível", desc: "Atuação pericial técnica, elaboração de laudos e pareceres para processos judiciais." }
  ];

  return (
    <main className="servicos-root wrap">
      <header className="servicos-hero">
        <h1>Serviços Técnicos</h1>
        <p className="lead">Soluções técnicas, laudos e projetos com emissão de ART. Atendimento nacional e suporte técnico especializado.</p>
        <div className="servicos-cta">
          <a className="btn hero-primary" href="https://wa.me/5548996281131?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20servi%C3%A7o">Solicitar Orçamento</a>
        </div>
      </header>

      <section className="servicos-grid">
        {serviços.map(s => (
          <article className="servico-card" key={s.id} role="article" aria-labelledby={`servico-${s.id}`}>
            <div className="servico-icon" aria-hidden="true">
              {/* Se quiser ícones inline, troque por SVGs inline aqui */}
              <img src={`/icons/servicos-${s.id}.svg`} alt="" />
            </div>

            <h3 id={`servico-${s.id}`}>{s.title}</h3>
            <p className="servico-desc">{s.desc}</p>
            <div className="servico-actions">
              <a className="btn-outline" href={`https://wa.me/5548996281131?text=Orçamento%20para%20${encodeURIComponent(s.title)}`} target="_blank" rel="noreferrer">Orçar</a>
              <a className="btn-ghost" href="#contato" onClick={() => window.location.href = "/#contato"}>Fale Conosco</a>
            </div>
          </article>
        ))}
      </section>

      <section className="servicos-nota">
        <p>
          <strong>Observação:</strong> todos os laudos possuem emissão de ART quando aplicável. Para projetos ou perícias, elaboramos proposta técnica com escopo e prazo após vistoria ou envio de fotos/plantas.
        </p>
      </section>
    </main>
  );
}
