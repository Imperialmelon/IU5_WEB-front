import { useEffect, useState } from "react";
import { FC } from "react";
import { Carousel } from 'react-bootstrap';
import marsBase from "/images/mars_base.webp"
import marsPic from "/images/mars.webp"
import rocket from "/images/rocket.png"
export const ImageCarousel: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
      rocket,marsPic,marsBase,
    // Add more image URLs here
  ];

  useEffect(() => {
    const intervalId = setInterval(() =>{
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000); 
    return () => clearInterval(intervalId)
    }, [])

    return (
        <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} className="border border-dark rounded-3 adaptive-carousel">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 rounded-3" src={image} alt={`Image ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      );
    };
    
    export default ImageCarousel;