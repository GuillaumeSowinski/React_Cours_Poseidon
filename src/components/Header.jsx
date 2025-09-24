import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/navBar.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/image/logo.png";
import { useCart } from "../hooks/useCart";

export function Header() {
    const { cartCount } = useCart();
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><img src={logo} alt="Mexicain qui joue de la guitare" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                        </Nav>
                        <span>Panier ({cartCount})</span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}