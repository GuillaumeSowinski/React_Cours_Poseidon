import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/dish.scss';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useCart } from "../hooks/useCart";


export function Dish({ price, image, altImage, name, isNew }) {
    const { addToCart, removeFromCart } = useCart();
    return (
        <Card>
            {isNew && <Badge bg="primary" className="card-badge">Nouveau</Badge>}
            <Card.Img src={image} alt={altImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Prix : {price}€
                </Card.Text>
                <Button variant="primary" onClick={addToCart}>Ajouter au panier</Button>
                <Button variant="secondary" onClick={removeFromCart}>Retirer du panier</Button>
            </Card.Body>
        </Card>
    )
}