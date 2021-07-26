import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getData } from './getData.js'
import ItemDetail from "./ItemDetail"
import "./itemDetail.css"

function ItemDetailContainer() {

    const [item, setItem] = useState(false)
    const { itemId } = useParams()

    useEffect(()=>{

        setItem(false)
        
        setTimeout(()=>{
            getData()
            .then(res => { setItem( res.filter( it => it.id === parseInt(itemId) )[0])})
            .catch(err => {console.log("Error: " + err)})
            .finally(()=> {console.log("Finish")})
        }, 1000)
        
    }, [itemId])

    return (
        <div className="itemDetailContainer" >
            {item && (
            <ItemDetail item={item} />
            )}
            {item === false && (
                <div>Loading...</div>
            )}
        </div>
        
    )
}

export default ItemDetailContainer