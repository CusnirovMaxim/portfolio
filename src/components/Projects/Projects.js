import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мои <strong className="purple">проекты </strong>
        </h1>
        <p style={{ color: "white" }}>
          Проекты, выполненные во время обучения и практики веб-разработки.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Портфолио"
              description="Мой личный сайт-портфолио, созданный с использованием React.js и Bootstrap. В процессе разработки я изучил основы React, работу с компонентами, маршрутизацию и стилизацию с помощью Bootstrap."
              ghLink="https://github.com/CusnirovMaxim/Portfolio-master"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Urban Shop"
              description="Учебный проект интернет-магазина одежды. Форк проекта для изучения вёрстки и работы с HTML/CSS. В процессе работы над проектом освоил адаптивную вёрстку и базовые принципы веб-дизайна."
              ghLink="https://github.com/CusnirovMaxim/urban-shop"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Clothing Store"
              description="Практический проект магазина одежды. В ходе разработки изучил основы создания пользовательского интерфейса и работу с HTML. Проект помог понять базовые принципы веб-разработки."
              ghLink="https://github.com/CusnirovMaxim/clothing-store"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
