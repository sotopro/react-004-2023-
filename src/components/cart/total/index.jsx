/* eslint-disable react/prop-types */
import './styles.css'

const Total = ({onHandlerCheckout, total, totalItemQuantity, isCart  }) => {
    return (
        <div className='cartDetailActions'>
            <p className='cartTotal'>Total: USD {total}</p>
            <p className='cartItemQuantity'>Total Items: {totalItemQuantity}</p>
            {isCart ? <button onClick={onHandlerCheckout} className='cartButttonCheckout'>Checkout</button> : null}
        </div>
    )
}

export default Total