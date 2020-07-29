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
                        <p className="slidetitle">INTERSTELLAR</p>
                        <p className="slidecaption">“Love is the one thing that transcends time and space.”</p>
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
                        <div className="slidebar">
                        <p className="slidetitle">WHIPLASH</p>
                        <p className="slidecaption">"Were you rushing; or were you dragging?"</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://fanart.tv/fanart/movies/37799/moviebackground/the-social-network-50f06ca72d39e.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="slidebar">
                        <p className="slidetitle">THE SOCIAL NETWORK</p>
                        <p className="slidecaption">"A million dollars isn't cool. You know what's cool? A billion dollars."</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://images8.alphacoders.com/640/thumb-1920-640499.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="slidebar">
                        <p className="slidetitle">INCEPTION</p>
                        <p className="slidecaption">"Do you want to take a leap of faith or become an old man filled with regret waiting to die alone?"</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src="https://images2.alphacoders.com/605/605929.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="slidebar">
                        <p className="slidetitle">THE IMITATION GAME</p>
                        <p className="slidecaption">"Sometimes it's the very people who no one imagines anything of who do the things no one can imagine."</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                        

            </Carousel>
 <div className="banner-fadeBottom" />   

        </div>
    )
}
