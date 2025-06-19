import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
// import Button from "react-bootstrap/Button";
// import { AiOutlineDownload } from "react-icons/ai";
// import pdf from "../../Assets/Maksim_Kushnirov_CV.pdf.pdf";
import html2pdf from 'html2pdf.js';

function Resume() {
  // Функция для скачивания страницы как PDF
  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-pdf-area');
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container id="resume-pdf-area">
        <ResumeContent />
      </Container>
      <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
        <button
          className="btn btn-primary"
          onClick={handleDownloadPDF}
          style={{ maxWidth: "250px" }}
        >
          Скачать резюме
        </button>
      </Row>
    </Container>
  );
}

export default Resume; 