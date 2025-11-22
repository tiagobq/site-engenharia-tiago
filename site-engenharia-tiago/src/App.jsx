// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Treinamentos from "./Treinamentos";
import "./styles.css";
import ServicePage from "./pages/ServicePage";


export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

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

  function closeAll() {
    setServicesOpen(false);
    setMobileOpen(false);
  }

  return (
    <BrowserRouter>
      <div className="app-root">
        {/* ---------- Topbar (menu compartilhado) ---------- */}
        <header className="topbar">
          <div className="topbar-inner">
            <div className="brand">
              <Link to="/" className="brand-link" onClick={closeAll}>
                <img src="/logo.png" alt="Tiago Sousa - Engenharia" className="brand-logo" />
              </Link>
            </div>

            <nav className={`main-nav ${mobileOpen ? "open" : ""}`} aria-label="Principal">
              <ul>
                <li><Link to="/" className="nav-link" onClick={closeAll}>Início</Link></li>
                <li><a href="/#sobre" className="nav-link" onClick={closeAll}>Sobre</a></li> {/* âncora para a seção na Home */}
                <li><Link to="/treinamentos" className="nav-link" onClick={closeAll}>Treinamentos</Link></li>

                <li className={`nav-dropdown ${servicesOpen ? "open" : ""}`} ref={dropdownRef}>
                  <button
                    className="nav-link dropdown-btn"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen(s => !s)}
                  >
                    Serviços ▾
                  </button>

                <ul className="dropdown-menu" role="menu" aria-hidden={!servicesOpen} style={{ display: servicesOpen ? undefined : "none" }}>
                <li><Link to="/servicos/munck" onClick={closeAll}>Caminhão Munck</Link></li>
                <li><Link to="/servicos/ar" onClick={closeAll}>Ar Condicionado</Link></li>
                <li><Link to="/servicos/extintor" onClick={closeAll}>Projetos Contra Incêndio</Link></li>
                <li><Link to="/servicos/elevador" onClick={closeAll}>Elevadores</Link></li>
                <li><Link to="/servicos/cozinha" onClick={closeAll}>Cozinhas Industriais</Link></li>
                <li><Link to="/servicos/estrutura" onClick={closeAll}>Projetos de Estruturas Metálicas</Link></li>
                
                <li><Link to="/servicos/desmanche" onClick={closeAll}>Desmanches</Link></li>
                <li><Link to="/servicos/nr12" onClick={closeAll}>Projetos NR 12</Link></li>
                <li><Link to="/servicos/playground" onClick={closeAll}>Playground</Link></li>
                <li><Link to="/servicos/pericia" onClick={closeAll}>Perícias Judiciais</Link></li>
                <li><Link to="/servicos/postos" onClick={closeAll}>Postos de combustível</Link></li>
              </ul>
              </li>
              </ul>
            </nav>

            <div className="cta-area">
              <a className="btn-contact" href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">CONTATO</a>
              <button className="mobile-toggle" aria-label="Abrir menu" onClick={() => setMobileOpen(v => !v)}>☰</button>
            </div>
          </div>
        </header>

        {/* ---------- Rotas ---------- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treinamentos" element={<Treinamentos />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
        </Routes>

        {/* footer compartilhado — se quiser o footer dentro do Home, remova daqui */}
        {/* você pode manter o footer em Home.jsx se preferir */}
      </div>
    </BrowserRouter>
  );
}
