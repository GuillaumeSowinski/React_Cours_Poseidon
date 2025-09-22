import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/dish.scss';
import Card from 'react-bootstrap/Card';


export function Dish({ price, image, altImage, name }) {
    return (
        <Card>
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