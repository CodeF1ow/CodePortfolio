// Importación de React y componentes necesarios desde React
import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Inicio/Inicio";
import About from "./components/Acerca/AcercaDe";
import Projects from "./components/Proyectos/Proyectos";
import Footer from "./components/Footer";
import Resume from "./components/Resumen/ResumenNuevo";
// Importación de componentes y funciones de enrutamiento desde react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// Importación de estilos CSS
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Definición del componente funcional App
function App() {
  // Declaración del estado 'load' y la función para actualizarlo 'updateLoad' mediante useState
  const [load, updateLoad] = useState(true);

  // Efecto secundario para cambiar el estado 'load' después de 1200ms
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  // Renderizado del componente App
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Exportación del componente App como componente principal
export default App;