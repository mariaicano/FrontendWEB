import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './About.css';

function About() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Nuestro equipo</h1>
                    <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                </Container>
            </Jumbotron>

            <Container>
                <Row className="row">
                    <Col className="column">
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=2133&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2019%2F11%2Florena-garcc3ada-2000.jpg" alt="image1"/>
                        <img src="https://elcomercio.pe/resizer/gTPyzG1YwiucA3GUqgdvwvCwgeM=/640x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Z6Z2U56D2NDNVM6LS442K2SQMM.jpg" alt="image1"/> 
                        
                    </Col>
                    
                    <Col className="column">
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2019%2F11%2Fgrettell-valdez-2000.jpg" alt="image1"/>
                        <img src="https://elcomercio.pe/resizer/S3PkNFjCTRQ8kQ5Gi1gpzOxAuug=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6EFF2E6IB5BTPNRK3K65U4B2PQ.jpg" alt="image1"/>
                    </Col>

                    <Col className="column">
                        <img src="https://elcomercio.pe/resizer/b0IFn70d9-xWCORJ-41qshwYYUo=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/GYPX2HSQ3RHJVDHGLAHYRCESAM.jpg" alt="image1"/>
                        <img src="https://elcomercio.pe/resizer/qHCX0NxaYqneIc_SQlU9UprT7Ng=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/C57BXDAL7JHE5JYKVYP6MQWKRA.jpg" alt="image1"/>
                    </Col>
                
                </Row>
            </Container>
        </div>
        
    );
}

export default About;