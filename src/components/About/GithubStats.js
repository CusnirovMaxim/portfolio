import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaCode, FaStar, FaCodeBranch } from "react-icons/fa";

function GithubStats() {
  const [stats, setStats] = useState({
    languages: [
      { name: "JavaScript", value: 45 },
      { name: "TypeScript", value: 25 },
      { name: "HTML/CSS", value: 20 },
      { name: "Python", value: 10 }
    ],
    totalRepos: 15,
    totalStars: 42,
    totalForks: 8
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Статистика <strong className="purple">GitHub</strong>
      </h1>
      
      <Col md={6} className="github-stats-card">
        <Card className="github-card">
          <Card.Body>
            <h3>Языки программирования</h3>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={stats.languages}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {stats.languages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="github-stats-card">
        <Card className="github-card">
          <Card.Body>
            <h3>Общая статистика</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <FaCode className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-value">{stats.totalRepos}</span>
                  <span className="stat-label">Репозитории</span>
                </div>
              </div>
              <div className="stat-item">
                <FaStar className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-value">{stats.totalStars}</span>
                  <span className="stat-label">Звезды</span>
                </div>
              </div>
              <div className="stat-item">
                <FaCodeBranch className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-value">{stats.totalForks}</span>
                  <span className="stat-label">Форки</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default GithubStats; 