import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Мои <strong className="purple">проекты </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/about.png")}
              isBlog={false}
              title="Портфолио"
              description="Персональный сайт-портфолио, созданный с использованием React.js и Bootstrap. Включает в себя информацию о проектах, навыках и контактные данные."
              ghLink="https://github.com/CusnirovMaxim/Portfolio"
              demoLink="https://cusnirovmaxim.github.io/Portfolio/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
