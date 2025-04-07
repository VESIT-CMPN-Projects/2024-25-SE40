import './Cards.css';
import Card from 'react-bootstrap/Card';
import man from '../Assets/man.png';
import customcollar from '../Assets/customizedcollar.jpeg'
import ribs from '../Assets/ribs.png'

function CustomCards() {
  return (
    <div className="cards-container">
      <Card className="custom-card">
        <Card.Img variant="top" src={man} />
        <Card.Body>
          <Card.Title>Collars</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={customcollar} />
        <Card.Body>
          <Card.Title>Customized collars</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={man} />
        <Card.Body>
          <Card.Title>Cuffs</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={ribs} />
        <Card.Body>
          <Card.Title>Ribs</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomCards;
