import { useEffect, useState } from "react";
import { FC } from "react";
import { Carousel } from 'react-bootstrap';
import unknownImage from "/images/noimage.webp"
export const ImageCarousel: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        unknownImage,unknownImage,unknownImage,
    // Add more image URLs here
  ];

  useEffect(() => {
    const intervalId = setInterval(() =>{
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000); 
    return () => clearInterval(intervalId)
    }, [])

    return (
        <Carousel activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)} className="border border-dark rounded-3">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 rounded-3" src={image} alt={`Image ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      );
    };
    
    export default ImageCarousel;