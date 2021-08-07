import { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'


function CartContainer() {

    const cart = useContext(CartContext)
    /* const removeItem = useContext(CartRemoveItem) */
    console.log(cart)
    
    return (
        <div>
            {
                cart.map(element => 
                    <CartItem
                        key={element.item.id}
                        id={element.item.id}
                        item={element.item}
                        quantity={element.quantity}
                        /* removeItem={removeItem} */
                    />
            )}
        </div>
    )
}

export default CartContainer
