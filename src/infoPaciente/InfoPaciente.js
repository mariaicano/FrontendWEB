import React from 'react';
import './InfoPaciente.css';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function InfoPaciente(props) {

    const [paciente, setPaciente] = useState(null);
    useEffect(() => {
        fetch(`../json/${props.match.params.id}.json`)
            .then(res => res.json())
            .then(setPaciente)
            .catch(console.error);
    }, [props]);

    if (paciente) {
        return (
            paciente.map(pacientes => (
                <Card className="card-all">
                    <Card.Body>
                        <Card.Title>{pacientes.nombre} {pacientes.apellido}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Categoría: {pacientes.categoria}</Card.Subtitle>
                        <Card.Text>
                            Teléfono: {pacientes.telefono}<br/>
                            Dirección: {pacientes.direccion}<br/>
                            EPS: {pacientes.EPS}<br/>
                            Tipo de sangre: {pacientes.tipoSangre}<br/>
                            Categoría: {pacientes.categoria}<br/>
                            Alergias: <ul>
                                {pacientes.alergias.map(alergia =>(
                                    <li>{alergia}</li>
                                ))}
                            </ul>
                            Enfermedades: <ul>
                                {pacientes.enfermedades.map(enf =>(
                                    <li>{enf}</li>
                                ))}
                            </ul>
                            Medicamentos: <ul>
                                {pacientes.medicamentos.map(med =>(
                                    <li>{med}</li>
                                ))}
                            </ul>
                            <h4>Novedades:</h4>
                            <Card>
                                <Card.Title>{pacientes.fecha}</Card.Title>
                                <Card.Text>
                                    Temperatura: {pacientes.temperatura}<br/>
                                    Presion: {pacientes.presion}<br/>
                                    Nivel de glucosa: {pacientes.nivelGlucosa}<br/>
                                    Saturación de oxígeno: {pacientes.spO2}<br/>
                                    Síntomas: <ul>
                                        {pacientes.sintomas.map(sint =>(
                                            <li>{sint}</li>
                                        ))}
                                    </ul>
                                    Novedades: <ul>
                                        {pacientes.novedades.map(nov =>(
                                            <li>{nov}</li>
                                        ))}
                                    </ul>

                                    Tratamiento: {pacientes.tratamiento}<br/>
                                </Card.Text>
                            </Card>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))

        );
    }
    return null;
}

export default InfoPaciente;