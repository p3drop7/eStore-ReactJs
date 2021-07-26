import React from 'react'
import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon"/>
    )
}

export default CartWidget