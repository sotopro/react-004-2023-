/* eslint-disable react/prop-types */
import './styles.css'

const Details = ({ id, image, name, category, description, price, stock, onAddToCart }) => {
    return (
        <div className='cardDetail'>
            <div className='cardDetailImageContainer'>
                <img className='cardDetailImage' src={image} alt={name} />
            </div>
            <div className='cardDetailContent'>
                <h3 className='cardDetailName'>{name}</h3>
                <p className='cardDetailCategory'>{category}</p>
                <p className='cardDetailDescription'>{description}</p>
                <p className='cardDetailPrice'>USD {price}</p>
                <p className='cardDetailStock'>{stock} left</p>
                <div className='cardDetailActions'>
                    <button onClick={() => onAddToCart(id)} className='cardButton'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Details;