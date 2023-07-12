import { useContext } from 'react'
import './styles.css'
import { CartContext } from '../../context/cart-context'

function Cart() {
    const {cart, onAddToCart, onRemoveItem, onDecreaseItem, total, getTotalItemQuantity } = useContext(CartContext)
    return (
        <div>
            <div className='cartContainer'>
                <h2>Cart</h2>
                {cart.length === 0 && <h3>Cart is empty</h3>}
                {
                    cart?.length > 0 && cart.map((product) => (
                        <div key={product.id} className='cartItem'>
                            <div className='cardImageContainer'>
                                <img className='cardImage' src={product.image} alt={product.name} />
                            </div>
                            <div className='cartContentContainer'>
                                <p className='cartProductName'>{product.name}</p>
                                <p className='cartPrice'>USD {product.price}</p>
                                <p className='cartQuantity'>qty: {product.quantity}</p>
                                <p className='cartStock'>{product.stock} left</p>
                                <div className='cartActions'>
                                    <button onClick={() => onAddToCart(product.id)} className='cartButttonAdd'>+</button>
                                    <button onClick={() => onDecreaseItem(product.id)} className='cartButttonDecrease'>-</button>
                                    <button onClick={() => onRemoveItem(product.id)} className='cartButttonRemove'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    cart?.length > 0 && (
                        <div className='cartDetailActions'>
                            <p className='cartTotal'>Total: USD {total}</p>
                            <p className='cartItemQuantity'>Total Items: {getTotalItemQuantity()}</p>
                            <button className='cartButttonCheckout'>Checkout</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart