import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Dish } from "./components/Dish"

function App() {

  return (
    <>
      <Header />
      <main>
        <Dish
          Description={"Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique."}
          prix={3}
          image={"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"}
          altImage={"Tacos garnis succulent avec de la salade autour et un pot de sauce"}
          slug="tacos-a-l-unite"
          stock={12}
        />
        <Dish
          Description={"Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus."}
          prix={12}
          image={"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"}
          altImage={"Image d'Enchiladas avec un demi citron vert sur le côté"}
          slug="enchiladas"
          stock={0}
        /><Dish
          Description={"Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise."}
          prix={15}
          image={"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"}
          altImage={"Une limace de chocolat accompagnée de carottes rapées et des doritos sur de la sauce"}
          slug="mole-poblano"
          stock={5}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
