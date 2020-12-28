import React, { useEffect, useState } from 'react';
import InfoCarousel from '../InfoCarousel/InfoCarousel';
import Card from 'react-bootstrap/Card';
import { useAppContext } from '../lib/contextLib';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Home() {

    const { isAuthenticated } = useAppContext();

    const [pacientes, setPaciente] = useState(null);
    useEffect(() => {
        fetch(`json/pacientes.json`)
            .then(res => res.json())
            .then(setPaciente)
            .catch(console.error);
    }, []);

    if (pacientes) {
        return (
            <>
                <InfoCarousel></InfoCarousel>
                <Card>
                    <Card.Body>
                        <h1>Seguimientos</h1>
                        {isAuthenticated ? (
                            <section>
                                <Row lg={1}>
                                    {pacientes.map(paciente => (
                                        <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{paciente.apellido}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{paciente.nombre}</Card.Subtitle>
                                                <Card.Text>
                                                    Categoría: {paciente.categoria}<br/>
                                                    Enfermedad: {paciente.enfermedades}
                                                </Card.Text>
                                                <Button variant="primary" href={`/info/${paciente.id}`} value={paciente.id}>Ver información del paciente</Button>{' '}
                                                <Button variant="outline-primary">Agregar novedad</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                        </Col>
                                    ))}
                                </Row>
                                
                            </section>
                        ) : (
                            <>
                                <p>Por favor, inicie sesión para ver los pacientes que tiene bajo su cuidado. En caso de que aun no se haya registrado, comuníquese con nosotros para crear una cuenta y pueda realizar sus registros.</p>
                                <Button className="mr-2" href="/login" >Iniciar sesión</Button>
                                <Button href="/contact">Contáctenos</Button>
                            </>
                            )
                        }
                    </Card.Body>
                </Card>
            </>
        );
    }
    return null;

}

export default Home;