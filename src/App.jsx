import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Dish } from "./components/Dish"
import Button from 'react-bootstrap/Button';
import './assets/styles/main.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { useState, useRef, useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false)
  const { cartCount } = useContext(CartContext);
  const prevCartCountRef = useRef(cartCount);

  useEffect(() => {
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  const dishes = [
    {
      id: 1,
      price: 3,
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      altImage: "Tacos garnis succulent avec de la salade autour et un pot de sauce",
      name: "Tacos à l'unité",
      isNew: true,
      stock: 12
    },
    {
      id: 2,
      price: 12,
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      altImage: "Image d'Enchiladas avec un demi citron vert sur le côté",
      name: "Enchiladas",
      isNew: false,
      stock: 0
    },
    {
      id: 3,
      price: 15,
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      altImage: "Une limace de chocolat accompagnée de carottes rapées et des doritos sur de la sauce",
      name: "Mole poblano",
      isNew: false,
      stock: 5
    },
  ];

  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
  };

  const dishWithStock = dishes.filter(dish => dish.stock > 0 && (!showNewOnly || dish.isNew))

  return (
    <>
      <Header />
      <main>
        <Container>
          <Button variant="primary" onClick={handleShowNewOnly}>{showNewOnly ? "Afficher tout" : "Nouveautés uniquement"}</Button>
          <div style={{ margin: '1rem 0' }}>
            Le panier est passé de {prevCartCountRef.current} à {cartCount} articles
          </div>
          <Row >
            {dishWithStock.map((dish) => (
              <Col md={4} key={dish.id} >
                <Dish
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
