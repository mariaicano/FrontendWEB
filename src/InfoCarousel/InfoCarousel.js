import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './InfoCarousel.css'

function InfoCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://fondosmil.com/fondo/6731.jpg"
                    /*src="https://consultorsalud.com/wp-content/uploads/2019/10/Equipos-de-hospitales-1-1000x600.jpg"*/
                    alt="Bienvenido"
                />
                <Carousel.Caption className="carousel-caption">
                    <h3>BIENVENIDO</h3>
                    <p>Tu colaboración hace que el seguimiento de nuestros pacientes sea más eficiente y todos estemos conectados.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://pbs.twimg.com/media/Eaeuhf6XQAEzgdN.jpg:large"
                    /*src="https://www.udea.edu.co/wps/wcm/connect/udea/d5dd7aa1-f863-422f-b384-21a620210dc0/1/medicina.jpg?MOD=AJPERES"*/
                    alt="Third slide"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3>EQUIPOS MÉDICOS EN CASA</h3>
                    <p>Ahora tenemos disponibles equipos que se podrá llevar para su hogar para que pueda hacer un seguimiento más completo de nuestros pacientes, de esta forma podremos cuidar a nuestros pacientes desde la comodidad del hogar pero con un servicio hospitalario completo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://www.elpaccto.eu/wp-content/uploads/2020/03/fusion-medical-animation-rnr8D3FNUNY-unsplash-scaled.jpg"
        /*src="https://360radio.com.co/wp-content/uploads/2020/08/udea.jpg"*/
                    alt="Información sobre coronavirus"
                />

                <Carousel.Caption className="carousel-caption">
                    <h3>¡NO SE PREOCUPE!</h3>
                    <p>Durante esta época de pandemia, nuestros servicios se siguen prestando con normalidad; los médicos y enfermeras estarán siempre disponibles. Si usted tiene síntomas, póngase en contacto con nosotros para asesorarlo sobre la continuidad del seguimiento de nuestros pacientes.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default InfoCarousel;