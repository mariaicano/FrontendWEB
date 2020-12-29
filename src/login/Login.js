import React, { useState } from 'react';
import './Login.css';
import { Form, Button } from 'react-bootstrap';
import { useAppContext} from '../lib/contextLib';
import { useHistory } from 'react-router-dom';

function Login() {

  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    history.push('/home')

    if (username === 'admin' && password === '0000') {
      userHasAuthenticated(true);
    } else {
      alert('Usuario o contraseña incorrectos, por favor intente de nuevo.');
    }
  }

  return (
    <div className="wrapper-login d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                placeholder="Nombre de usuario" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!validateForm()}>
              Iniciar sesión
          </Button>
          </Form>
        </div>
      </div>
    </div>

  );
}

export default Login;