import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Привет! Меня зовут <span className="purple">Максим Кушниров</span>
            <br />
            Я начинающий веб-разработчик, увлеченный созданием современных веб-приложений.
            <br />
            В настоящее время я изучаю веб-разработку и совершенствую свои навыки в React.
            <br />
            <br />
            Помимо программирования, я также увлекаюсь:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Изучением новых технологий
            </li>
            <li className="about-activity">
              <ImPointRight /> Веб-дизайном
            </li>
            <li className="about-activity">
              <ImPointRight /> Разработкой пользовательских интерфейсов
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Стремлюсь создавать проекты, которые делают мир лучше!"{" "}
          </p>
          <footer className="blockquote-footer">Максим</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
