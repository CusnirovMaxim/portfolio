import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [settings, setSettings] = useState({
    name: 'Максим',
    surname: 'Кушниров',
    title: 'Frontend Developer'
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

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Привет!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Я
                <strong className="main-name"> {settings.name.toUpperCase()} {settings.surname.toUpperCase()}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
