/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from 'react';
import './styles.css'

const Card = memo(({ id, image, name, category, description, price, stock, onAddToCart, onShowDetails }) => {
    return (
        <div className='card'>
            <button className='cartButttonContainer' type='button' onClick={() => onShowDetails(id)}>
            <img className='cardImage' src={image} alt={name} />
            <div className='cardContent'>
                <h3 className='cardName'>{name}</h3>
                <p className='cardCategory'>{category}</p>
                <p className='cardDescription'>{description}</p>
                <p className='cardPrice'>USD {price}</p>
                <p className='cardStock'>{stock} left</p>
            </div>
            </button>
            <div className='cardActions'>
                <button onClick={() => onAddToCart(id)} className='cardButton'>Add to cart</button>
            </div>
        </div>
    )
});

export default Card;