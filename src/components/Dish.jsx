export function Dish({ price, image, altImage, name }) {
    return (
        <div>
            <img src={image} alt={altImage} />
            <p>{name}</p>
            <p>Prix : {price}€</p>
        </div>
    )
}