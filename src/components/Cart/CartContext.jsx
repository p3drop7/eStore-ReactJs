import { useState, createContext } from 'react'

export const CartContext = createContext()
export const CartUpdateContext = createContext()
/* export const CartRemoveItem = createContext() */

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([])

    function updateCart(item){
        setCart([...cart, item])
    }

    /* function removeItem(id){
        const idx = cart.indexOf(it => it.id === id)
        setCart( cart.splice(idx, 1) )
    } */

    return(
        <CartContext.Provider value={cart} >
            <CartUpdateContext.Provider value={updateCart} >
                {/* <CartRemoveItem.Provider value={removeItem} > */}
                    {children}
                {/* </CartRemoveItem.Provider > */}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}