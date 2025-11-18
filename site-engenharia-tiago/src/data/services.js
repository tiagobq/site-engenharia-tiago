// src/data/services.js
const services = [
    {
      slug: "munck",
      title: "Laudos para caminhão Munck",
      short: "Inspeção e laudo técnico para Munck e guindastes veiculares.",
      image: "/servicos/munck.jpg",
      content: `
  <h3>O que entregamos</h3>
  <p>Inspeção técnica, relatório com não conformidades e ART do responsável técnico. Testes operacionais e checklist de segurança.</p>
  <ul>
    <li>Verificação estrutural</li>
    <li>Teste de carga e segurança</li>
    <li>Emissão de ART</li>
  </ul>
  `
    },
    {
      slug: "ar-condicionado",
      title: "Laudos e projetos para Ar Condicionado",
      short: "Dimensionamento, PMOC e projetos para instalações.",
      image: "/servicos/ar-condicionado.jpg",
      content: `
  <p>Projetos de dutos, cálculos de carga térmica, PMOC e laudos de higienização.</p>
  `
    },
    {
      slug: "contra-incendio",
      title: "Laudos e Projetos Contra Incêndio",
      short: "Laudos de risco e projetos de medidas passivas e ativas.",
      image: "/servicos/contra-incendio.jpg",
      content: "<p>Identificação de risco, projeto de hidrantes, rota de fuga e recomendações conformes a legislação local.</p>"
    },
    // ... adicione os demais serviços com slug, title, image, content
  ];
  
  export default services;
  