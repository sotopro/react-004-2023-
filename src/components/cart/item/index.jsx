/* eslint-disable react/prop-types */
import './styles.css'

const CartItem = ({onAddToCart,onDecreaseItem, onRemoveItem, id, image, name, price, quantity, stock }) => {
    return (
        <div className='cartItem'>
            <div className='cardImageContainer'>
                <img className='cardImage' src={image} alt={name} />
            </div>
            <div className='cartContentContainer'>
                <p className='cartProductName'>{name}</p>
                <p className='cartPrice'>USD {price}</p>
                <p className='cartQuantity'>qty: {quantity}</p>
                <p className='cartStock'>{stock} left</p>
                <div className='cartActions'>
                    <button onClick={() => onAddToCart(id)} className='cartButttonAdd'>+</button>
                    <button onClick={() => onDecreaseItem(id)} className='cartButttonDecrease'>-</button>
                    <button onClick={() => onRemoveItem(id)} className='cartButttonRemove'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem