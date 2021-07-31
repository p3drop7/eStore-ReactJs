import React from 'react'

function CartItem({item, quantity}) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{quantity}</p>
        </div>
    )
}

export default CartItem
