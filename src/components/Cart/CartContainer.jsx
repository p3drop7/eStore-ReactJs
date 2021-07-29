import { useContext, useState, useEffect } from 'react'
import CartContext from '../context/CartContext'


const cartItems = {}

function CartContainer() {

    const [cart, setCart] = useState({})
    const cart = useContext(CartContext)

    useEffect(() => {


    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CartContainer
