import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ПОЗВОЛЬТЕ <span className="purple"> ПРЕДСТАВИТЬСЯ </span>
            </h1>
            <p className="home-about-body">
              Я увлечен программированием и постоянно совершенствую свои навыки
              <br />
              <br />Я владею такими языками как
              <i>
                <b className="purple"> JavaScript, HTML и CSS </b>
              </i>
              <br />
              <br />
              Моя область интересов - это создание новых &nbsp;
              <i>
                <b className="purple">веб-технологий и продуктов</b>
              </i>
              <br />
              <br />
              В своих проектах я использую
              <i>
                <b className="purple">
                  {" "}
                  современные JavaScript библиотеки и фреймворки
                </b>
              </i>
              &nbsp; такие как
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>МОИ КОНТАКТЫ</h1>
            <p>
              Буду рад <span className="purple">связаться </span>с вами
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CusnirovMaxim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/maksim_kusnirov/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+37379386454"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
