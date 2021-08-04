import { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'


function CartContainer() {

    const cart = useContext(CartContext)
    
    return (
        <div>
            {
                cart.map(element => 
                    <CartItem
                        key={element.item.id}
                        item={element.item}
                        quantity={element.quantity}
                    />
            )}
            <p></p>
        </div>
    )
}

export default CartContainer
