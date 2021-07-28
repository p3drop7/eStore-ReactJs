import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap'
import './itemCounter.css'

function ItemCounter({stock, initial}) {
    
    const [quantity, setQuantity] = useState(initial)

    function addToCart(){
        alert(`You added ${quantity}`)
    }

    function add(){
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    function substract(){
        if(quantity > initial){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="ItemCountContainer" >
            <div stock="5">
                <button onClick={add} ><FontAwesomeIcon icon={faPlus}/></button>
                <div>{quantity}</div>
                <button onClick={substract} ><FontAwesomeIcon icon={faMinus} /></button>
            </div>
            <Button className="addButton" variant="primary" onClick={addToCart}>Add to cart</Button>
        </div>
    )
}

export default ItemCounter
