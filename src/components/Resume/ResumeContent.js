import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ResumeContent.css";

function ResumeContent() {
  const [settings, setSettings] = useState({
    name: 'Максим',
    surname: 'Кушниров',
    title: 'Frontend Developer',
    about: '',
    skills: '',
    experience: '',
    education: '',
    languages: []
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
    return () => window.removeEventListener('settingsUpdated', handleSettingsUpdate);
  }, []);

  // Языки для отображения
  const langs = Array.isArray(settings.languages) && settings.languages.length > 0
    ? settings.languages
    : [
        { name: "Русский", percent: 95 },
        { name: "Английский", percent: 60 },
        { name: "Румынский", percent: 60 }
      ];

  return (
    <Container fluid className="resume-content">
      <Row className="resume-header">
        <Col>
          <h1>{settings.name} {settings.surname}</h1>
          <h2>{settings.title}</h2>
        </Col>
      </Row>

      {settings.about && (
        <Row className="resume-section">
          <Col>
            <h3>О себе</h3>
            <p>{settings.about}</p>
          </Col>
        </Row>
      )}

      {settings.education && (
        <Row className="resume-section">
          <Col>
            <h3>Образование</h3>
            <div className="education-item">
              {settings.education.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </Col>
        </Row>
      )}

      <Row className="resume-section">
        <Col md={6}>
          <h3>Технические навыки</h3>
          {settings.skills ? (
            <ul className="skills-list">
              {settings.skills.split(',').map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
              ))}
            </ul>
          ) : (
            <ul className="skills-list">
              <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
              <li><strong>Фреймворки:</strong> React.js</li>
              <li><strong>Языки программирования:</strong> JavaScript, TypeScript</li>
              <li><strong>Инструменты разработки:</strong> VS Code, Git/GitHub, Node.js</li>
            </ul>
          )}
        </Col>
        <Col md={6}>
          <h3>Языки</h3>
          <div className="language-list">
            {langs.map((lang, index) => (
              <div key={index} className="language-item">
                <div className="language-info">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.percent}%</span>
                </div>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {settings.experience && (
        <Row className="resume-section">
          <Col>
            <h3>Опыт работы</h3>
            <div className="experience-item">
              {settings.experience.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </Col>
        </Row>
      )}

      <Row className="resume-section">
        <Col md={6}>
          <h3>Профессиональные качества</h3>
          <ul>
            {(settings.qualities && settings.qualities.split(',').filter(q => q.trim()).length > 0)
              ? settings.qualities.split(',').map((q, i) => <li key={i}>{q.trim()}</li>)
              : [
                  <li key="1">Быстрая обучаемость</li>,
                  <li key="2">Внимание к деталям</li>,
                  <li key="3">Умение работать в команде</li>,
                  <li key="4">Стремление к профессиональному росту</li>
                ]
            }
          </ul>
        </Col>
        <Col md={6}>
          <h3>Цели</h3>
          <ul>
            {(settings.goals && settings.goals.split(',').filter(g => g.trim()).length > 0)
              ? settings.goals.split(',').map((g, i) => <li key={i}>{g.trim()}</li>)
              : [
                  <li key="1">Развитие в сфере веб-разработки</li>,
                  <li key="2">Получение практического опыта в реальных проектах</li>,
                  <li key="3">Изучение новых технологий и фреймворков</li>
                ]
            }
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeContent; 