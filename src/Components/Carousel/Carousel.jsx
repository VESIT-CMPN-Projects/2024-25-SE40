import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';

function CustomCarousel() {
  return (
    <div className="carousel-container">
      <Carousel>
      <Carousel.Item>
      <img src={image1} className="d-block w-100" alt="Slide 1" />        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} className="d-block w-100" alt="Slide 1" />        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image1} className="d-block w-100" alt="Slide 1" />        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>

  );
}

export default CustomCarousel;