import React from 'react'
import Detail from './Detail'
import ItemCounter from './ItemCounter/ItemCounter'
import "./itemDetail.css"
import "../ItemDetail/ItemCounter/itemCounter.css"

function ItemDetail({item}) {

    return (
        <div className="itemDetail" >
            <Detail item={item} />
            <ItemCounter stock={item.stock} initial={1} />
        </div>
    )
}

export default ItemDetail