import { useState } from 'react'
import Detail from './Detail'
import ItemCounter from './ItemCounter/ItemCounter'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import "./itemDetail.css"
import "../ItemDetail/ItemCounter/itemCounter.css"

function ItemDetail({item}) {

    const [counter, setCounter] = useState(1)
    const [quantity, setQuantity] = useState(false)

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
        setQuantity(counter)
    }

    console.log(quantity)

    return (
        <div className="itemDetail" >
            <Detail item={item} />

            {quantity === false && (
                <ItemCounter 
                add={add}
                substract={substract}
                addToCart={addToCart}
                counter={counter} 
                />
            )}

            {quantity && (
                <Button as={Link} to="/cart" className="confirmAddButton" >Confirm purchase</Button>
            )}
                
        </div>
    )
}

export default ItemDetail