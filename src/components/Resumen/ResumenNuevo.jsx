import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/oscar_cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  useEffect(() => {
    const handleResize = () => {};

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Añade el parámetro #zoom=80 a la URL del PDF
  const pdfUrl = `${pdf}#zoom=80`;

  return (
    <div>
      <Container fluid className="resume-section" style={{ marginTop: "100px" }}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            style={{
              maxWidth: "150px", 
              marginTop: "20px",
              padding: "10px 10px", 
              fontSize: "14px", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="download-btn__icon" style={{ marginRight: "5px" }}>
              <AiOutlineDownload />
            </span>
            <span className="download-btn__text">Descargar CV</span>
          </Button>
        </Row>
        <Row
          className="pdf"
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <iframe src={pdfUrl} title="Curriculum Oscar" width="100%" height="700px" />
          </div>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            target="_blank"
            style={{
              maxWidth: "150px", // Reduce el ancho del botón
              marginTop: "2px",
              padding: "10px 10px", // Ajusta el padding para que sea más pequeño
              fontSize: "14px", // Reduce el tamaño de la fuente
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlineDownload style={{ marginRight: "5px" }} />
            Descargar CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
