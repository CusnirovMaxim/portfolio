import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Maksim_Kushnirov_CV.pdf.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <ResumeContent />
      </Container>
      <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Скачать Резюме
        </Button>
      </Row>
    </Container>
  );
}

export default Resume; 