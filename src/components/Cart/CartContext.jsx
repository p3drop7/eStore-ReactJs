import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()
export const CartUpdateContext = createContext()

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([])

    function updateCart(item){
        setCart([...cart, item])
    }

    useEffect(() => {
        console.log("Aca debajo va el cart en el context")
        console.log(cart)
    }, [cart])

    return(
        <CartContext.Provider value={cart} >
            <CartUpdateContext.Provider value={updateCart} >
                {children}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}