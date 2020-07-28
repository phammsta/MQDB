import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://wallpapersite.com/images/wallpapers/interstellar-5000x2813-matthew-mcconaughey-astronaut-hd-4k-9863.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="slidebar">
                        <p className="slidetitle">I N T E R S T E L L A R</p>
                        <p className="slidecaption">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://images3.alphacoders.com/676/thumb-1920-676239.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://fanart.tv/fanart/movies/37799/moviebackground/the-social-network-50f06ca72d39e.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://images8.alphacoders.com/640/thumb-1920-640499.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://images2.alphacoders.com/605/605929.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
 
            <div className="banner-fadeBottom" />           

        </div>
    )
}
