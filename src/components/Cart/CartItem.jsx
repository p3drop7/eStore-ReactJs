import React from 'react'

function CartItem({item, quantity}) {
    
    return (
        <div>
            <h2>Product: {item.name}</h2>
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default CartItem
