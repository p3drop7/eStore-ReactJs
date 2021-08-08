import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    const [size, setSize] = useState(0)

    function updateCart(item, counter){
        if( cart.some(it => it.item.id === item.id) ){
            
            const idx = cart.findIndex(it => it.item.id === item.id)
            const oldQuantity = cart[idx].quantity
            const newQuantity = oldQuantity + counter
            cart.splice(idx, 1)
            setCart([...cart, {item: item, quantity: newQuantity}])
            setSize(size + counter)
            
        }else{
            setCart([...cart, {item: item, quantity: counter}])
            setSize(size + counter)
        }
    }

   /*  function updateSize(){
        setSize(cart.reduce( (acum, value) => acum + value.quantity, 0))
        console.log("size is" + size)
    } */

    function removeItem(itemId){
        const idx = cart.findIndex(it => it.item.id === itemId)
        const cartItems = cart
        const removedItem = cartItems.splice(idx, 1)
        console.log("removedItem es ")
        console.log(removedItem)
        setCart(cartItems)
        
        if(cart.lenght === 0){
            setSize(0)
        } else {
            setSize( cart.reduce((acum, value) => acum + value.quantity, 0))
        }
    }

    return(
        <CartContext.Provider value={{ cart, size, updateCart, removeItem, /* updateSize */ }} >
            {children}
        </CartContext.Provider>
    )
}