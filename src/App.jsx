import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Dish } from "./components/Dish"
import './assets/styles/main.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'



function App() {

  const dishes = [
    {
      id: 1,
      price: 3,
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      altImage: "Tacos garnis succulent avec de la salade autour et un pot de sauce",
      name: "Tacos à l'unité",
      isNew: true
    },
    {
      id: 2,
      price: 12,
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      altImage: "Image d'Enchiladas avec un demi citron vert sur le côté",
      name: "Enchiladas",
      isNew: false
    },
    {
      id: 3,
      price: 15,
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      altImage: "Une limace de chocolat accompagnée de carottes rapées et des doritos sur de la sauce",
      name: "Mole poblano",
      isNew: false
    },
  ];

  return (
    <>

      <Header />
      <main>
        <Container >
          <Row >
            {dishes.map((dish) => (
              <Col md={4} >
                <Dish
                  key={dish.id}
                  price={dish.price}
                  image={dish.image}
                  altImage={dish.altImage}
                  name={dish.name}
                  isNew={dish.isNew}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />

    </>
  )
}

export default App
