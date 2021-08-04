import { useState, createContext } from 'react'

export const CartContext = createContext()
export const CartUpdateContext = createContext()

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([])

    function updateCart(item){
        setCart([...cart, item])
    }

    return(
        <CartContext.Provider value={cart} >
            <CartUpdateContext.Provider value={updateCart} >
                {children}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}