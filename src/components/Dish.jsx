export function Dish({ prix, image, altImage, nom }) {
    return (
        <div>
            <img src={image} alt={altImage} />
            <p>Nom : {nom}</p>
            <p>Prix : {prix}€</p>
        </div>
    )
}