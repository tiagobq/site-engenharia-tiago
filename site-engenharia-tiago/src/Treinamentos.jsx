import React from "react";

import "./treinamentos.css";

export default function Treinamentos() {
  return (
    <div className="trainings-page">
      <header className="trainings-hero">
        <div className="wrap">
          <h1>Treinamentos e Cursos</h1>
          <p className="lead">Capacitação prática e normativa para profissionais e empresas — presencial e online. Conteúdo atualizado e com foco em aplicação real.</p>
        </div>
      </header>

      <main className="wrap trainings-main">
        <p className="intro">
          Oferecemos treinamentos direcionados a técnicos, encarregados de manutenção, gestores de produção e RH. Cada curso pode ser adaptado ao seu
          contexto (indústria, clínica, manutenção predial) e entregue em formato in-company ou online ao vivo.
        </p>

        <section className="cards-grid">
          <article className="training-card">
            <h2>NR-12 — Segurança no Trabalho em Máquinas e Equipamentos</h2>
            <p className="meta">Objetivo: entendimento prático da norma e medidas de conformidade.</p>
            <ul>
              <li><strong>Conteúdo:</strong> conceitos da NR-12, avaliação de riscos, proteções, dispositivos de parada, documentação técnica e planos de ação.</li>
              <li><strong>Público:</strong> responsáveis técnicos, supervisores, equipe de manutenção.</li>
              <li><strong>Formato:</strong> 8h (intensivo) / 16h (com prática e estudos de caso).</li>
              <li><strong>Resultado:</strong> checklist de conformidade e plano de adequação.</li>
            </ul>
          </article>

          <article className="training-card">
            <h2>NR-13 — Caldeiras, Vasos de Pressão e Tubulações</h2>
            <p className="meta">Objetivo: segurança operacional e inspeção de vasos de pressão.</p>
            <ul>
              <li><strong>Conteúdo:</strong> conceitos de pressão, inspeção visual, ensaios não destrutivos (visão geral), rotina de manutenção e registros.</li>
              <li><strong>Público:</strong> técnicos de manutenção, responsáveis por operação de caldeiras e sistemas pressurizados.</li>
              <li><strong>Formato:</strong> 8–12h (teórico + estudo de casos).</li>
              <li><strong>Resultado:</strong> plano de inspeção e recomendações técnicas.</li>
            </ul>
          </article>

          <article className="training-card">
            <h2>NR-35 — Trabalho em Altura</h2>
            <p className="meta">Objetivo: práticas seguras e requisitos legais para trabalho em altura.</p>
            <ul>
              <li><strong>Conteúdo:</strong> riscos, ancoragens, EPIs, técnicas seguras, procedimentos de emergência e documentação exigida.</li>
              <li><strong>Público:</strong> técnicos que executam trabalhos em altura, encarregados e prepostos.</li>
              <li><strong>Formato:</strong> 4–8h (teoria + simulações); com opção de prática presencial supervisada.</li>
              <li><strong>Resultado:</strong> orientações para registro e treinamento interno.</li>
            </ul>
          </article>

          <article className="training-card">
            <h2>Curso de Excel — Aplicado a Engenharia</h2>
            <p className="meta">Objetivo: dominar ferramentas do Excel para análise e gestão de projetos.</p>
            <ul>
              <li><strong>Conteúdo:</strong> fórmulas e funções (proc, se, soma.se), tabelas dinâmicas, gráficos, validação de dados e automação básica (macros introdutórias).</li>
              <li><strong>Público:</strong> engenheiros, projetistas e pessoal administrativo que trabalham com planilhas técnicas.</li>
              <li><strong>Formato:</strong> 8–16h (nível básico a intermediário) com exercícios práticos aplicados a laudos e orçamentos.</li>
              <li><strong>Resultado:</strong> planilhas modelo para dimensionamento e controle de projetos.</li>
            </ul>
          </article>

          <article className="training-card">
            <h2>Curso SolidWorks — Modelagem e Detalhamento</h2>
            <p className="meta">Objetivo: criar modelos 3D e desenhos técnicos prontos para fabricação.</p>
            <ul>
              <li><strong>Conteúdo:</strong> interface, sketch, peças, montagens, simulação básica e geração de desenhos 2D para usinagem/fabricação.</li>
              <li><strong>Público:</strong> desenhistas, projetistas e engenheiros envolvidos em projeto mecânico.</li>
              <li><strong>Formato:</strong> 16–24h (prático, dividido em módulos); versões adaptadas para iniciantes ou avançado.</li>
              <li><strong>Resultado:</strong> kit de arquivos exemplo (peça + montagem + desenho 2D).</li>
            </ul>
          </article>
        </section>

        <div className="trainings-cta">
          <p>Quer planejar um treinamento para sua equipe? <strong>Entre em contato</strong> e montamos uma proposta sob medida.</p>
          <a className="btn hero-primary" href="https://wa.me/5548996281131?text=Quero%20informações%20sobre%20treinamentos">Solicitar Proposta</a>
        </div>
      </main>
    </div>
  );
}
