import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, InputGroup, ProgressBar } from 'react-bootstrap';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaInfoCircle, FaHistory, FaStar, FaBullseye, FaLanguage, FaTrash, FaPlus, FaSave, FaUndo } from 'react-icons/fa';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    name: 'Максим',
    surname: 'Кушниров',
    title: 'Frontend Developer',
    about: '',
    skills: '',
    experience: '',
    education: '',
    qualities: '',
    goals: '',
    languages: []
  });

  const [newLang, setNewLang] = useState({ name: '', percent: 100 });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [originalSettings, setOriginalSettings] = useState(null);

  useEffect(() => {
    const savedSettings = localStorage.getItem('portfolioSettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      if (typeof parsed.languages === 'string') {
        parsed.languages = parsed.languages.split(',').map(l => ({ name: l.trim(), percent: 100 })).filter(l => l.name);
      }
      setSettings(parsed);
      setOriginalSettings(parsed);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddLanguage = (e) => {
    e.preventDefault();
    if (!newLang.name.trim()) return;
    setSettings(prev => ({
      ...prev,
      languages: [...(prev.languages || []), { ...newLang, percent: Math.max(0, Math.min(100, Number(newLang.percent))) }]
    }));
    setNewLang({ name: '', percent: 100 });
  };

  const handleRemoveLanguage = (idx) => {
    setSettings(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== idx)
    }));
  };

  const handleLangChange = (idx, field, value) => {
    setSettings(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === idx ? { ...lang, [field]: field === 'percent' ? Math.max(0, Math.min(100, Number(value))) : value } : lang
      )
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem('portfolioSettings', JSON.stringify(settings));
      setOriginalSettings(settings);
      setStatus({ type: 'success', message: 'Настройки успешно сохранены!' });
      window.dispatchEvent(new CustomEvent('settingsUpdated', { detail: settings }));
    } catch (error) {
      setStatus({ type: 'danger', message: 'Ошибка при сохранении настроек' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    }
  };

  const handleReset = () => {
    if (originalSettings) {
      setSettings(originalSettings);
      setStatus({ type: 'info', message: 'Настройки восстановлены' });
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    }
  };

  return (
    <Container className="settings-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="settings-card">
            <Card.Header as="h2" className="text-center">
              <FaUser className="me-2" />
              Настройки профиля
            </Card.Header>
            <Card.Body>
              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaUser className="me-2" />
                        Имя
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={settings.name}
                        onChange={handleChange}
                        required
                        placeholder="Введите ваше имя"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaUser className="me-2" />
                        Фамилия
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="surname"
                        value={settings.surname}
                        onChange={handleChange}
                        required
                        placeholder="Введите вашу фамилию"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaBriefcase className="me-2" />
                    Должность
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={settings.title}
                    onChange={handleChange}
                    required
                    placeholder="Например: Frontend Developer"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaInfoCircle className="me-2" />
                    О себе
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="about"
                    value={settings.about}
                    onChange={handleChange}
                    placeholder="Расскажите о себе кратко"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaCode className="me-2" />
                    Навыки
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="skills"
                    value={settings.skills}
                    onChange={handleChange}
                    placeholder="Например: HTML, CSS, JavaScript, React"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaStar className="me-2" />
                    Профессиональные качества
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="qualities"
                    value={settings.qualities}
                    onChange={handleChange}
                    placeholder="Например: Ответственность, Коммуникабельность, Стрессоустойчивость"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaBullseye className="me-2" />
                    Цели
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="goals"
                    value={settings.goals}
                    onChange={handleChange}
                    placeholder="Опишите ваши профессиональные цели"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <FaLanguage className="me-2" />
                    Языки
                  </Form.Label>
                  {settings.languages && settings.languages.map((lang, idx) => (
                    <div className="language-item" key={idx}>
                      <Row className="align-items-center">
                        <Col>
                          <Form.Control
                            type="text"
                            value={lang.name}
                            onChange={e => handleLangChange(idx, 'name', e.target.value)}
                            placeholder="Язык"
                          />
                        </Col>
                        <Col xs="auto">
                          <ProgressBar 
                            now={lang.percent} 
                            label={`${lang.percent}%`}
                            variant="primary"
                            className="mb-2"
                          />
                          <Form.Control
                            type="range"
                            min={0}
                            max={100}
                            value={lang.percent}
                            onChange={e => handleLangChange(idx, 'percent', e.target.value)}
                            className="mb-2"
                          />
                        </Col>
                        <Col xs="auto">
                          <Button 
                            variant="danger" 
                            onClick={() => handleRemoveLanguage(idx)}
                            className="ms-2"
                          >
                            <FaTrash />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <InputGroup className="mt-3">
                    <Form.Control
                      type="text"
                      value={newLang.name}
                      onChange={e => setNewLang(l => ({ ...l, name: e.target.value }))}
                      placeholder="Новый язык"
                    />
                    <Form.Control
                      type="number"
                      min={0}
                      max={100}
                      value={newLang.percent}
                      onChange={e => setNewLang(l => ({ ...l, percent: e.target.value }))}
                      placeholder="%"
                      style={{ maxWidth: '100px' }}
                    />
                    <Button variant="primary" onClick={handleAddLanguage}>
                      <FaPlus />
                    </Button>
                  </InputGroup>
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button 
                    variant="secondary" 
                    onClick={handleReset}
                    disabled={isLoading}
                  >
                    <FaUndo className="me-2" />
                    Сбросить
                  </Button>
                  <Button 
                    type="submit" 
                    className="btn-save"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Сохранение...
                      </>
                    ) : (
                      <>
                        <FaSave className="me-2" />
                        Сохранить
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings; 