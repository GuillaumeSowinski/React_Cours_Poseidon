export function Dish({ Description, prix, image, altImage, slug, stock }) {
    return (
        <div>
            <p>{Description}</p>
            <p>Prix : {prix}</p>
            <img src={image} alt={altImage} />
            <p>Slug : {slug}</p>
            <p>Stock :{stock}</p>
        </div>
    )
}