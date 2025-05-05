import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ResumeContent.css";

function ResumeContent() {
  const languages = [
    { name: "Русский", level: "Свободное владение", progress: 95 },
    { name: "Английский", level: "Средний уровень", progress: 60 },
    { name: "Румынский", level: "Средний уровень", progress: 60 }
  ];

  return (
    <Container fluid className="resume-content">
      <Row className="resume-header">
        <Col>
          <h1>Максим Кушниров</h1>
          <h2>Frontend Developer</h2>
        </Col>
      </Row>

      <Row className="resume-contact">
        <Col>
          <p>📍 Бельцы, Молдова</p>
        </Col>
      </Row>

      <Row className="resume-section">
        <Col>
          <h3>Образование</h3>
          <div className="education-item">
            <h4>Государственный университет имени Алеку Руссо</h4>
            <p className="date">2020 - 2024</p>
            <p>Факультет: Информатика</p>
            <p>Специальность: Программист</p>
          </div>
        </Col>
      </Row>

      <Row className="resume-section">
        <Col md={6}>
          <h3>Технические навыки</h3>
          <ul className="skills-list">
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Фреймворки:</strong> React.js</li>
            <li><strong>Языки программирования:</strong> JavaScript, TypeScript</li>
            <li><strong>Инструменты разработки:</strong> VS Code, Git/GitHub, Node.js</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>Языки</h3>
          <div className="language-list">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <div className="language-info">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${lang.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      <Row className="resume-section">
        <Col md={6}>
          <h3>Профессиональные качества</h3>
          <ul>
            <li>Быстрая обучаемость</li>
            <li>Внимание к деталям</li>
            <li>Умение работать в команде</li>
            <li>Стремление к профессиональному росту</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>Цели</h3>
          <ul>
            <li>Развитие в сфере веб-разработки</li>
            <li>Получение практического опыта в реальных проектах</li>
            <li>Изучение новых технологий и фреймворков</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeContent; 