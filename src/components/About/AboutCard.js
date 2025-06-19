import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [settings, setSettings] = useState({
    name: 'Максим',
    surname: 'Кушниров',
    title: 'Frontend Developer',
    about: ''
  });

  useEffect(() => {
    // Загружаем настройки при монтировании компонента
    const savedSettings = localStorage.getItem('portfolioSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Слушаем обновления настроек
    const handleSettingsUpdate = (event) => {
      setSettings(event.detail);
    };

    window.addEventListener('settingsUpdated', handleSettingsUpdate);
    
    return () => {
      window.removeEventListener('settingsUpdated', handleSettingsUpdate);
    };
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "#c770f0" }}>
            Привет! Меня зовут <span className="purple">{`${settings.name} ${settings.surname}`}</span>
            <br />
            {settings.about || "Я начинающий веб-разработчик, увлеченный созданием современных веб-приложений."}
            <br />
            В настоящее время я изучаю веб-разработку и совершенствую свои навыки в React.
            <br />
            <br />
            Помимо программирования, я также увлекаюсь:
          </p>
          <ul>
            <li className="about-activity" style={{ color: "#c770f0" }}>
              <ImPointRight /> Изучением новых технологий
            </li>
            <li className="about-activity" style={{ color: "#c770f0" }}>
              <ImPointRight /> Веб-дизайном
            </li>
            <li className="about-activity" style={{ color: "#c770f0" }}>
              <ImPointRight /> Разработкой пользовательских интерфейсов
            </li>
          </ul>

          <p style={{ color: "#c770f0" }}>
            "Стремлюсь создавать проекты, которые делают мир лучше!"{" "}
          </p>
          {/* <footer className="blockquote-footer">{settings.name}</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
