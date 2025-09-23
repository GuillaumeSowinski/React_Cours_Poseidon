import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/dish.scss';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


export function Dish({ price, image, altImage, name, isNew }) {
    return (
        <Card>
            {isNew && <Badge bg="primary" className="card-badge">Nouveau</Badge>}
            <Card.Img src={image} alt={altImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Prix : {price}€
                </Card.Text>
            </Card.Body>
        </Card>
    )
}