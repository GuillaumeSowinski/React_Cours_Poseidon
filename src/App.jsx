import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Dish } from "./components/Dish"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>

      <Header />
      <main>
        <Container >
          <Row >
            <Col md={4} >
              <Dish
                price={3}
                image={"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"}
                altImage={"Tacos garnis succulent avec de la salade autour et un pot de sauce"}
                name={"Tacos à l'unité"}
              />
            </Col>
            <Col md={4} >
              <Dish
                price={12}
                image={"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"}
                altImage={"Image d'Enchiladas avec un demi citron vert sur le côté"}
                name="Enchiladas"
              />
            </Col>
            <Col md={4} >
              <Dish
                price={15}
                image={"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"}
                altImage={"Une limace de chocolat accompagnée de carottes rapées et des doritos sur de la sauce"}
                name="Mole poblano"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />

    </>
  )
}

export default App
