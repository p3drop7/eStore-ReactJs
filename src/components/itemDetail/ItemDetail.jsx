import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Detail from './Detail'
import ItemCounter from './ItemCounter/ItemCounter'
import { CartUpdateContext, CartContext } from '../Cart/CartContext'
import "./ItemDetail.css"



function ItemDetail({item}) {

    const [counter, setCounter] = useState(1)
    const [quantity, setQuantity] = useState(false)
    const updateCart = useContext(CartUpdateContext)
    const cart = useContext(CartContext)

    function add(){
        if(counter < item.stock){
            setCounter(counter + 1)
        }
    }

    function substract(){
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    function addToCart(){
        
        if(cart.length === 0){
            
            setQuantity(counter)
            console.log("quantity es " + quantity)
            updateCart({item: item, quantity: quantity})

        }else if( cart.some(it => it.item.id === item.id) ){

            alert("You already added " + item.name)
        
        }else{
            
            setQuantity(counter)
            console.log("quantity es " + quantity)
            updateCart({item: item, quantity: quantity})
        }
    }


    return (
        <div className="itemDetail" >
            <Detail item={item}/>

            {quantity === false && (
                <div className="ItemCountContainer">
                    <ItemCounter 
                    add={add}
                    substract={substract}
                    addToCart={addToCart}
                    counter={counter}
                    />
                </div>
            )}

            {quantity && (
                <div className="ItemCountContainer">
                    <Button variant="success" as={Link} to="/cart" className="confirmAddButton" >Go to cart</Button>
                    <Button variant="secondary" as={Link} to="/" className="confirmAddButton" >Go back</Button>
                </div>
            )}
                
        </div>
    )
}

export default ItemDetail