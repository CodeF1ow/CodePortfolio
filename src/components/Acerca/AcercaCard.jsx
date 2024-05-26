import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">CodeFlow </span>
            de <span className="purple">Madrid, España.</span>
            <br />
            Actualmente, trabajo de forma independiente ofreciendo servicios de
            desarrollo web a clientes de diferentes industrias.
            <br />
            ¡Aparte de programar, hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Escribir blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ¡Me esfuerzo por programar cosas que marquen la diferencia!{" "}
          </p>
          <footer className="blockquote-footer">CodeFlow</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
