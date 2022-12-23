import '../Nav/topnav.css';
import Carousel from 'react-bootstrap/Carousel';
import Caro3 from './caro1.jpg';
import Caro1 from './caro2.jpg'
import Caro2 from './caro3.jpg'
function MainCarousel() {
 return(
    <div className='carousel'>
    <Carousel variant="dark" interval={10000}>
      <Carousel.Item>
        <img
          className='caroItem'
          src={Caro1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Exclusive Tickets</h5>
          <p>Selling Quick</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caroItem"
          src={Caro2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Once in a lifetime Opertunity</h5>
          <p>
           The Legends' last world cup!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caroItem"
          src={Caro3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Don't Miss</h5>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);
 
}

export default MainCarousel;