import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getData } from '../../data/getData'
import ItemDetail from "./ItemDetail"
import "./ItemDetail.css"

function ItemDetailContainer() {
    
    const [item, setItem] = useState(false)
    const { itemId } = useParams()

    useEffect(()=>{
        setItem(false)

        setTimeout(()=>{

            getData()
                .then( res => { setItem( res.find( it => it.id === parseInt(itemId)))})
                .catch(err => { console.log("Error: " + err) })
                .finally(()=> { console.log("Finish") })

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