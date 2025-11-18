// src/pages/ServicePage.jsx
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import services from "../data/services";
import "../styles/service.css";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  React.useEffect(() => {
    document.title = `${service.title} • Engenharia Mecânica`;
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <main className="service-page wrap">
      <header
        className="service-hero"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="service-hero-overlay">
          <div className="wrap">
            <h1>{service.title}</h1>
            <p className="service-sub">{service.short}</p>

            <a
              className="btn hero-primary"
              href={`https://wa.me/5548996281131?text=${encodeURIComponent(
                "Solicito orçamento: " + service.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </header>

      <article
        className="service-content wrap"
        dangerouslySetInnerHTML={{ __html: service.content }}
      />

      <aside className="service-aside wrap">
        <h3>Precisa de ajuda?</h3>
        <p>Entre em contato e retornaremos rapidamente.</p>

        <a
          className="btn-outline"
          href={`https://wa.me/5548996281131?text=${encodeURIComponent(
            "Informações sobre: " + service.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale no WhatsApp
        </a>
      </aside>
    </main>
  );
}
