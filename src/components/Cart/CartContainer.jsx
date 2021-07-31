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
                    />
            )}
            <p></p>
        </div>
    )
}

export default CartContainer
