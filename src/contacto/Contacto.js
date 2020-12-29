import React from 'react';
import './Contacto.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contacto(){
    return(
        <>
        
        <Container fluid>
            <Row>
                <img src="https://fondosmil.com/fondo/6733.jpg" alt="Contactenos"/>
            </Row>    
            <Row>
                <Col className="contact-info">
                    <Card>
                        <Card.Title className="card-title">Contáctenos</Card.Title>
                            <Card.Body className="card-body">
                                Líneas de atención:<br/>
                                Medellín: 000 00 00<br/>
                                Bogotá: 000 00 01<br/>
                                Resto del país: 01 8000 000 000<br/>
                                <br/>
                                Dirección:<br/>
                                Calle 1 # 1, Medellín, Antioquia.<br/>
                                <br/>
                                Correo:
                                informacion@sigueme.com
                            </Card.Body>
                    </Card>
                </Col>
                <Col className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9433.074745281283!2d-75.57015092314789!3d6.247997387877764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalle%201%20%23%201!5e0!3m2!1ses!2sco!4v1609017521192!5m2!1ses!2sco" width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Col>
            </Row>
            </Container>
        
        

        
    </>
    );
}

export default Contacto;