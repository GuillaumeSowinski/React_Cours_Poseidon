import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/navBar.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="Mexicain qui joue de la guitare" />
                    </Navbar.Brand>
                    <Navbar.Text>
                        <a href="/">Accueil</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </header>
    )
}