import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DÉJAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y al menos he aprendido algo,
              creo... 🤷‍♂️
              <br />
              <br />
              Domino lenguajes clásicos como
              <i>
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es construir nuevas&nbsp;
              <i>
                <b className="purple">Tecnologías - Productos Web </b> y también
                en áreas relacionadas con{" "}
                <b className="purple">Servidores Gaming.</b>
              </i>
              <br />
              <br />
              Siempre que sea posible, también aplico mi pasión por desarrollar
              productos con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas y Frameworks de Javascript Modernos
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> Astro, React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              No dudes en <span className="purple">conectarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CodeF1ow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/CodeF1ow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/CodeF1ow/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/CodeF1ow"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
