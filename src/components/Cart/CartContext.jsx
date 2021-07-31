import { useState } from 'react'
import { useEffect } from 'react'
import {createContext} from 'react'
import { getData } from '../../data/getData'

function CartContext() {

    const [cartItems, setCartItems] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
            .then(res => setData(res))
    }, [])

    const addItem =(item)=> {
        if(item.id === (cartItems.find(it => it.id === item.id))){
            console.log("No adding " + item)
        }else{
            setCartItems([... item])
        }
    }

    const CartContext = createContext()

    return CartContext
}

export default CartContext