import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProyectosCard";
import Particle from "../Particle";
import bot from "../../Assets/Projects/bot.png";
import kcadmin from "../../Assets/Projects/kcadmin.png";
import soundporfolio from "../../Assets/Projects/soundporfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soundporfolio}
              isBlog={false}
              title="Portfolio daisyUI"
              description="Un portafolio personal moderno y responsivo construido con Astro, Tailwind CSS y daisyUI. Este proyecto muestra mis habilidades, proyectos y experiencia profesional a través de una interfaz limpia y atractiva."
              ghLink="https://github.com/CodeF1ow/Nuevo-Portfolio"
              demoLink="https://kiri86.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kcadmin}
              isBlog={false}
              title="kc_admin V2"
              description="Un avanzado panel de administración para servidores FiveM, construido con Lua y JS. Este panel proporciona una interfaz intuitiva y funcional para gestionar y administrar los servidores, incluyendo características unicas"
              ghLink="https://github.com/CodeF1ow/kc_adminV2"
              // demoLink="https://github.com/CodeF1ow/kc_adminV2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="Bot de Discord Multipropósito"
              description="Un bot versátil para Discord que ofrece una amplia gama de funciones y utilidades para mejorar la experiencia de los usuarios en los servidores. Desde la gestión de roles y moderación hasta la reproducción de música, integraciones con servicios externos y divertidos comandos de entretenimiento."
              ghLink="https://github.com/CodeF1ow/Arctic-Multipurpose-Bot"
              // demoLink="https://github.com/CodeF1ow/Arctic-Multipurpose-Bot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
