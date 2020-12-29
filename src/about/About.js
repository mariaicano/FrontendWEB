import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './About.css';

function About() {
    return (
        <div>
            <Jumbotron fluid className="jumbo">
                <Container>
                    <h1>Nuestro equipo</h1>
                    <p>
                    Nuestro equipo está formado por miles de personas que, gracias a sus seguimientos, hacen posible que el cuidado de los pacientes esté unificada. La idea surgió de un grupo de 6 personas que buscaron crear un método de conectar todos los cuidados que recibe un paciente tanto en la estadía en el hospital como la estadía en su hogar cuando requiere seguimiento. Así, logramos conectar familiares y médicos de diferentes entidades promotoras de salud (EPS) para que el historial médico de los pacientes sea uno solo.
                    </p>
                </Container>
            </Jumbotron>

            <Container>
                <Row className="row">
                    <Col className="column">
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=2133&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2019%2F11%2Florena-garcc3ada-2000.jpg" alt="image1"/>
                        <img src="https://elcomercio.pe/resizer/gTPyzG1YwiucA3GUqgdvwvCwgeM=/640x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Z6Z2U56D2NDNVM6LS442K2SQMM.jpg" alt="image2"/> 
                        
                    </Col>
                    
                    <Col className="column">
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2019%2F11%2Fgrettell-valdez-2000.jpg" alt="image3"/>
                        <img src="https://elcomercio.pe/resizer/S3PkNFjCTRQ8kQ5Gi1gpzOxAuug=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6EFF2E6IB5BTPNRK3K65U4B2PQ.jpg" alt="image4"/>
                    </Col>

                    <Col className="column">
                        <img src="https://elcomercio.pe/resizer/b0IFn70d9-xWCORJ-41qshwYYUo=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/GYPX2HSQ3RHJVDHGLAHYRCESAM.jpg" alt="image5"/>
                        <img src="https://elcomercio.pe/resizer/qHCX0NxaYqneIc_SQlU9UprT7Ng=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/C57BXDAL7JHE5JYKVYP6MQWKRA.jpg" alt="image6"/>
                    </Col>
                
                </Row>
            </Container>
        </div>
        
    );
}

export default About;