import React, { useEffect, useState } from 'react';
import InfoCarousel from '../InfoCarousel/InfoCarousel';
import Card from 'react-bootstrap/Card';
import { useAppContext } from '../lib/contextLib';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Home() {

    const { isAuthenticated } = useAppContext();

    const [pacientes, setPaciente] = useState(null);
    useEffect(() => {
        fetch(`json/pacientes.json`)
            .then(res => res.json())
            .then(setPaciente)
            .catch(console.error);
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fecha, setFecha] = useState('');
    const [temperatura, setTemperatura] = useState('');
    const [presion, setPresion] = useState('');
    const [nivelGlucosa, setNivelGlucosa] = useState('');
    const [spO2, setSpO2] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [tratamiento, setTratamiento] = useState('');
    const [novedades, setNovedades] = useState('');

    if (pacientes) {
        return (
            <>
                <InfoCarousel></InfoCarousel>
                <Card>
                    <Card.Body>
                        <h1>Seguimientos</h1>
                        {isAuthenticated ? (
                            <>
                                <section>
                                    <Row lg={1}>
                                        {pacientes.map(paciente => (
                                            <Col>
                                                <Card>
                                                    <Card.Body>
                                                        <Card.Title>{paciente.apellido}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">{paciente.nombre}</Card.Subtitle>
                                                        <Card.Text>
                                                            Categoría: {paciente.categoria}<br />
                                                            Enfermedad: {paciente.enfermedades}
                                                        </Card.Text>
                                                        <Button className="mb-2" variant="primary" href={`/info/${paciente.id}`} value={paciente.id}>Ver información del paciente</Button>{' '}
                                                        <Button className="mb-2" variant="outline-primary" onClick={handleShow}>Agregar novedad</Button>{' '}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>

                                </section>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Novedad</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Label>Fecha</Form.Label>
                                                    <Form.Control className="form-control" type="datetime-local" values={fecha} onChange={(e)=>setFecha(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Temperatura</Form.Label>
                                                    <Form.Control className="form-control" type="number" values={temperatura} onChange={(e)=>setTemperatura(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Presión</Form.Label>
                                                    <Form.Control type="text" values={presion} onChange={(e)=>setPresion(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Nivel de glucosa</Form.Label>
                                                    <Form.Control className="form-control" type="number" values={nivelGlucosa} onChange={(e)=>setNivelGlucosa(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Saturación de oxígeno</Form.Label>
                                                    <Form.Control className="form-control" type="number" values={spO2} onChange={(e)=>setSpO2(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Sintomas</Form.Label>
                                                    <Form.Control type="text" values={sintomas} onChange={(e)=>setSintomas(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Tratamiento</Form.Label>
                                                    <Form.Control type="text" values={tratamiento} onChange={(e)=>setTratamiento(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Novedades</Form.Label>
                                                    <Form.Control type="text" values={novedades} onChange={(e)=>setNovedades(e.target.value)} />
                                                </Form.Group>
                                            </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
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