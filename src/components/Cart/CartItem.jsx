import React from 'react'

function CartItem({id, item, quantity}) {
    
    return (
        <div>
            <h2>Product: {item.name}</h2>
            <p>Quantity: {quantity}</p>
            {/* <button onClick={removeItem(id)}></button> */}
        </div>
    )
}

export default CartItem
