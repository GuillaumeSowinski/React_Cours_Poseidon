import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Dish } from "./components/Dish"

function App() {

  return (
    <>
      <Header />
      <main>
        <Dish
          price={3}
          image={"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"}
          altImage={"Tacos garnis succulent avec de la salade autour et un pot de sauce"}
          name={"Tacos à l'unité"}
        />
        <Dish
          price={12}
          image={"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"}
          altImage={"Image d'Enchiladas avec un demi citron vert sur le côté"}
          name="Enchiladas"
        /><Dish
          price={15}
          image={"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"}
          altImage={"Une limace de chocolat accompagnée de carottes rapées et des doritos sur de la sauce"}
          name="Mole poblano"
        />
      </main>
      <Footer />
    </>
  )
}

export default App
